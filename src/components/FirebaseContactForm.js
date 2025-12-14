import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const messagesCol = collection(db, "contactMessages");

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      await addDoc(messagesCol, {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setForm({ name: "", email: "", message: "" });
      setStatus("Message sent. Thank you!");
    } catch (err) {
      console.error("Failed to send message", err);
      setStatus("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Have any Suggestions foe activitys? Send us a message below: </h2>

        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactForm;
