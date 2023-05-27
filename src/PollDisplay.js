import React from "react";

import { Card, List } from "antd";

/**
 * Display of predefined poll question and answer choices
 *  Show the number of votes for each answer choice
 *
 */
function PollDisplay({ question, choices }) {
  return (
    <Card>
      <h2>Poll Question: {question}</h2>
      <List>
        {choices.map((choice) => (
          <li key={choice.id}>
            {choice.label} : {choice.votes} Votes
          </li>
        ))}
      </List>
    </Card>
  );
}

export default PollDisplay;
