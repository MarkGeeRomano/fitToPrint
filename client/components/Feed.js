import React from 'react';
import Article from './Article';
//justify content -> main axis -
//align content -> cross axis |

const Feed = ({ articles }) => {
    const articleArray = articles.slice(0, 4).map((article, i) =>
        <Article article={article} key={i} />
    );

    return (
        <div className="container">
            {[articleArray]}
        </div>
    );
};

export default Feed;
