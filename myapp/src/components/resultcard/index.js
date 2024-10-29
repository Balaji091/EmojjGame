import { Component } from "react";
import './index.css';

class ResultCard extends Component {
    render() {
        const { score, setResult } = this.props;
        return (
            <div className="result-card">
                <div className="result-message">
                    <h1 className="result-title">You Lose</h1>
                    <p className="result-score">Your score is {score}</p>
                    <button className="play-again-button" onClick={() => setResult()}>
                        Play Again
                    </button>
                </div>
                <div className="result-image">
                    <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="Game Over" />
                </div>
            </div>
        );
    }
}

export default ResultCard;
