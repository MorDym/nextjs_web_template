"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Loader from "./ui/Loader";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [content, setContent] = useState("");
  const [consens, setConsens] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, content, consens }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Sended answer:", data);

        // vyčištění polí
        setEmail("");
        setContent("");
        setFirstName("");
        setLastName("");
        setConsens(false)

        setSuccess(true);
      } else {
        console.error("Error creating answer:", await res.json());
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Jméno"
        className="border p-2 rounded w-full"
        value={firstName}
        required
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Přijmení"
        className="border p-2 rounded w-full"
        value={lastName}
        required
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-full"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Zpráva"
        className="border p-2 rounded w-full"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <label>
      <input type="radio" required onChange={(e) => setConsens(true)} />
      &nbsp; Souhlasím s podmínkami
      </label>

      <div>
        {loading ? (
          <div className="flex justify-center">
            <p>Odesílám dotaz</p>
            <Loader />
          </div>
        ) : (
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={!consens}
          >
            Odeslat dotaz
          </Button>
        )}
      </div>

      {success && (
        <p className="text-green-600 text-sm">✅ Zpráva byla úspěšně odeslána.</p>
      )}
      {error && (
        <p className="text-red-600 text-sm">
          ❌ Něco se pokazilo, zkuste to znovu.
        </p>
      )}
    </form>
  );
}
