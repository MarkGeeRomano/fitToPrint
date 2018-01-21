import React from 'react';
import Article from './Article';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = { i: 0 };
        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    };

    moveRight() {
        this.state.i === 8 ? null : this.setState((prevState) => ({ i: prevState.i + 4 }));
    };
    moveLeft() {
        this.state.i === 0 ? null : this.setState((prevState) => ({ i: prevState.i - 4 }));
    };

    render() {
        let { articles, media, addArchive, user } = this.props;
        let { i } = this.state;

        const articleArray = articles.slice(i, i + 4).map((article, i) =>
            <Article article={article} key={article.title} media={media} addArchive={addArchive} user={user}/>
        );


        return [
            <div className="container">
                <div onClick={this.moveLeft} className="box"><img className="arrow" src="/left.svg" /></div>
                {articleArray}
                <div onClick={this.moveRight} className="box"><img className="arrow" src="/right.svg" /></div>
            </div>
        ]
    };
};

export default Feed;
