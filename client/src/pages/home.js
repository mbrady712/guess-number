import { useState } from "react";
export const Home = () => {

    const [guesses, setGuesses] = useState([]);

    const handleKeyPress = (event) => {
        var feedback = "";
        var guess;
        if(event.key === 'Enter' && guesses.length <= 3){
            guess = event.target.value;
            console.log(guess);
            setGuesses([
                ...guesses, 
                { feedback: feedback, guess: guess }])
        }
        if(guesses.length > 3){
            feedback = "Game Over";
            guess = event.target.value;
            console.log(guess);
            setGuesses([
                ...guesses, 
                { feedback: feedback, guess: guess }])
        }
    }


    return (
        <div className="home">
            <h1>Guess The Number</h1>
            <p>Guess a number between 1-100. You get five tries.</p>
            <div id="game">
                <div className="gameInput">
                    <input type="number" onKeyDown={handleKeyPress}/>
                </div>
                {guesses.map(((Try, idx) => (
                    <div key={idx}>
                        <div>Guess {idx + 1}: {Try.guess}</div>
                        <div>{Try.feedback}</div>
                    </div>

                )))}
            </div>
        </div>
    );
};