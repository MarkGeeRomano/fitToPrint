import React from 'react';

const Article = ({ article }) => {
    return (
        <div className="box">
            <div className="holder">
                <div className="title-holder">
                    <strong>{article.title}</strong>
                </div>
                <img src={"hnlogo.svg"} />
            </div>
        </div >
    );
};

export default Article;