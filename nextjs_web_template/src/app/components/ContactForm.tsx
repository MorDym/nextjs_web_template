"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("❌ Chyba při odesílání");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto flex flex-col gap-4 p-4 border rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold">Kontaktní formulář</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Vaše jméno"
        required
        className="border rounded p-2"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Váš e-mail"
        required
        className="border rounded p-2"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Vaše zpráva"
        required
        rows={4}
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
      >
        Odeslat
      </button>

      {success && (
        <p className="text-green-600 font-semibold">
          ✅ Zpráva byla úspěšně odeslána!
        </p>
      )}
    </form>
  );
}
