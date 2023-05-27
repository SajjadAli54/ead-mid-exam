import React, { useState } from "react";
import "./App.css";
import PollDisplay from "./PollDisplay";
import UserParticipation from "./UserParticipation";
import ThankYouMessage from "./ThankYouMessage";
import AnotherUserParticipation from "./AnotherUserParticipation";

import { Button } from "antd";

function App() {
  const obj = {
    question: "What is your favorite programming language?",
    choices: [
      { id: 1, label: "JavaScript", votes: 0 },
      { id: 2, label: "Python", votes: 0 },
      { id: 3, label: "Java", votes: 0 },
      { id: 4, label: "C#", votes: 0 },
    ],
  };

  const [choices, setChoices] = useState(obj.choices);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  function handleSubmit(choices) {
    if (!hasVoted) {
      setHasVoted(true);
      setChoices(choices);
    }
  }

  function handleAnotherUser() {
    setHasVoted(false);
  }

  return (
    <div className="App">
      <PollDisplay question={obj.question} choices={choices} />
      <Button onClick={() => setHasStarted(true)}>Start Poll</Button>

      {hasStarted && (
        <UserParticipation
          question={obj.question}
          choices={choices}
          onSubmit={handleSubmit}
          user={hasVoted}
          selection={""}
        />
      )}
      {hasVoted && <ThankYouMessage />}
      {hasVoted && <AnotherUserParticipation onClick={handleAnotherUser} />}
    </div>
  );
}

export default App;
