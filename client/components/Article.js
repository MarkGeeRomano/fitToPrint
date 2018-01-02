import React from 'react';

const Article = ({ article, addArchive, media, user }) => {

    return (
        <div className="box">
            <div className="holder">
                <div className="title-holder">
                    <strong>{article.title}</strong>
                </div>
                <img src={"hnlogo.svg"} />
                <div onClick={() => addArchive({ name: media, title: article.title, data: article, user: user.userName })}>
                    <img className="archive-icon" src="archiveIcon.svg" />
                </div>
            </div>
        </div >
    );
};

export default Article;