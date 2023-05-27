# Timer Component

```jsx
import React from "react";

function Timer() {
  const [time, setTime] = React.useState(() => 10);

  const id = setInterval(() => {
    if (time < 0) {
      clearInterval(id);
      setTime(() => {
        return "Time's up!";
      });
    } else {
      setTime(time - 1);
    }
  }, 1000);

  return (
    <div>
      <h1>Timer</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Timer;
```
