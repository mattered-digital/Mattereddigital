"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface ContactFormProps {
  defaultService?: string;
  isInline?: boolean;
}

export default function ContactForm({ defaultService = "Web Development", isInline = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && !isInline) {
      gsap.fromTo(
        formRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [isInline]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: defaultService, message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/10 py-4 outline-none transition-colors focus:border-white text-lg"
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono">Email Address</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 py-4 outline-none transition-colors focus:border-white text-lg"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono">Phone Number</label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 py-4 outline-none transition-colors focus:border-white text-lg"
            placeholder="+91 99999 99999"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono">Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/10 py-4 outline-none transition-colors focus:border-white text-lg appearance-none cursor-pointer"
        >
          <option value="Web Development" className="bg-[#0a0a0a]">Web Development</option>
          <option value="Digital Marketing" className="bg-[#0a0a0a]">Digital Marketing</option>
          <option value="AI Solutions" className="bg-[#0a0a0a]">AI Solutions</option>
          <option value="Branding" className="bg-[#0a0a0a]">Branding</option>
          <option value="Custom CRM" className="bg-[#0a0a0a]">Custom CRM</option>
          <option value="Mobile App Development" className="bg-[#0a0a0a]">Mobile App Development</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono">Message</label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/10 py-4 outline-none transition-colors focus:border-white text-lg resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        disabled={status === "sending"}
        type="submit"
        className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-widest text-[11px] transition-all hover:bg-white hover:text-black disabled:opacity-50"
      >
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : status === "success" ? "Sent Successfully" : "Send Message"}
        </span>
        <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">→</span>
      </button>

      {status === "error" && (
        <p className="text-red-500 text-xs uppercase tracking-widest font-mono">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
