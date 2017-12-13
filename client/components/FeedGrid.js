import React from 'react';
import { Link } from 'react-router';
import Feed from './Feed';

const FeedGrid = ({ articles, user }) => {    
    const feeds = Object.keys(articles).map((media, i) =>
        <Feed media={media} articles={articles[media]} key={media} />
    );
    return (
        <div>            
            <hr className="style18" />
            {feeds}
        </div>
    );
};

export default FeedGrid;