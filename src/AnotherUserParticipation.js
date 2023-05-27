import React from "react";

function AnotherUserParticipation({ onClick }) {
  function handleCLick(event) {
    event.preventDefault();
    onClick(false, "");
  }
  return (
    <div>
      <button onClick={handleCLick}>An other user participation</button>
    </div>
  );
}

export default AnotherUserParticipation;