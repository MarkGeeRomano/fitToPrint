const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

const newsController = {};

newsController.getNews = async (req, res, next) => {
    console.log(`hitting newsAPI`);

    const bloomRequest = await request(`https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=e8a2cd3b777944f18f841e6ff53d59e3`);
    const axiosRequest = await request(`https://newsapi.org/v2/top-headlines?sources=axios&apiKey=e8a2cd3b777944f18f841e6ff53d59e3`);
    const nytRequest = await request(`https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=e8a2cd3b777944f18f841e6ff53d59e3`);
    const espnRequest = await request(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=e8a2cd3b777944f18f841e6ff53d59e3`);
    const hnRequest = await request(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);

    const bloomStories = JSON.parse(bloomRequest.body).articles;
    const axiosStories = JSON.parse(axiosRequest.body).articles;
    const nytStories = JSON.parse(nytRequest.body).articles;
    const espnStories = JSON.parse(espnRequest.body).articles;
    const hnStories = JSON.parse(hnRequest.body).slice(0, 10);

    const bloomStoriesClean = bloomStories.map(story => {
        return {
            title: story.title,
            url: story.url,
            time: story.publishedAt,
            description: story.description,
            img: story.urlToImage
        };
    });

    const axiosStoriesClean = axiosStories.map(story => {
        return {
            title: story.title,
            url: story.url,
            time: story.publishedAt,
            description: story.description,
            img: story.urlToImage
        };
    });

    const nytStoriesClean = nytStories.map(story => {
        return {
            title: story.title,
            url: story.url,
            time: story.publishedAt,
            description: story.description,
            img: story.urlToImage
        };
    });

    const espnStoriesClean = espnStories.map(story => {
        return {
            title: story.title,
            url: story.url,
            time: story.publishedAt,
            description: story.description,
            img: story.urlToImage
        };
    });

    const hnDetails = hnStories.map(story => {
        return new Promise((resolve, reject) => {
            let detail = request(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`);
            resolve(detail);
        });
    });

    const hnStoriesClean = await Promise.all(hnDetails).map(story => {
        const parsedStory = JSON.parse(story.body);
        return {
            title: parsedStory.title,
            url: parsedStory.url,
            time: parsedStory.time,
            score: parsedStory.score,
        };
    });

    // res.locals.stories =
     return  [
        { name: 'Bloomberg', articles: bloomStoriesClean },
        { name: 'Axios', articles: axiosStoriesClean },
        { name: `New York Times`, articles: nytStoriesClean },
        { name: `ESPN`, articles: espnStoriesClean },
        { name: `Hacker News`, articles: hnStoriesClean }
    ];
    
    // next();
};

module.exports = newsController;