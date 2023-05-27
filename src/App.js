import "./App.css";
import PollDisplay from "./PollDisplay";
import UserParticipation from "./UserParticipation";

function App() {
  return (
    <div className="App">
      <UserParticipation
        question="What is your favorite programming language?"
        choices={[
          { id: 1, label: "JavaScript", votes: 0 },

          { id: 2, label: "Python", votes: 0 },

          { id: 3, label: "Java", votes: 0 },

          { id: 4, label: "C#", votes: 0 },
        ]}
      />
    </div>
  );
}

export default App;

// git push -u origin main
