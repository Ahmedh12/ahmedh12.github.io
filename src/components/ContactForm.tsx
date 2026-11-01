'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:ahmedhussien783@gmail.com?subject=${encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form">
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              margin: '0 auto 16px',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              background: '#e8f6ee',
              color: '#16a34a',
              fontSize: '2rem',
              fontWeight: 800,
            }}
          >
            ✓
          </div>
          <h3 style={{ color: 'var(--navy)' }}>Thanks!</h3>
          <p className="muted">
            Your email client should have opened with the message. If it didn&apos;t, email me directly at
            ahmedhussien783@gmail.com.
          </p>
          <button className="btn btn--outline" onClick={() => setSent(false)}>
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button className="btn btn--primary" type="submit">
        Send message
      </button>
    </form>
  );
}