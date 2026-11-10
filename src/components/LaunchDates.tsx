"use client";

import { useEffect, useState } from "react";
import { CalendarHeart, MessageCircle } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { eventDateParts, launchDates, whatsappLink } from "@/lib/content";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* Whole days from today (visitor's local date) to an ISO date; computed after mount so server and browser agree. */
function daysUntil(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) / 86_400_000);
}

export default function LaunchDates() {
  const ref = useReveal<HTMLElement>();
  const [days, setDays] = useState<number[] | null>(null);

  useEffect(() => {
    const update = () => setDays(launchDates.map((l) => daysUntil(l.date)));
    update();
    const t = setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(t);
  }, []);

  // Once the grand launch has passed, the section has done its job.
  if (days && days[days.length - 1] < 0) return null;

  const remind = whatsappLink(
    `Hi Project Soulfulness! Please remind me about the ${launchDates.map((l) => `${l.label} on ${Number(l.date.slice(8))} ${MONTHS[Number(l.date.slice(5, 7)) - 1]}`).join(" and the ")}.`,
  );

  return (
    <section id="launch" ref={ref} className="bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-6 pb-10">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 sm:px-10 lg:px-14 lg:py-12 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-magenta/25 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                <CalendarHeart size={15} className="text-forest" /> Save the Dates
              </span>
              <h2 className="mt-4 font-serif font-semibold text-3xl lg:text-5xl leading-tight">We&apos;re opening our doors</h2>
              <p className="mt-3 text-white/75 max-w-sm">
                Join us at our garden café — be among the first to experience Project Soulfulness.
              </p>
              <a
                href={remind}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-forest/25 transition hover:-translate-y-0.5 hover:brightness-95"
              >
                <MessageCircle size={16} /> Remind me on WhatsApp
              </a>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2">
              {launchDates.map((l, i) => {
                const d = eventDateParts(l.date);
                const weekday = WEEKDAYS[new Date(`${l.date}T00:00:00Z`).getUTCDay()];
                const left = days?.[i];
                const accent = i === launchDates.length - 1 ? "var(--color-magenta)" : "var(--color-forest)";
                return (
                  <li key={l.label} className="relative rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/15 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <time dateTime={l.date} className="flex flex-col items-center rounded-2xl bg-paper px-4 py-2 text-center leading-tight text-ink shadow-lg">
                        <span className="text-xs font-semibold tracking-wider text-muted">{d.day}</span>
                        <span className="text-4xl font-bold">{d.date}</span>
                        <span className="text-xs font-semibold tracking-wider" style={{ color: accent }}>{d.month}</span>
                      </time>
                      {left !== undefined && left >= 0 && (
                        <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: accent }}>
                          {left === 0 ? "Today!" : left === 1 ? "Tomorrow" : `${left} days to go`}
                        </span>
                      )}
                      {left !== undefined && left < 0 && (
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/80">Done ✓</span>
                      )}
                    </div>
                    <h3 className="mt-5 font-serif font-semibold text-2xl" style={{ color: accent === "var(--color-forest)" ? "#7BE3B0" : "#F29BD3" }}>{l.label}</h3>
                    <p className="mt-1 text-sm font-medium text-white/90">{weekday}, {Number(d.date)} {MONTHS[Number(l.date.slice(5, 7)) - 1]} {d.year}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{l.note}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
