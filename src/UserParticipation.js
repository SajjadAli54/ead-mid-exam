import React from "react";
import { Formik, Field, Form } from "formik";

function UserParticipation({ question, choices, onSubmit, user, selection }) {
  const [selectedChoice, setSelectedChoice] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (selectedChoice === null || user) {
      return;
    }

    const newChoices = choices.map((choice, index) => {
      if (index === selectedChoice) {
        return {
          ...choice,
          votes: choice.votes + 1,
        };
      }
      return choice;
    });
    onSubmit(newChoices);
  }
  function handleVote(index) {
    setSelectedChoice(index);
  }
  return (
    <div>
      <h2>Poll Question: {question}</h2>
      <form>
        {choices.map((choice, index) => (
          <div key={choice.id}>
            <input
              type="radio"
              name="vote"
              id={`choice-${choice.id}`}
              value={choice.id}
              onChange={() => handleVote(index)}
            />
            <label htmlFor={`choice-${choice.id}`}>{choice.label}</label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

/**
 * Formik Radio Buttons for above task that gets reset on submit
 */

export default UserParticipation;
