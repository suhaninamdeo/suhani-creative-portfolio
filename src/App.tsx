import { useEffect, useState } from "react";
import "./App.css";

const pages = [
  {
    number: "01 / 09",
    type: "cover",
    title: "SUHANI",
    subtitle: "NAMDEO",
  },
  {
    number: "02 / 09",
    type: "about",
    title: "A little bit",
    title2: "about me.",
    text: "Hi, I'm Suhani — a creative aspiring Social Media Manager, Content Creator and Video Editor. I enjoy creating aesthetic, engaging and relatable content for social platforms.",
    text2:
      "With a background in engineering and a growing passion for digital media, I bring analytical thinking and creativity together in the content I create.",
  },
  {
    number: "03 / 09",
    type: "skills",
    title: "WHAT I BRING",
    title2: "TO THE TABLE",
    items: [
      "SOCIAL MEDIA MANAGEMENT",
      "CONTENT PLANNING",
      "SHORT-FORM VIDEO EDITING",
      "REELS & TREND CONTENT",
      "CREATIVE STRATEGY",
      "INSTAGRAM CONTENT",
    ],
  },
  {
    number: "04 / 09",
    type: "content",
    title: "CONTENT",
    title2: "I CREATE",
    items: [
      "REELS",
      "LIFESTYLE",
      "FASHION",
      "BEAUTY",
      "PRODUCT CONTENT",
      "TREND-BASED CONTENT",
      "PROMOTIONAL CONTENT",
    ],
  },
  {
    number: "05 / 09",
    type: "services",
    title: "LET'S MAKE",
    title2: "SOMETHING",
    title3: "SCROLL-WORTHY.",
    items: [
      "Social Media Management",
      "Reels & Video Editing",
      "Content Creation",
      "Instagram Content Planning",
      "Creative & Visual Design",
    ],
  },
  {
    number: "06 / 09",
    type: "tools",
    title: "TOOLS I",
    title2: "WORK WITH",
    items: [
      "Canva",
      "CapCut",
      "Instagram",
      "Meta Business Suite",
      "Pinterest",
      "Notion",
      "Lightroom",
      "ChatGPT",
    ],
  },
  {
    number: "07 / 09",
    type: "work",
    title: "CONTENT",
    title2: "I'VE CREATED",
  },
  {
    number: "08 / 09",
    type: "why",
    title: "WHY",
    title2: "ME?",
    items: [
      "Creative & detail-oriented",
      "Strong interest in social media trends",
      "Visual storytelling focused",
      "Fast learner",
      "Comfortable with Canva & short-form editing",
      "Focused on authentic content",
    ],
  },
  {
    number: "09 / 09",
    type: "contact",
    title: "LET'S",
    title2: "CONNECT",
    text: "Have a project in mind?",
    text2: "Let's create something memorable.",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const next = () => {
    if (current < pages.length - 1) {
      setDirection("next");
      setCurrent((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (current > 0) {
      setDirection("previous");
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current]);

  const page = pages[current];

  return (
    <main className={`portfolio ${page.type}`}>

      {/* ================= TOP BAR ================= */}

      <div className="top-bar">
        <span></span>

        <span>
          SOCIAL MEDIA • CONTENT • EDITING
        </span>

        <span>
          {page.number}
        </span>
      </div>

      {/* ================= PAGE ================= */}

      <section
        key={current}
        className={`page ${direction}`}
      >

        {/* DECOR */}

        <div className="decor decor-one">✦</div>
        <div className="decor decor-two">✧</div>

        {/* ================= PAGE 1 ================= */}

        {page.type === "cover" && (
          <div className="cover-content">

            <div className="cover-left">

              <p className="small-heading">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                SUHANI
                <span>NAMDEO</span>
              </h1>

              <div className="role">
                Social Media Manager
                <br />
                Content Creator • Strategist
                <br />
                Video Editor
              </div>

              <p className="quote">
                I create engaging content, shape social media stories,
                and turn ideas into content people remember.
              </p>

            </div>

            <div className="cover-right">

              <div className="photo-frame">

                <img
                  src="/suhani.jpg"
                  alt="Suhani Namdeo"
                  className="hero-photo"
                />

              </div>

            </div>

          </div>
        )}

        {/* ================= PAGE 2 ================= */}

        {page.type === "about" && (
          <div className="content-page">

            <div className="heading-side">

              <h2>
                {page.title}
                <span>{page.title2}</span>
              </h2>

            </div>

            <div className="body-side">

              <p>{page.text}</p>

              <p>{page.text2}</p>

              <div className="keyword-line">
                CONTENT • SOCIAL MEDIA • EDITING • VISUALS
              </div>

            </div>

          </div>
        )}

        {/* ================= PAGE 3 ================= */}

        {page.type === "skills" && (
          <div className="standard-page">

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <div className="number-list">

              {page.items?.map((item, index) => (
                <div
                  className="number-item"
                  key={item}
                >

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  <span>
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= PAGE 4 ================= */}

        {page.type === "content" && (
          <div className="standard-page">

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <div className="tag-grid">

              {page.items?.map((item) => (
                <div
                  className="tag"
                  key={item}
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= PAGE 5 ================= */}

        {page.type === "services" && (
          <div className="standard-page">

            <h2>
              {page.title}
              <span>{page.title2}</span>
              <span>{page.title3}</span>
            </h2>

            <div className="service-list">

              {page.items?.map((item, index) => (
                <div key={item}>

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  <strong>
                    {item}
                  </strong>

                  <span>
                    →
                  </span>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= PAGE 6 ================= */}

        {page.type === "tools" && (
          <div className="standard-page">

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <div className="tools-grid">

              {page.items?.map((item) => (
                <div
                  className="tool-card"
                  key={item}
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= PAGE 7 ================= */}

        {page.type === "work" && (
          <div className="standard-page work-page">

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <div className="video-strip">

              {/* 01 — CAFÉ */}

              <div className="video-card">
                <video
                  src="/videos/cafe.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <p>01 — CAFÉ</p>
              </div>

              {/* 02 — FASHION */}

              <div className="video-card">
                <video
                  src="/videos/fashion.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <p>02 — FASHION</p>
              </div>

              {/* 03 — INTERIOR */}

              <div className="video-card">
                <video
                  src="/videos/interior.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <p>03 — INTERIOR</p>
              </div>

              {/* 04 — SKINCARE */}

              <div className="video-card">
                <video
                  src="/videos/skincare.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <p>04 — SKINCARE</p>
              </div>

              {/* 05 — TRAVEL */}

              <div className="video-card">
                <video
                  src="/videos/travel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <p>05 — TRAVEL</p>
              </div>

            </div>

            <p className="bottom-note">
              SELECTED SELF-INITIATED CONCEPT PROJECTS
            </p>

          </div>
        )}

        {/* ================= PAGE 8 ================= */}

        {page.type === "why" && (
          <div className="standard-page">

            <p className="section-label">
              A LITTLE MORE
            </p>

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <div className="check-list">

              {page.items?.map((item) => (
                <div key={item}>

                  <span>
                    ✓
                  </span>

                  {item}

                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= PAGE 9 ================= */}

        {page.type === "contact" && (
          <div className="contact-page">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              {page.title}
              <span>{page.title2}</span>
            </h2>

            <p className="contact-description">
              {page.text}
              <br />
              {page.text2}
            </p>

            <a href="mailto:suhaninamdeo30@gmail.com">
              suhaninamdeo30@gmail.com
            </a>

            <p className="contact-social">
              INSTAGRAM • LINKEDIN
            </p>

          </div>
        )}

      </section>

      {/* ================= BOTTOM TEXT ================= */}

      <div className="bottom-left">
        CREATE • PLAN • EDIT • GROW
      </div>

      <div className="bottom-center">
        BASED IN NAGPUR, INDIA
      </div>

      {/* ================= NAVIGATION ================= */}

      <div className="navigation">

        <button
          onClick={previous}
          disabled={current === 0}
          aria-label="Previous page"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={current === pages.length - 1}
          aria-label="Next page"
        >
          →
        </button>

      </div>

    </main>
  );
}

export default App;