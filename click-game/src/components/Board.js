import React from 'react';
import Square from './Square';

class Board extends React.Component {

    state = {
        characters: [`bobbelcher`, `tinabelcher`, `louisebelcher`, `teddy`, `mort`, `jimmypestojr`, `andyandolliepesto`, `genebelcher`, `lindabelcher`],
        clicked: [],
        score: 0,
        highScore: 0
    }


    handleClick = event => {
        const clicked = event.target.getAttribute(`alt`);
        const newClicked = this.state.clicked;
        if (!this.state.clicked.includes(clicked)) {
            newClicked.push(clicked);
            let newScore = this.state.score + 1;
            this.setState({clicked: newClicked});
            this.setState({score: newScore});
        } else {
            if (this.state.score > this.state.highScore) {
                this.setState({ highScore: this.state.score});
            }
            this.setState({score: 0});
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Bob's Burgers Memory Game</h1>
                    <h4>Current Score: {this.state.score}</h4>
                    <h4>High Score: {this.state.highScore}</h4>
                </header>
                <div className="grid-container">
                    <Square
                        characters={this.state.characters}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }
}

export default Board;