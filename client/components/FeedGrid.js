import React from 'react';
import { Link } from 'react-router';
import Feed from './Feed';

const FeedGrid = ({ articles, archives, user, home, addArchive }) => {
    const feeds = home ?
        Object.keys(articles).map((media, i) =>
            <Feed media={media} articles={articles[media]} addArchive={addArchive} key={media} user={user} />
        ) :
        Object.keys(archives).map((media, i) =>
            <Feed media={media} articles={archives[media]} key={media} />
        )
    return (
        <div>
            <hr className="style18" />
            {feeds}
        </div>
    );
};

export default FeedGrid;