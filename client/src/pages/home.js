import { useState } from "react";
export const Home = () => {

    const ans = Math.floor(Math.random() * 100 + 1);
    console.log(ans);

    const [guesses, setGuesses] = useState([]);

    const handleKeyPress = (event) => {

        var feedback = "";
        if(event.key === 'Enter'){
            var guess = event.target.value;
            //if answer is not correct and there are still more turns
            if(guesses.length <= 3 && guess != ans){
                if(guess < ans){
                    feedback = "Your guess was too low.";
                }else{
                    feedback = "Your guess was too high.";
                }
                setGuesses([
                    ...guesses, 
                    { feedback: feedback, guess: guess }]);
            }
            //if asnwer is not correct and there are no more turns
            if(guesses.length > 3 && guess != ans){
                feedback = "Game Over. You're out of tries.";
                setGuesses([
                    ...guesses, 
                    { feedback: feedback, guess: guess }]);
            }
            //if asnwer is correct
            if(guess == ans){
                feedback = "You win! Game Over";
                setGuesses([
                    ...guesses, 
                    { feedback: feedback, guess: guess }]);
            }
            event.target.value = "";
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