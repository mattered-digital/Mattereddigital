"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const caseStudies = [
  {
    index: "01",
    client: "Orla Studio",
    sector: "Beauty / D2C",
    year: "2026",
    platform: "Next.js / Shopify",
    summary:
      "A launch platform pairing editorial brand storytelling with performance media, email sequencing, and campaign-specific landing flows.",
    kpi: "4.8x blended ROAS",
    services: [
      "Brand direction",
      "Campaign site",
      "Paid social",
      "Lifecycle"
    ],
    palette: "from-[#17110f] via-[#5e3429] to-[#dc8a5a]"
  },
  {
    index: "02",
    client: "Frame Athletics",
    sector: "Performance wellness",
    year: "2026",
    platform: "Next.js / Sanity",
    summary:
      "Rebuilt the acquisition funnel around sharper positioning, cinematic launch assets, and a clearer conversion path across paid and owned channels.",
    kpi: "61% lower CAC",
    services: [
      "Go-to-market",
      "Creative systems",
      "Search + social",
      "Analytics"
    ],
    palette: "from-[#111412] via-[#26453a] to-[#84a48a]"
  },
  {
    index: "03",
    client: "Meadow House",
    sector: "Interiors / Ecommerce",
    year: "2025",
    platform: "Next.js / Commerce",
    summary:
      "Unified merchandising, content, and retention into one operating rhythm for seasonal launches and always-on revenue growth.",
    kpi: "2.3x repeat revenue",
    services: [
      "Growth systems",
      "Content engine",
      "SEO + CRO",
      "CRM"
    ],
    palette: "from-[#1a1312] via-[#5c3035] to-[#b2757a]"
  }
];

const pillars = [
  {
    label: "(a.)",
    title: "Brand Direction",
    copy:
      "Positioning, naming, messaging systems, and visual cues built so every launch has a point of view before it asks for attention."
  },
  {
    label: "(b.)",
    title: "Digital Experiences",
    copy:
      "Marketing sites, launch pages, and campaign destinations built in Next.js with motion that guides narrative and conversion."
  },
  {
    label: "(c.)",
    title: "Performance Media",
    copy:
      "Paid social, search demand capture, and creative testing loops tuned to push efficiency without flattening the brand."
  },
  {
    label: "(d.)",
    title: "Growth Operations",
    copy:
      "Lifecycle strategy, automation, reporting, and AI-assisted workflows that keep the back half of growth as sharp as the front."
  }
];

const serviceColumns = [
  {
    label: "(a.) strategy",
    title: "Strategy & Narrative",
    items: [
      "Brand positioning",
      "Messaging frameworks",
      "Launch concepts",
      "Offer architecture",
      "Creative direction",
      "Audience research"
    ]
  },
  {
    label: "(b.) experience",
    title: "Creative & Build",
    items: [
      "Marketing websites",
      "Landing pages",
      "Interaction design",
      "Motion systems",
      "Next.js development",
      "Analytics setup"
    ]
  },
  {
    label: "(c.) growth",
    title: "Demand & Retention",
    items: [
      "Paid social",
      "Search strategy",
      "Creative testing",
      "Email automation",
      "CRO programs",
      "Reporting dashboards"
    ]
  }
];

const artifacts = [
  {
    title: "Signal reel",
    note: "Art direction, motion studies, paid cutdowns."
  },
  {
    title: "Launch deck",
    note: "Positioning, offer logic, channel sequencing."
  },
  {
    title: "Growth ops",
    note: "CRM, reporting, and AI-assisted production."
  }
];

const heroHeadline = ["MARKETING", "INNOVATION", "AGENCY"];

export function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let isActive = true;
    let ctx: { revert: () => void } | undefined;

    void (async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");

      const gsap =
        gsapModule.default ??
        ("gsap" in gsapModule ? gsapModule.gsap : undefined);
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;

      if (!isActive || !gsap || !ScrollTrigger) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from("[data-header-item]", {
          y: -22,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05
        });

        gsap.from("[data-hero-word]", {
          yPercent: 115,
          autoAlpha: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.08
        });

        gsap.from("[data-hero-copy]", {
          y: 30,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.28
        });

        gsap.from("[data-hero-grid]", {
          autoAlpha: 0,
          duration: 1.1,
          ease: "power2.out"
        });

        gsap.from("[data-hero-figure]", {
          scale: 0.94,
          autoAlpha: 0,
          duration: 1.25,
          ease: "power3.out",
          delay: 0.12
        });

        gsap.from("[data-hero-label]", {
          y: 18,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.35
        });

        gsap.to("[data-orb]", {
          yPercent: -12,
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
              y: 54,
              autoAlpha: 0
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.92,
              ease: "power3.out",
              delay: (index % 3) * 0.04,
              scrollTrigger: {
                trigger: item,
                start: "top 84%"
              }
            }
          );
        });

        const caseRows = gsap.utils.toArray<HTMLElement>("[data-case-row]");
        caseRows.forEach((row, index) => {
          gsap.fromTo(
            row,
            {
              y: 70,
              autoAlpha: 0
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power4.out",
              delay: index * 0.04,
              scrollTrigger: {
                trigger: row,
                start: "top 84%"
              }
            }
          );

          const preview = row.querySelector<HTMLElement>("[data-case-preview]");
          if (preview) {
            gsap.to(preview, {
              yPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            });
          }
        });

        const columns = gsap.utils.toArray<HTMLElement>("[data-service-column]");
        columns.forEach((column, index) => {
          gsap.fromTo(
            column,
            {
              y: 64,
              autoAlpha: 0,
              rotate: index === 1 ? -1.2 : 1.2
            },
            {
              y: 0,
              autoAlpha: 1,
              rotate: 0,
              duration: 1.05,
              ease: "power4.out",
              scrollTrigger: {
                trigger: column,
                start: "top 82%"
              }
            }
          );
        });
      }, rootRef);
    })();

    return () => {
      isActive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-x-hidden pb-12">
      <div data-orb className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full">
        <div className="absolute left-[-8rem] top-[58rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(223,141,89,0.2)_0%,rgba(223,141,89,0.02)_72%,transparent_80%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[80rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(125,149,128,0.16)_0%,rgba(125,149,128,0.02)_72%,transparent_80%)] blur-3xl" />
      </div>

      <section
        id="top"
        className="relative min-h-[100svh] overflow-hidden bg-[#03070a] text-white"
      >
        <div
          data-hero-grid
          className="hero-grid pointer-events-none absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_24%,rgba(3,7,10,0.36)_58%,rgba(3,7,10,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-[8%] z-[1] flex justify-center px-6">
          <div className="relative h-[58svh] w-[min(78vw,44rem)] md:h-[70svh]">
            <Image
              data-hero-figure
              src="/hero-figure.svg"
              alt=""
              fill
              priority
              className="object-contain object-top opacity-65 mix-blend-screen"
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col">
          <div className="section-shell pt-7">
            <div className="grid gap-6 text-[0.72rem] uppercase tracking-[0.2em] text-white/92 md:grid-cols-[1.05fr_1fr_1fr_0.6fr] md:items-start">
              <div
                data-header-item
                className="flex items-center gap-3 text-[1.05rem] font-medium normal-case tracking-[-0.05em] text-white"
              >
                <span className="grid h-4 w-4 grid-cols-2 gap-1">
                  <span className="rounded-full bg-white" />
                  <span className="rounded-full bg-white/88" />
                  <span className="rounded-full bg-white/72" />
                  <span className="rounded-full bg-white/56" />
                </span>
                northforge
              </div>

              <div data-header-item className="max-w-[15rem] leading-[1.2] text-white/90">
                Ecommerce and brand systems.
                <br />
                Driven by vision. Built with design and technology.
              </div>

              <div data-header-item className="max-w-[14rem] leading-[1.2] text-white/90">
                hello@northforge.studio
                <br />
                India, EST 2026
              </div>

              <div
                data-header-item
                className="flex items-center gap-4 md:justify-end"
              >
                <span className="text-white/80">EN</span>
                <span className="inline-flex min-w-[5.5rem] items-center justify-center bg-white px-3 py-1 text-[0.72rem] font-medium tracking-[0.08em] text-black">
                  Menu
                </span>
              </div>
            </div>
          </div>

          <div className="section-shell relative flex-1">
            <div className="absolute inset-x-0 top-[32%] hidden items-center justify-between text-sm text-white md:flex">
              <span data-hero-label className="text-white/92">
                Brand Direction
              </span>
              <span data-hero-label className="ml-[8%] text-white/92">
                Performance Marketing
              </span>
              <span data-hero-label className="text-white/92">
                Advanced Tech
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-9 flex justify-center sm:bottom-12 md:bottom-16">
              <div className="w-full max-w-[86rem] text-center">
                {heroHeadline.map((word) => (
                  <div key={word} className="overflow-hidden">
                    <h1
                      data-hero-word
                      className="headline-monument leading-none tracking-[-0.08em] text-white"
                    >
                      {word}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-shell pb-6 md:hidden">
            <div className="grid grid-cols-3 gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/76">
              <span data-hero-label>Brand Direction</span>
              <span data-hero-label className="text-center">
                Performance
              </span>
              <span data-hero-label className="text-right">
                Advanced Tech
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-10">
        <div
          data-reveal
          className="grid gap-6 border-b border-black/10 pb-8 md:grid-cols-[1.2fr_0.85fr_0.8fr]"
        >
          <div>
            <p className="eyebrow">Signal-first creative growth</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/72">
              We design high-impact launch systems for ecommerce and modern
              brands, blending storytelling, technology, and performance into
              one sharp operating model.
            </p>
          </div>

          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-black/62">
            <div className="border-t border-black/10 pt-3">Brand Direction</div>
            <div className="border-t border-black/10 pt-3">Performance Marketing</div>
            <div className="border-t border-black/10 pt-3">Advanced Tech</div>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              data-hero-copy
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium uppercase tracking-[0.26em] text-white transition hover:-translate-y-0.5"
            >
              View selected work
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="section-shell py-12 md:py-16">
        <div data-reveal className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="headline-lg mt-5 text-balance">
              Launch systems built to move product, perception, and demand.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base leading-8 text-black/66">
            Every engagement combines narrative, interface, and measurable
            growth mechanics. We build destinations that look premium, feel
            intentional, and perform under pressure once the campaign goes live.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2.5rem] border border-black/8 bg-white/44">
          {caseStudies.map((study, index) => (
            <article
              key={study.client}
              data-case-row
              className={`grid gap-7 border-t border-black/8 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.6fr_0.62fr_0.9fr_auto] lg:items-start lg:p-8 ${
                index === 0 ? "border-t-0" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.28em] text-black/42">
                  <span>{study.index}</span>
                  <span>{study.sector}</span>
                </div>

                <div>
                  <h3 className="text-[2.2rem] font-medium leading-[0.96] tracking-[-0.06em] sm:text-[3rem] lg:text-[3.4rem]">
                    {study.client}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-black/66 sm:text-base">
                    {study.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-[0.64rem] uppercase tracking-[0.24em] text-black/66">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/10 px-3 py-2"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.28em] text-black/38">
                  Year
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-black/76">
                  {study.year}
                </div>
              </div>

              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.28em] text-black/38">
                  Platform
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-black/76">
                  {study.platform}
                </div>
              </div>

              <div className="min-h-[10rem]">
                <div
                  data-case-preview
                  className={`grain flex h-full min-h-[11rem] items-end rounded-[1.8rem] bg-gradient-to-br ${study.palette} p-4 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]`}
                >
                  <div className="w-full rounded-[1.2rem] border border-white/12 bg-black/12 p-4 backdrop-blur-sm">
                    <div className="text-[0.62rem] uppercase tracking-[0.28em] text-white/48">
                      Key outcome
                    </div>
                    <div className="mt-5 text-xl font-medium tracking-[-0.04em]">
                      {study.kpi}
                    </div>
                    <div className="mt-2 text-sm text-white/62">
                      Launch platform + growth operating system
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/12 px-5 py-3 text-[0.64rem] font-medium uppercase tracking-[0.28em] text-black/74 transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                Explore
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal>
            <p className="eyebrow">About the agency</p>
            <h2 className="headline-lg mt-5 text-balance">
              We are a marketing agency.
              <br />
              Not a disconnected stack of freelancers.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                data-reveal
                className="rounded-[2rem] border border-black/8 bg-[#f8f2ea] p-6 shadow-[0_12px_36px_rgba(19,17,15,0.05)]"
              >
                <div className="text-[0.66rem] uppercase tracking-[0.28em] text-black/38">
                  {pillar.label}
                </div>
                <h3 className="mt-7 text-[1.8rem] font-medium leading-[0.98] tracking-[-0.05em]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/64 sm:text-base">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-12 md:py-16">
        <div className="rounded-[2.7rem] border border-black/8 bg-[#15110f] px-5 py-7 text-[#f8f1e7] sm:px-6 sm:py-8 lg:px-8">
          <div data-reveal className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="eyebrow text-white/44">Full-service agency</p>
              <h2 className="headline-lg mt-5 text-balance">
                Strategy, creative, tech, and growth built inside one system.
              </h2>
            </div>

            <p className="max-w-2xl self-end text-base leading-8 text-white/64">
              We partner with ambitious founders and in-house teams that need
              more than isolated deliverables. The work spans brand, website,
              campaigns, and growth infrastructure so launches stay coherent
              from first impression to repeat purchase.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceColumns.map((column) => (
              <article
                key={column.title}
                data-service-column
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="text-[0.64rem] uppercase tracking-[0.28em] text-white/42">
                  {column.label}
                </div>
                <h3 className="mt-6 text-[1.9rem] font-medium leading-[0.98] tracking-[-0.05em]">
                  {column.title}
                </h3>
                <ul className="mt-8 space-y-3 text-sm uppercase tracking-[0.18em] text-white/72">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-white/8 pt-3 first:border-t-0 first:pt-0"
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

      <section id="process" className="section-shell py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            data-reveal
            className="grain rounded-[2.7rem] border border-black/8 bg-[#14110f] p-6 text-[#f8f1e7] shadow-[0_20px_80px_rgba(19,17,15,0.14)] sm:p-8"
          >
            <div className="flex items-center justify-between text-[0.64rem] uppercase tracking-[0.28em] text-white/42">
              <span>Showreel</span>
              <span>02:13</span>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-black">
                  Play
                </span>
                <div>
                  <div className="text-lg font-medium tracking-[-0.04em]">
                    Northforge reel / spring 2026
                  </div>
                  <div className="text-sm text-white/56">
                    Direction, site systems, growth operations.
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/12 p-4">
                  <div className="text-[0.6rem] uppercase tracking-[0.28em] text-white/42">
                    Sequence
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="h-2 rounded-full bg-white/12" />
                    <div className="h-2 w-5/6 rounded-full bg-white/55" />
                    <div className="h-2 w-2/3 rounded-full bg-white/18" />
                    <div className="h-2 w-1/2 rounded-full bg-white/28" />
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-[#f7efe5]/94 p-5 text-black shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                  <div className="text-[0.6rem] uppercase tracking-[0.28em] text-black/42">
                    Frame / launch system
                  </div>
                  <div className="mt-6 h-28 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(16,15,13,0.96),rgba(16,15,13,0.72),rgba(220,138,90,0.88))]" />
                  <div className="mt-4 text-lg font-medium tracking-[-0.04em]">
                    Campaign narrative wired to conversion
                  </div>
                </div>
              </div>

              <div className="mt-8 h-2 rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div data-reveal className="rounded-[2.4rem] border border-black/8 bg-white/44 p-6 sm:p-8">
              <p className="eyebrow">How we think</p>
              <h2 className="headline-lg mt-5 text-balance">
                Innovation is connection.
                <br />
                Strategy to creative.
                <br />
                Creative to growth.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-black/66">
                Strong brands do not split their identity from their acquisition
                engine. We connect the story, the shopping experience, the ad
                system, and the retention layer so momentum compounds instead of
                fragmenting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {artifacts.map((artifact) => (
                <article
                  key={artifact.title}
                  data-reveal
                  className="rounded-[1.9rem] border border-black/8 bg-[#f8f2ea] p-5"
                >
                  <div className="text-[0.62rem] uppercase tracking-[0.28em] text-black/36">
                    Artifact
                  </div>
                  <div className="mt-5 text-[1.4rem] font-medium leading-[1.02] tracking-[-0.05em]">
                    {artifact.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/62">
                    {artifact.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="section-shell py-14 md:py-20">
        <div className="border-t border-black/10 pt-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.65fr_0.75fr]">
            <div data-reveal>
              <p className="eyebrow">Let&apos;s build something with edge.</p>
              <h2 className="headline-lg mt-5 text-balance">
                Ready when your brand is.
              </h2>
              <a
                href="mailto:hello@northforge.studio"
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium uppercase tracking-[0.26em] text-white transition hover:-translate-y-0.5"
              >
                hello@northforge.studio
              </a>
            </div>

            <div data-reveal className="space-y-6 text-sm uppercase tracking-[0.2em] text-black/62">
              <div>
                <div className="text-[0.62rem] tracking-[0.28em] text-black/34">
                  Office
                </div>
                <div className="mt-3">Global / Remote</div>
              </div>
              <div>
                <div className="text-[0.62rem] tracking-[0.28em] text-black/34">
                  Availability
                </div>
                <div className="mt-3">New projects from May 2026</div>
              </div>
            </div>

            <div data-reveal className="space-y-6 text-sm uppercase tracking-[0.2em] text-black/62">
              <div>
                <div className="text-[0.62rem] tracking-[0.28em] text-black/34">
                  Follow the build
                </div>
                <div className="mt-3">Next.js / Tailwind / GSAP / TypeScript</div>
              </div>
              <div>
                <div className="text-[0.62rem] tracking-[0.28em] text-black/34">
                  Links
                </div>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a href="#top">Top</a>
                  <a href="#work">Work</a>
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
