const Archive = require(`../models/archiveModel`);

const archiveController = {};

archiveController.addArchive = async (req, res, next) => {
    console.log(`trying to add archive`);
    const user = res.locals.user;
    const { title, name, data } = req.body;

    let archivedArticle;
    let archives;
    try {
        archivedArticle = await Archive.findOne({ title, name });
    } catch (e) {
        return res.json(e)
    };

    if (archivedArticle) {
        console.log(`article exists, pushing it.`);
        archives = user.savedArticles.reduce((allArt, currArt) => {
            allArt[currArt.name] ? allArt[currArt.name].push(currArt.data) :
                allArt[currArt.name] = [currArt.data];
            return allArt;
        }, {});
        user.savedArticles.push(archivedArticle._id);
    }
    else {
        console.log(`article doesn't exist`);
        try {
            archivedArticle = await Archive.create({ title, name, data });
            archives = user.savedArticles.reduce((allArt, currArt) => {
                allArt[currArt.name] ? allArt[currArt.name].push(currArt.data) :
                    allArt[currArt.name] = [currArt.data];
                return allArt;
            }, {});
            user.savedArticles.push(archivedArticle._id);
        } catch (e) {
            return res.json(e);
        }
    };

    await user.save();

    const newArticle = {
        title: archivedArticle.data.title,
        url: archivedArticle.data.url,
        description: archivedArticle.data.description,
        img: archivedArticle.data.img,
    }

    archives[archivedArticle.name] ?
        archives[archivedArticle.name].push(newArticle)
        : archives[archivedArticle.name] = [newArticle];
 
    return res.json({ archives });
};

module.exports = archiveController;