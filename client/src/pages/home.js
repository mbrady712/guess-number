import { useState } from "react";
export const Home = () => {

    const [Tries, setTries] = useState([]);

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          setTries([...Tries, ""]);
        }
    }

    const GameSection = () => {
        return (
            <div className="gameSection">
                <input type="number" onKeyUpCapture={handleKeyPress}></input>
                <p className="feedback">Feedback</p>
            </div>
        );
    }

    return (
        <div className="home">
            <h1>Guess The Number</h1>
            <p>Guess a number between 1-100. You get five tries.</p>
            <div id="game">
            <GameSection />
            {Tries.map(((Try, idx) => (
                <GameSection key={idx} />
            )))}
            </div>
        </div>
    );
};