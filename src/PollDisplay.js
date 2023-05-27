import React from "react";

/**
 * Display of predefined poll question and answer choices
 *  Show the number of votes for each answer choice
 *
 */
function PollDisplay({ question, choices }) {
  return (
    <div>
      <h2>Poll Question: {question}</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            {choice.label} : {choice.votes} Votes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollDisplay;
