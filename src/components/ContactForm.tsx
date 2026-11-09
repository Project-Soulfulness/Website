"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/content";

const topics = ["Joining the community", "Events & workshops", "Collaborations & speaking", "Something else"];

/* No backend yet — submitting opens a WhatsApp chat with us, with everything pre-filled. */
export default function ContactForm() {
  const [chatUrl, setChatUrl] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `${f.get("topic")} — ${f.get("name")}\n\n${f.get("message")}\n\n—\n${f.get("name")}\n${f.get("email")}${f.get("phone") ? `\n${f.get("phone")}` : ""}`;
    const url = whatsappLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setChatUrl(url);
  }

  const field = "mt-2 w-full rounded-2xl border border-black/10 bg-cream/60 px-4 py-3 text-base text-ink outline-none transition focus:border-forest focus:bg-paper focus:ring-4 focus:ring-forest/15";
  const label = "text-sm font-medium text-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={label}>
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Phone <span className="font-normal text-muted">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className={label}>
        What&apos;s it about?
        <select name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Message
        <textarea name="message" required rows={5} placeholder="Tell us a little about yourself or what you'd like to know…" className={`${field} resize-y`} />
      </label>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest/25 transition hover:-translate-y-0.5 hover:brightness-95">
          Send message <Send size={16} />
        </button>
        <p className="text-sm text-muted" aria-live="polite">
          {chatUrl
            ? <>WhatsApp should open with your message ready. If it didn&apos;t, <a href={chatUrl} target="_blank" rel="noopener noreferrer" className="text-forest underline">tap here</a>.</>
            : "This opens WhatsApp with your message ready to send."}
        </p>
      </div>
    </form>
  );
}
