// All page copy and media paths live here so sections stay presentational.

export const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Events",      href: "/events" },
  { label: "Blogs",       href: "/blog" },
  { label: "Contact",     href: "/contact" },
];

/* Section anchors only exist on the home page, so point them back at "/" from other pages. */
export function navHref(href: string, onHome: boolean) {
  return href.startsWith("#") && !onHome ? `/${href}` : href;
}

/* Public site URL — used for canonical links, the sitemap and social previews. Update if the domain differs. */
export const siteUrl = "https://www.projectsoulfulness.com"; // must match the live domain exactly (the bare domain redirects to www)

/* Photo stack under the hero intro — swap in real photos from the café. */
export const heroGallery = [
  { src: "/images/gallery-music.jpeg",       caption: "Music & good company" },
  { src: "/images/gallery-coffee-rave.jpeg", caption: "Coffee raves" },
  { src: "/images/gallery-comedy.jpeg",      caption: "Laughter-filled evenings" },
  { src: "/images/gallery-bulldog.jpeg",     caption: "Playtime with our pups" },
  { src: "/images/gallery-trek.jpeg",        caption: "Trails & fresh air" },
  { src: "/images/gallery-meals.jpeg",       caption: "Wholesome meals" },
  { src: "/images/gallery-painting.jpeg",    caption: "Paint & sip workshops" },
  { src: "/images/gallery-games.jpeg",       caption: "Games & giggles" },
];

export type IconName =
  | "sprout" | "coffee" | "flower" | "heart" | "users" | "sparkles"
  | "brain" | "lightbulb" | "dog" | "plane"
  | "chat" | "music" | "mic" | "salad" | "talk" | "palette";

export const heroPillars: { icon: IconName; label: string }[] = [
  { icon: "sprout", label: "Community Companionship" },
  { icon: "coffee", label: "Meaningful Conversations" },
  { icon: "flower", label: "Mindfulness & Wellness" },
  { icon: "heart",  label: "A Kinder, Happier You" },
];

export const problemSolutionPromise = [
  {
    icon:  "brain" as IconName,
    title: "The Problem",
    tone:  "blush" as const,
    body:  "Urban young adults are increasingly overwhelmed by work stress, peer pressure, relationship trauma, loneliness, trust issues and difficulty forming genuine companionship. Conventional therapy is often perceived as clinical and carries social stigma.",
  },
  {
    icon:  "lightbulb" as IconName,
    title: "The Solution",
    tone:  "mint" as const,
    body:  "A non-clinical social-wellness space where healing happens gently, socially and without judgement — through hospitality, companionship, mindfulness and community programming.",
  },
  {
    icon:  "heart" as IconName,
    title: "The Promise",
    tone:  "blush" as const,
    body:  "A gentle nature-cure approach — no clinical setting, no stigma. Just community, companionship and curated group trips that quietly rebuild emotional integrity over time.",
  },
];

/* `orbitImage` is the photo used in the hero circle animation; `image` is used on the Experiences cards. */
export const experiences: { id: string; icon: IconName; title: string; desc: string; image: string; orbitImage: string; accent: string }[] = [
  { id: "exp-cafe",       icon: "coffee",  title: "Café & Coffee Raving",   desc: "A warm, unhurried coffee culture to linger and connect.",       image: "/images/gallery-coffee-rave.jpeg",       orbitImage: "/images/orbit-cafe.jpeg", accent: "#E58A3A" },
  { id: "exp-bulldog",    icon: "dog",     title: "French Bulldog Adoption", desc: "Companion pets to ease loneliness and build trust.",            image: "/images/gallery-bulldog.jpeg",    orbitImage: "/images/gallery-bulldog.jpeg", accent: "#00BB65" },
  { id: "exp-travel",     icon: "plane",   title: "Travel Cluster",          desc: "Curated group trips that turn healing into shared experiences.", image: "/images/gallery-trek.jpeg",     orbitImage: "/images/orbit-travel.jpeg", accent: "#2D8BD8" },
  { id: "exp-discussion", icon: "music",   title: "Jamming Sessions",        desc: "Bring a song, pick up a guitar, or just sing along.",           image: "/images/gallery-music.jpeg", orbitImage: "/images/orbit-discussion.jpeg", accent: "#E58A3A" },
  { id: "exp-comedy",     icon: "mic",     title: "Stand-up Comedy",         desc: "Light-hearted evenings to release tension and laugh.",          image: "/images/gallery-comedy.jpeg",     orbitImage: "/images/orbit-comedy.jpeg", accent: "#C32991" },
  { id: "exp-menu",       icon: "salad",   title: "Curated Healthy Menu",    desc: "Food designed to nourish body and mind.",                       image: "/images/exp-meals.jpg",       orbitImage: "/images/orbit-menu.jpeg", accent: "#00BB65" },
  { id: "exp-talks",      icon: "talk",    title: "Inspirational Talks",     desc: "Sessions with accomplished speakers for perspective.",          image: "/images/exp-comedy.jpg",      orbitImage: "/images/exp-talks.jpg", accent: "#2D8BD8" },
  { id: "exp-workshop",   icon: "palette", title: "Weekend Workshops",       desc: "Skill-building and self-discovery formats to grow.",            image: "/images/gallery-painting.jpeg",   orbitImage: "/images/orbit-workshop.jpeg", accent: "#C32991" },
];

export const audiencePoints = [
  "Work stress and peer pressure",
  "Relationship trauma and trust issues",
  "Loneliness and companionship struggles",
];

/* Where the pre-launch weekend happens (21–22 Nov). */
const prelaunchVenue = { name: "White Teak Coffee Roasters, Mysuru", mapsUrl: "https://maps.app.goo.gl/sMiPguLHTQFoZUzA6" };

/* Launch milestones, shown in the "Save the Dates" section on the home page and on /events. */
export const launchDates: { label: string; date: string; note: string; venue?: { name: string; mapsUrl: string; embedUrl: string } }[] = [
  {
    label: "Pre-launch", date: "2026-11-21",
    note: "A first look at Project Soulfulness — come early, meet the team and the pups.",
    venue: {
      ...prelaunchVenue,
      embedUrl: "https://maps.google.com/maps?q=White+Teak+Coffee+Roasters,+Mysuru&ll=12.3282387,76.6285332&z=16&output=embed",
    },
  },
  { label: "Grand Launch", date: "2026-12-05", note: "Doors fully open: music, coffee, comedy and good people all day." },
];

/* While this is false the home page and /events show a "Coming soon" preview of the kinds of
   events planned (no dates, times or booking). True shows the real calendar below. */
export const eventsLive = true;

/* The event calendar. Keep it in date order: the home page shows the first four, /events shows them all.
   `start`/`end` are optional 24h "HH:MM" times; without them the card shows `timeNote`
   (or "Timing to be announced"). `venue` is optional; without it the café address is shown. */
export type EventItem = {
  slug:       string;
  date:       string; // ISO yyyy-mm-dd
  start?:     string;
  end?:       string;
  timeNote?:  string;
  venue?:     { name: string; mapsUrl: string };
  title:      string;
  tagline:    string;
  category:   string;
  image:      string;
  about:      string;
  highlights: string[];
  bring:      string[];
  goodFor:    string;
};

export const events: EventItem[] = [
  {
    slug: "prelaunch-painting", date: "2026-11-21", venue: prelaunchVenue,
    title: "Painting Session", tagline: "Brush off the stress.", category: "Art",
    image: "/images/gallery-painting.jpeg",
    about: "Kick off our pre-launch with a relaxed painting session. No skills needed — just pick up a brush, play with colour and see what comes out. All materials are provided.",
    highlights: ["All paints, brushes and canvases provided", "Gentle guidance for first-timers", "Take your artwork home"],
    bring: ["Clothes you don't mind getting a little colourful"],
    goodFor: "Anyone who wants to slow down and create something",
  },
  {
    slug: "prelaunch-fun-games", date: "2026-11-21", venue: prelaunchVenue,
    title: "Fun Games", tagline: "Games & giggles.", category: "Games",
    image: "/images/gallery-games.jpeg",
    about: "Easy, laugh-out-loud group games designed to break the ice. Come solo or bring your friends — you'll be on a team with new people in no time.",
    highlights: ["Ice-breakers and team games", "Small prizes for the winners", "Perfect for meeting new people"],
    bring: ["Your competitive side"],
    goodFor: "Anyone who wants to make new friends quickly",
  },
  {
    slug: "prelaunch-inspirational-talk", date: "2026-11-21", venue: prelaunchVenue,
    title: "Inspirational Talk", tagline: "Perspective from people who've been there.", category: "Talk",
    image: "/images/exp-talks.jpg",
    about: "An honest, uplifting talk on stress, setbacks and building a more balanced life — followed by an open Q&A and time to mingle.",
    highlights: ["Talk from a guest speaker", "Open audience Q&A", "Time to connect afterwards"],
    bring: ["Your questions"],
    goodFor: "Young professionals and students navigating pressure",
  },
  {
    slug: "prelaunch-standup-comedy", date: "2026-11-21", venue: prelaunchVenue,
    title: "Stand-up Comedy", tagline: "Laughter for a lighter you.", category: "Comedy",
    image: "/images/event-comedy.jpg",
    about: "Clean, relatable stand-up about city life, work and relationships — the kind of set where strangers end up laughing together like old friends.",
    highlights: ["Sets from local comedians", "Warm, intimate setting", "Coffee and bites all evening"],
    bring: ["A friend — or come solo and make one"],
    goodFor: "Anyone who needs a good laugh",
  },
  {
    slug: "prelaunch-frenchie-time", date: "2026-11-21", venue: prelaunchVenue,
    title: "Frenchie Time", tagline: "Snuggles, sips and smiles.", category: "Companionship",
    image: "/images/exp-bulldog.jpg",
    about: "Meet our French bulldogs! Spend time with the pups, grab a coffee and learn about responsible pet companionship from our team.",
    highlights: ["Time with our friendly French bulldogs", "Photos with the pups", "A short chat on responsible adoption"],
    bring: ["Nothing but yourself (and maybe a camera)"],
    goodFor: "Animal lovers, and anyone who could use some unconditional affection",
  },
  {
    slug: "prelaunch-jamming-session", date: "2026-11-21", venue: prelaunchVenue,
    title: "Jamming Session", tagline: "Bring a song, find your people.", category: "Music",
    image: "/images/gallery-music.jpeg",
    about: "Close the day with an open jam. Bring a song, pick up a guitar, or just sing along — every voice is welcome.",
    highlights: ["Open jam, all levels welcome", "Guitar and percussion available", "Sing-alongs to end the night"],
    bring: ["Your instrument, if you play one"],
    goodFor: "Music lovers, singers and shower singers alike",
  },
  {
    slug: "prelaunch-morning-yoga", date: "2026-11-22", timeNote: "Morning", venue: prelaunchVenue,
    title: "Morning Yoga", tagline: "Breathe in, slow down.", category: "Wellness",
    image: "/images/event-yoga.jpg",
    about: "Start your Sunday with a calm, guided yoga session suited to all levels — gentle stretches, breathing and a few quiet minutes to reset.",
    highlights: ["Guided session for all levels", "Breathing and relaxation practice", "Coffee and a healthy bite after"],
    bring: ["A yoga mat (or let us know and we'll arrange one)", "Comfortable clothes and a water bottle"],
    goodFor: "Anyone wanting a peaceful, energising start to the day",
  },
];

/* "7:00 PM – 9:00 PM", or the event's time note when no exact times are set. */
export function eventTimeLabel(ev: EventItem) {
  return ev.start ? `${formatEventTime(ev.start)}${ev.end ? ` – ${formatEventTime(ev.end)}` : ""}` : ev.timeNote ?? "Timing to be announced";
}

const DAYS   = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/* Date parts for the calendar badges, computed without time zones so server and browser always agree. */
export function eventDateParts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { day: DAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()], date: String(d).padStart(2, "0"), month: MONTHS[m - 1], year: y };
}

export function formatEventTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

/* SAMPLE testimonials — written to show the tone, not real people. Replace with genuine quotes
   (and photos, with permission) from real members before launch.
   `avatar` is optional: without one, the card shows the person's initial in a brand-coloured circle. */
export const testimonials: { quote: string; name: string; age: number; role: string; avatar?: string }[] = [
  { quote: "Moved to Hyderabad for work and didn't know a soul. One filter coffee here turned into a Saturday jamming group I now never miss.", name: "Ananya", age: 25, role: "Product designer, Madhapur" },
  { quote: "After a 10-hour sprint, this is where I switch off. Nobody asks about deadlines — just good chai, good music and good people.",       name: "Karthik", age: 27, role: "Software engineer, Gachibowli" },
  { quote: "I came for the French bulldogs, honestly. I stayed for the people. It feels like a second home, not a café.",                     name: "Sneha", age: 23, role: "Postgrad student, Kondapur" },
  { quote: "The comedy nights are the best stress-buster in the city. I've laughed more here in a month than all of last year.",               name: "Rahul", age: 29, role: "Chartered accountant, Hitech City" },
  { quote: "I'm an introvert, so I was nervous. Everyone was so kind — no pressure to talk, but I always leave having made a new friend.",     name: "Priya", age: 26, role: "Content writer, Jubilee Hills" },
  { quote: "The trek with the group was the reset I didn't know I needed. Strangers on the way up, friends by the time we came down.",         name: "Arjun", age: 28, role: "Data analyst, Kukatpally" },
];

/* Contact details. `addressShort` is for tight spots like the footer row; both link to `mapsUrl`. */
const fullAddress = "Western Dallas Center, Dallas Centre Rd, Silpa Gram Craft Village, Madhapur, Hyderabad, Telangana 500032";

export const contact = {
  email:        "contact@projectsoulfulness.com",
  phone:        "+91 80507 66965",
  whatsapp:     "918050766965", // country code + number, digits only — enquiries from the site go here
  address:      fullAddress,
  addressShort: "Madhapur, Hyderabad",
  instagram:    "https://www.instagram.com/projectsoulfulnesss/",
  instagramHandle: "Projectsoulfulness", // label shown in the footer
  mapsUrl:      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
};

/* Opens a WhatsApp chat with us, with the message already typed for the visitor to send. */
export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
