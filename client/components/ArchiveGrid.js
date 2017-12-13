import React from 'react';
import { Link } from 'react-router';
import Feed from './Feed';

const ArchiveGrid = ({ archives }) => {    
    const feeds = Object.keys(archives).map((media, i) =>
        <Feed media={media} articles={archives[media]} key={media} />
    );
    return (
        <div>
            <hr className="style18" />
            {feeds}
        </div>
    );
};

export default ArchiveGrid;