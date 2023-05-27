import React from "react";
import AnotherUserParticipation from "./AnotherUserParticipation";
import ThankYouMessage from "./ThankYouMessage";

function UserParticipation({ question, choices }) {
  const [selectedChoice, setSelectedChoice] = React.useState(null);
  const [myChoices, setMyChoices] = React.useState(choices);
  const [hasVoted, setHasVoted] = React.useState(false);

  const [text, setText] = React.useState("");
  function handleAnotherUser(user, text) {
    setSelectedChoice(text);
    setHasVoted(user);
    setText("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (selectedChoice === null) {
      return;
    }
    if (hasVoted) {
      setText("You have already voted.");
      return;
    }
    setHasVoted(true);
    console.log("selectedChoice", choices[selectedChoice].label);
    const newChoices = myChoices.map((choice, index) => {
      if (index === selectedChoice) {
        return {
          ...choice,
          votes: choice.votes + 1,
        };
      }
      return choice;
    });
    setMyChoices(newChoices);
  }
  function handleVote(index) {
    setSelectedChoice(index);
  }
  return (
    <div>
      <h2>Poll Question: {question}</h2>
      {hasVoted && <p>{text}</p>}
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {hasVoted && <ThankYouMessage />}
        {hasVoted && <AnotherUserParticipation onClick={handleAnotherUser} />}
      </form>
    </div>
  );
}

export default UserParticipation;
