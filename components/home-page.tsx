"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Average paid-media efficiency lift", value: "+178%" },
  { label: "Revenue recovered through retention flows", value: "$3.4M" },
  { label: "Launches shipped from strategy to go-live", value: "42" }
];

const signals = [
  "Brand systems",
  "Launch strategy",
  "Paid social",
  "Search demand",
  "Content engines",
  "Conversion design",
  "Lifecycle automation",
  "Creative testing"
];

const featuredProjects = [
  {
    index: "01",
    client: "Vanta Atelier",
    sector: "Luxury fashion / D2C",
    summary:
      "Reframed an emerging label from quiet cult favorite into a category-defining launch with sharper brand language, landing pages, and a full-funnel media system.",
    results: ["5.1x blended ROAS", "38% faster sell-through", "21% higher AOV"],
    services: ["Brand narrative", "Campaign concepting", "Paid media", "Retention"],
    palette:
      "from-[#15120f] via-[#53382a] to-[#df8751]"
  },
  {
    index: "02",
    client: "Sable Motion",
    sector: "Performance wellness",
    summary:
      "Built a conversion-first launch ecosystem for a premium recovery brand, pairing immersive storytelling with precise acquisition and CRM architecture.",
    results: ["67% lower CAC", "31% higher signup rate", "12-day product waitlist"],
    services: ["Go-to-market", "Experience design", "Search & social", "Email automation"],
    palette:
      "from-[#111713] via-[#314639] to-[#7d9f77]"
  },
  {
    index: "03",
    client: "Lumen House",
    sector: "Interiors / ecommerce",
    summary:
      "Unified fragmented channels into one growth operating system, syncing merchandising, creative production, and seasonal campaign planning.",
    results: ["2.4x returning customer rate", "18% lift in CVR", "9-country rollout"],
    services: ["Growth systems", "Creative production", "SEO + CRO", "Forecasting"],
    palette:
      "from-[#1b1613] via-[#5d2f2f] to-[#b86d74]"
  }
];

const serviceGroups = [
  {
    index: "A.",
    title: "Positioning & Narrative",
    description:
      "We define what your brand should stand for before a single campaign goes live.",
    items: [
      "Brand strategy",
      "Messaging frameworks",
      "Offer architecture",
      "Creative direction",
      "Launch narratives"
    ]
  },
  {
    index: "B.",
    title: "Experience & Launch Systems",
    description:
      "Landing pages, motion, UX, and front-end builds designed to turn attention into action.",
    items: [
      "Campaign microsites",
      "Next.js builds",
      "Design systems",
      "Conversion-focused UX",
      "Analytics wiring"
    ]
  },
  {
    index: "C.",
    title: "Demand & Media",
    description:
      "Performance marketing anchored in strong creative testing, channel discipline, and useful reporting.",
    items: [
      "Meta & TikTok",
      "Search demand capture",
      "Creative testing loops",
      "Budget planning",
      "Reporting dashboards"
    ]
  },
  {
    index: "D.",
    title: "Retention & AI Ops",
    description:
      "We make the back half of growth just as intentional as the front half.",
    items: [
      "Lifecycle automation",
      "Segmentation systems",
      "AI-assisted workflows",
      "Offer sequencing",
      "Revenue recovery"
    ]
  }
];

const processSteps = [
  {
    index: "01",
    title: "Read the signal",
    body:
      "We audit what the market is already telling you: channel behavior, audience language, offer tension, and friction inside the current funnel."
  },
  {
    index: "02",
    title: "Shape the story",
    body:
      "From positioning to launch concepts, we translate the strategy into an identity that feels clear, modern, and hard to ignore."
  },
  {
    index: "03",
    title: "Engineer momentum",
    body:
      "Creative, media, landing pages, reporting, CRM, and optimization move together so growth compounds instead of stalling."
  }
];

export function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-header-item]", {
        y: -24,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06
      });

      gsap.from("[data-hero-word]", {
        yPercent: 120,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08
      });

      gsap.from("[data-hero-copy]", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.3
      });

      gsap.to("[data-orb]", {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 52,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: (index % 3) * 0.05,
            scrollTrigger: {
              trigger: item,
              start: "top 86%"
            }
          }
        );
      });

      const serviceCards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      serviceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 64,
            rotate: index % 2 === 0 ? -1.4 : 1.4,
            autoAlpha: 0
          },
          {
            y: 0,
            rotate: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%"
            }
          }
        );
      });

      const caseCards = gsap.utils.toArray<HTMLElement>("[data-case-card]");
      caseCards.forEach((card) => {
        const screen = card.querySelector<HTMLElement>("[data-case-screen]");

        gsap.fromTo(
          card,
          {
            y: 88,
            autoAlpha: 0,
            scale: 0.96
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%"
            }
          }
        );

        if (screen) {
          gsap.to(screen, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-x-hidden pb-10">
      <div
        data-orb
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
      >
        <div className="absolute right-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(225,125,56,0.28)_0%,rgba(225,125,56,0.02)_68%,transparent_76%)] blur-3xl" />
        <div className="absolute left-[-12rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(115,139,107,0.22)_0%,rgba(115,139,107,0.03)_66%,transparent_76%)] blur-3xl" />
      </div>

      <header className="section-shell sticky top-0 z-50 pt-4">
        <div className="panel flex items-center justify-between rounded-full border hairline px-4 py-3 md:px-6">
          <a
            data-header-item
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.34em]"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            Northforge
          </a>

          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.26em] text-black/65 md:flex">
            <a data-header-item href="#work">
              Work
            </a>
            <a data-header-item href="#services">
              Services
            </a>
            <a data-header-item href="#process">
              Process
            </a>
            <a data-header-item href="#contact">
              Contact
            </a>
          </nav>

          <a
            data-header-item
            href="mailto:hello@northforge.studio"
            className="rounded-full border hairline px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
          >
            Start a project
          </a>
        </div>
      </header>

      <section id="top" className="section-shell pb-20 pt-8 md:pb-24 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-8">
            <div data-hero-copy className="eyebrow">
              Signal-first growth agency for brands ready to move louder.
            </div>

            <div className="space-y-3">
              {["We build", "attention", "into demand."].map((word) => (
                <div key={word} className="overflow-hidden">
                  <h1
                    data-hero-word
                    className={`headline-xl text-balance ${
                      word === "attention" ? "serif italic text-[var(--berry)]" : ""
                    }`}
                  >
                    {word}
                  </h1>
                </div>
              ))}
            </div>

            <p
              data-hero-copy
              className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg"
            >
              Northforge partners with ambitious teams across strategy,
              creative, performance media, and retention to create launches that
              look cinematic, convert clearly, and scale without losing their
              edge.
            </p>

            <div
              data-hero-copy
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-[var(--panel-strong)] px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                Explore launches
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] transition hover:-translate-y-0.5 hover:bg-white/65"
              >
                View services
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div
              data-hero-copy
              className="grain rounded-[2rem] border hairline bg-[#171411] p-6 text-[#f6efe4] shadow-[0_22px_80px_rgba(19,17,15,0.18)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/56">
                <span>Current velocity</span>
                <span>2026</span>
              </div>

              <div className="mt-10 space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t border-white/12 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 max-w-[18rem] text-sm leading-6 text-white/66">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-hero-copy
              className="panel rounded-[2rem] border hairline p-6"
            >
              <div className="eyebrow">How we work</div>
              <p className="mt-4 text-sm leading-7 text-black/68">
                Strategy and execution stay inside one room. No lag between the
                big idea, the site experience, and the campaign system carrying
                it into market.
              </p>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="mt-14 overflow-hidden rounded-full border hairline bg-white/45 py-4"
        >
          <div className="marquee flex min-w-max items-center gap-5 px-5 text-xs font-medium uppercase tracking-[0.34em] text-black/58">
            {[...signals, ...signals].map((signal, index) => (
              <span key={`${signal}-${index}`} className="flex items-center gap-5">
                <span>{signal}</span>
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell py-12 md:py-16">
        <div data-reveal className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="eyebrow">Featured launches</p>
            <h2 className="headline-lg mt-5 text-balance">
              Editorial thinking for campaigns that need to convert, not just
              impress.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base leading-8 text-black/68">
            Inspired by the cinematic rhythm of high-end agency portfolios, but
            written for a modern marketing team: sharp case studies, clear
            proof, and motion that supports the story instead of distracting
            from it.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project) => (
            <article
              key={project.client}
              data-case-card
              className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-black/8 bg-[#16120f] p-6 text-[#f8f2e8] shadow-[0_18px_80px_rgba(19,17,15,0.16)] lg:grid-cols-[0.72fr_1fr] lg:p-8"
            >
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/52">
                    <span>{project.index}</span>
                    <span>{project.sector}</span>
                  </div>

                  <div>
                    <h3 className="headline-md">{project.client}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                      Impact
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-white/72">
                      {project.results.map((result) => (
                        <li key={result} className="border-t border-white/10 pt-3">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                      Scope
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/72">
                      {project.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-full border border-white/12 px-3 py-2"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="min-h-[20rem]">
                <div
                  data-case-screen
                  className={`grain relative flex h-full min-h-[22rem] items-end overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${project.palette} p-5 sm:p-7`}
                >
                  <div className="absolute inset-4 rounded-[1.5rem] border border-white/12 bg-black/10" />
                  <div className="absolute left-7 top-7 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/70" />
                    <span className="h-3 w-3 rounded-full bg-white/35" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="absolute inset-x-[12%] top-[20%] h-12 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative z-10 grid w-full gap-4 md:grid-cols-[0.8fr_1fr]">
                    <div className="rounded-[1.35rem] border border-white/16 bg-black/14 p-4 backdrop-blur-sm">
                      <div className="text-[0.68rem] uppercase tracking-[0.26em] text-white/48">
                        Campaign board
                      </div>
                      <div className="mt-5 space-y-3">
                        <div className="h-2 rounded-full bg-white/20" />
                        <div className="h-2 w-4/5 rounded-full bg-white/65" />
                        <div className="h-2 w-3/5 rounded-full bg-white/28" />
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/16 bg-[#f7efe4]/92 p-5 text-black shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                      <div className="text-[0.66rem] uppercase tracking-[0.28em] text-black/45">
                        Launch frame
                      </div>
                      <div className="mt-8 h-28 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(19,17,15,0.9),rgba(19,17,15,0.7),rgba(225,125,56,0.8))]" />
                      <div className="mt-5 flex items-center justify-between">
                        <div>
                          <div className="text-lg font-medium tracking-[-0.04em]">
                            Narrative-led funnel
                          </div>
                          <div className="mt-1 text-sm text-black/56">
                            Motion, offer sequencing, reporting.
                          </div>
                        </div>
                        <span className="rounded-full bg-black px-4 py-2 text-[0.66rem] uppercase tracking-[0.26em] text-white">
                          Live
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell py-14 md:py-18">
        <div
          data-reveal
          className="rounded-[2.5rem] border hairline bg-white/44 p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="headline-lg mt-5 text-balance">
                One agency. Four systems. Built to make growth feel deliberate.
              </h2>
            </div>

            <p className="max-w-2xl self-end text-base leading-8 text-black/66">
              The reference site works because every section feels like it has a
              point of view. We keep that same conviction here: fewer generic
              blocks, more intentional systems, clearer outcomes, and a stronger
              visual identity across the whole homepage.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article
                key={group.title}
                data-service-card
                className="rounded-[2rem] border hairline bg-[#f7f1e8] p-6 shadow-[0_12px_40px_rgba(19,17,15,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.28em] text-black/46">
                    {group.index}
                  </span>
                  <span className="rounded-full bg-black px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-white">
                    Core
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-[-0.05em] md:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-black/64 sm:text-base">
                  {group.description}
                </p>

                <ul className="mt-8 grid gap-3 text-sm uppercase tracking-[0.16em] text-black/72 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border hairline px-4 py-3 text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell py-14 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal className="space-y-6">
            <p className="eyebrow">Operating model</p>
            <h2 className="headline-lg text-balance">
              We don&apos;t stack services. We choreograph momentum.
            </h2>
            <p className="max-w-xl text-base leading-8 text-black/68">
              Great agency sites feel like they were built by people who know
              what they do. This section anchors that confidence with a clear
              process, cinematic pacing, and copy that feels more like a point
              of view than filler.
            </p>

            <div className="rounded-[2rem] border hairline bg-[#15120f] p-6 text-[#f5efe6]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/48">
                <span>Showreel mode</span>
                <span>02:13</span>
              </div>
              <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold uppercase tracking-[0.24em] text-black">
                    Play
                  </span>
                  <div>
                    <div className="text-lg font-medium tracking-[-0.04em]">
                      Signal reel / Spring campaign
                    </div>
                    <div className="text-sm text-white/56">
                      Motion direction, landing flow, ad cutdowns.
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="h-2 rounded-full bg-white/14">
                    <div className="h-full w-2/3 rounded-full bg-[var(--accent)]" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-[1.2rem] bg-white/8" />
                    <div className="h-24 rounded-[1.2rem] bg-white/6" />
                    <div className="h-24 rounded-[1.2rem] bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {processSteps.map((step) => (
              <article
                key={step.index}
                data-reveal
                className="rounded-[2rem] border hairline bg-white/52 p-6 sm:p-7"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-black/44">
                  {step.index}
                </div>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/66 sm:text-base">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <div
          data-reveal
          className="grid gap-8 rounded-[2.5rem] border hairline bg-[#13110f] px-6 py-8 text-[#f8f1e5] sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10"
        >
          <div>
            <p className="eyebrow text-white/46">Manifesto</p>
            <h2 className="headline-lg mt-5 text-balance">
              Strategy should feel clear. Creative should feel dangerous.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/66">
            <p>
              We build for brands that have already outgrown safe templates. The
              work needs more voltage, more conviction, and better systems under
              the surface. That is what this homepage is designed to signal.
            </p>
            <p>
              The result is a one-page experience with the confidence of a
              portfolio site, the clarity of a conversion page, and the polish
              expected from a modern Next.js build using Tailwind CSS, GSAP, and
              TypeScript.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="section-shell py-14 md:py-20">
        <div className="grid gap-8 rounded-[2.5rem] border hairline bg-white/48 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div data-reveal>
            <p className="eyebrow">Let&apos;s launch something with edge.</p>
            <h2 className="headline-lg mt-5 text-balance">
              Ready when your brand is.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68">
              Need a sharper landing page, a campaign site, or a full growth
              system? This build is ready to evolve into your real agency brand,
              case studies, and contact flow.
            </p>
          </div>

          <div data-reveal className="grid gap-4">
            <a
              href="mailto:hello@northforge.studio"
              className="rounded-[2rem] border hairline bg-[#16120f] p-6 text-[#f6efe5] transition hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/44">
                Email
              </div>
              <div className="mt-4 text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                hello@northforge.studio
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border hairline bg-[#f7f0e7] p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-black/44">
                  Based in
                </div>
                <div className="mt-3 text-lg font-medium tracking-[-0.04em]">
                  Global / Remote
                </div>
              </div>

              <div className="rounded-[2rem] border hairline bg-[#f7f0e7] p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-black/44">
                  Stack
                </div>
                <div className="mt-3 text-lg font-medium tracking-[-0.04em]">
                  Next.js, Tailwind, GSAP
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
