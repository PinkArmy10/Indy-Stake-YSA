import { useEffect, useState } from "react";

const CONTACT_KEY = "ysa_contact_submissions";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submissions, setSubmissions] = useState([]);

  // Load saved submissions
  useEffect(() => {
    const saved = localStorage.getItem(CONTACT_KEY);
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  // Save whenever submissions change
  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(submissions));
  }, [submissions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const newEntry = {
      id: Date.now(),
      ...form,
    };

    setSubmissions((prev) => [...prev, newEntry]);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Have an activity you would like to do? Let us know: </h2>

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

      <div className="contact-submissions">
        <h3>Local submissions (this browser only)</h3>
        <ul>
          {submissions.map((s) => (
            <li key={s.id}>
              <strong>{s.name}</strong> ({s.email}): {s.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
