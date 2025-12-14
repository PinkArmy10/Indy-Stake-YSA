import "../App.css";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";  // Use updateDoc

const POLL_DOC = doc(db, "polls", "mainPoll");

const initialPoll = {
  question: "Which YSA activity do you prefer?",
  options: [
    { id: "games", label: "Game Night", votes: 0 },
    { id: "temple", label: "Temple Trip", votes: 0 },
    { id: "service", label: "Service Project", votes: 0 },
    { id: "caroling", label: "Caroling", votes: 0 },
  ],
};

export default function FirebasePoll() {
  const [poll, setPoll] = useState(initialPoll);

  useEffect(() => {
    const unsub = onSnapshot(POLL_DOC, (snap) => {
      if (snap.exists()) {
        setPoll(snap.data());
      }
    });
    return () => unsub();
  }, []);

  const handleVote = async (id) => {
    if (!poll) return;
    
    // Update only the specific option's votes
    const newOptions = poll.options.map((opt) =>
      opt.id === id ? { ...opt, votes: (opt.votes || 0) + 1 } : opt
    );
    
    // Save to Firebase FIRST (triggers onSnapshot update)
    await updateDoc(POLL_DOC, { options: newOptions });
  };

  const totalVotes = poll.options.reduce((sum, opt) => sum + (opt.votes || 0), 0);

  return (
    <div className="poll-container">
      <h3>{poll.question}</h3>
      {poll.options.map((option) => {
        const votes = option.votes || 0;
        const percentage = totalVotes ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        return (
          <div key={option.id} className="poll-option">
            <button onClick={() => handleVote(option.id)} className="poll-btn">
              {option.label} ({votes})
            </button>
            {totalVotes > 0 && (
              <div className="poll-bar">
                <div style={{width: `${percentage}%`}} />
              </div>
            )}
          </div>
        );
      })}
      {totalVotes > 0 && <p>Total: {totalVotes} votes</p>}
    </div>
  );
}
