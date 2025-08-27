"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Loader from "./ui/Loader";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [content, setContent] = useState("");

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
        body: JSON.stringify({ firstName, lastName, email, content }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Sended answer:", data);

        // vyčištění polí
        setEmail("");
        setContent("");
        setFirstName("");
        setLastName("");

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

      <div>
        {loading ? (
          // Spinner (můžeš nahradit <Loader /> pokud ho máš)
          <div className="flex justify-center">
            <p>Odesílám dotaz</p>
            <Loader />
          </div>
        ) : (
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
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
