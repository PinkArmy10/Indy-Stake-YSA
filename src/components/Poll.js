import { useEffect, useState } from "react";

const POLL_KEY = "ysa_poll_results";

const initialPoll = {
  question: "Which YSA activity do you prefer?",
  options: [
    { id: "games", label: "Game Night", votes: 0 },
    { id: "temple", label: "Temple Trip", votes: 0 },
    { id: "service", label: "Service Project", votes: 0 },
    { id: "caroling", label: "Caroling", votes: 0 },
  ],
};

function Poll() {
  const [poll, setPoll] = useState(initialPoll);

  // Load saved results once
  useEffect(() => {
    const saved = localStorage.getItem(POLL_KEY);
    if (saved) setPoll(JSON.parse(saved));
  }, []);

  // Save whenever poll changes
  useEffect(() => {
    localStorage.setItem(POLL_KEY, JSON.stringify(poll));
  }, [poll]);

  const handleVote = (id) => {
    setPoll((prev) => ({
      ...prev,
      options: prev.options.map((opt) =>
        opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
      ),
    }));
  };

  return (
    <div className="poll">
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((opt) => (
          <li key={opt.id}>
            <button onClick={() => handleVote(opt.id)}>{opt.label}</button>
            <span> – {opt.votes} vote(s)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;
