const Media = require(`../models/mediaModel`);

const mediaController = {};
let cachedArticles;
const defaultScripts = [`ESPN`, `Hacker News`, `Bloomberg`, `New York Times`, `Axios`];

mediaController.queryNews = async (req, res, next) => {
    let subscriptions = res.locals.data ? res.locals.data.user.subscriptions : defaultScripts;
    let currentArticles;
    if (cachedArticles) currentArticles = cachedArticles;
    else {
        console.log(`queryingDB`);
        currentArticles = await Media.find({});
        currentArticles = currentArticles.reduce((allMedia, currMedia) => {
            allMedia[currMedia.name] = currMedia.articles;
            return allMedia;
        }, {});
    };

    const userArticles = subscriptions.reduce((allScripts, currScript) => {
        allScripts[currScript] = currentArticles[currScript];
        return allScripts;
    }, {});

    if (res.locals.data) {
        res.locals.data.articles = userArticles;
        res.locals.data.archives = res.locals.data.user.savedArticles.reduce((allArt, currArt) => {
            allArt[currArt.name] ? allArt[currArt.name].push(currArt.data) :
                allArt[currArt.name] = [currArt.data];
            return allArt;
        }, {});
        return res.json({ ...res.locals.data, availScripts: defaultScripts });
    } else return res.json({ user: { name: `Guest`, subscriptions }, articles: userArticles });
};

mediaController.updateArticles = async articles => {
    await Media.deleteMany();
    const currentArticles = await Media.create(articles);
    let mediaObj = {};
    currentArticles.forEach(media => {
        mediaObj[media.name] = media.articles;
        mediaObj = {};
    });
    cachedArticles = currentArticles;
    return currentArticles;
};

module.exports = mediaController;

