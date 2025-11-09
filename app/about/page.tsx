"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Globe, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About the Artist
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            i paint people because they won’t stop living inside me.
          </p>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="default">
            <a href="#contact" aria-label="Contact the artist">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
      </motion.header>

      {/* Hero / Bio */}
      <section className="grid items-start gap-8 md:grid-cols-[240px,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border">
            {/* Replace with your own portrait image */}
            <Image
              src="/joana_portrait.jpg"
              alt="Artist portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Painting",
              "Mixed Media",
              "Installation",
              "New Media",
              "Community",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl">Bio</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-3 text-base leading-relaxed text-muted-foreground">
              <p>
                {/* Swap with your real bio (80–120 words). Keep it crisp for curators and press. */}
                <strong>joana seabra</strong> born in porto, she learned early that colors have tempers and silence has a pulse.
                she paints people, fruit, forgotten rooms — everything that insists on feeling too much.
                she studied the brain in berlin, trying to understand why hearts behave like storms.
                now she paints and draws stories, between science and tenderness, where thought becomes flesh and memory hums.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl">Artist Statement</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-3 text-base leading-relaxed text-muted-foreground">
              <p>
                i don’t paint what i see, i paint what insists. a hand trembling in the air, a face that won’t leave, a fruit that almost sings.
                the colors are never quiet — they argue, they love, they survive.
                i want my paintings to breathe like a confession and bite like a dream.
                lately, i draw comics too, as if the brain were whispering to the paint: tell me another story.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Selected Exhibitions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Soft Machines</span>
                  <span className="text-muted-foreground">2025 · Solo</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Intervals</span>
                  <span className="text-muted-foreground">2024 · Group</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Surface/Memory</span>
                  <span className="text-muted-foreground">2023 · Duo</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Material Signals</span>
                  <span className="text-muted-foreground">2022 · Group</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Awards & Residencies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">XYZ Art Prize</span>
                  <span className="text-muted-foreground">2025</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Digital Crafts Residency</span>
                  <span className="text-muted-foreground">2024</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">Emerging Artist Grant</span>
                  <span className="text-muted-foreground">2023</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Press & Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  "Edges Between Things," <em>Art Now</em>, 2025 — <a href="#" className="underline">read</a>
                </li>
                <li>
                  Interview with Your Name, <em>Surface Magazine</em>, 2024 — <a href="#" className="underline">listen</a>
                </li>
                <li>
                  Exhibit review, <em>The City Paper</em>, 2023 — <a href="#" className="underline">view</a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Studio / Process Gallery */}
      <section className="mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-2xl font-semibold"
        >
          Studio Process
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            "/work-1.jpg",
            "/work-2.jpg",
            "/work-3.jpg",
            "/work-4.jpg",
            "/work-5.jpg",
            "/work-6.jpg",
          ].map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border"
            >
              <Image src={src} alt={`Studio image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h3 className="text-xl font-semibold">Available for exhibitions & collaborations</h3>
              <p className="mt-1 max-w-2xl text-muted-foreground">
                For inquiries, studio visits, or commissions, get in touch. I aim to reply within 2–3 days.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button asChild>
                <a href="mailto:joanapereiraseabra@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.instagram.com/joanapse/" target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

