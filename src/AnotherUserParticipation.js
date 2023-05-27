import React from "react";

import { Button } from "antd";

function AnotherUserParticipation({ onClick }) {
  function handleCLick(event) {
    event.preventDefault();
    onClick();
  }
  return <Button onClick={handleCLick}>An other user participation</Button>;
}

export default AnotherUserParticipation;
