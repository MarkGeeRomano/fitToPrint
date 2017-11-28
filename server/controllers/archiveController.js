const Archive = require(`../models/archiveModel`);

const archiveController = {};

archiveController.addArchive = async (req, res, next) => {
    const user = res.locals.user;

    const mockArticle = {
        title: `No. 9 Ohio State closes out Michigan without J.T. Barrett`,
        name: `ESPN`,
        data: {
            "img": "http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1125%2Fr294146_1296x729_16%2D9.jpg",
            "description": "Dwayne Haskins comes off the bench to lead Ohio State past Michigan for the sixth straight year, keeping the Buckeyes' playoff hopes alive.",
            "time": "2017-11-25T20:50:11Z",
            "url": "http://espn.go.com/blog/bigten/post/_/id/143438/no-9-ohio-state-closes-out-michigan-without-j-t-barrett",
            "title": "No. 9 Ohio State closes out Michigan without J.T. Barrett"
        }
    };

    let archivedArticle = await Archive.findOne({
        title: mockArticle.title,
        name: mockArticle.name
    });

    if (archivedArticle) {
        console.log(`article exists, pushing it.`);
        user.savedArticles.push(archivedArticle._id);
    }
    else {
        console.log(`article doesn't exist`);
        archivedArticle = await Archive.create(mockArticle);
        console.log(`newly created article:`, archivedArticle);
        user.savedArticles.push(archivedArticle._id);
    };

    await user.save();
    res.json([user, archivedArticle]);
};

module.exports = archiveController;