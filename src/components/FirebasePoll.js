import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const POLL_DOC = doc(db, "polls", "mainPoll");

function Poll() {
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for realtime updates
  useEffect(() => {
    const unsub = onSnapshot(POLL_DOC, (snap) => {
      if (snap.exists()) {
        setPoll(snap.data());
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleVote = async (optionId) => {
    if (!poll) return;

    // Increment votes locally
    const updatedOptions = poll.options.map((opt) =>
      opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
    );

    setPoll((prev) => ({ ...prev, options: updatedOptions }));

    // Persist to Firestore (all users see the change)
    await updateDoc(POLL_DOC, {
      options: updatedOptions,
    });
  };

  if (loading || !poll) return <div>Loading poll...</div>;

  return (
    <div className="poll-widget">
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((opt) => (
          <li key={opt.id}>
            <button onClick={() => handleVote(opt.id)}>
              {opt.label}
            </button>
            <span> – {opt.votes} vote(s)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;
