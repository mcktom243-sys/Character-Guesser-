import React, { useState } from 'react';

const CharacterGuessModal = ({ characterName, isOpen, onClose }) => {
    const [guess, setGuess] = useState('');
    const [revealedLetters, setRevealedLetters] = useState(new Array(characterName.length).fill('_'));
    const [feedback, setFeedback] = useState('');

    const handleGuess = () => {
        const updatedRevealedLetters = revealedLetters.slice();
        let correctGuess = false;

        for (let i = 0; i < characterName.length; i++) {
            if (guess.toLowerCase() === characterName[i].toLowerCase()) {
                updatedRevealedLetters[i] = characterName[i];
                correctGuess = true;
            }
        }

        setRevealedLetters(updatedRevealedLetters);

        if (correctGuess) {
            setFeedback('Correct guess!');
        } else {
            setFeedback('Incorrect guess. Try again!');
        }

        setGuess('');
    };

    return (
        isOpen && (
            <div className="modal">
                <h2>Guess the Character</h2>
                <div className="hint">
                    <p>{revealedLetters.join(' ')}</p>
                </div>
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter a character name"
                />
                <button onClick={handleGuess}>Guess</button>
                <button onClick={onClose}>Close</button>
                {feedback && <p>{feedback}</p>}
            </div>
        )
    );
};

export default CharacterGuessModal;