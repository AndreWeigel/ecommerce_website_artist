"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CreationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          my creations (or whatever)
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          some of these pieces tried to leave me, but i wouldn’t let them. they
          kept whispering things like “light has moods” and “time is a bruise
          that keeps blooming.”
        </p>
      </motion.header>

      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
            "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
          ].map((src, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-none">
              <div className="relative aspect-square">
                <Image src={src} alt={`painting ${i + 1}`} fill className="object-cover" />
              </div>
              <CardContent className="pt-3">
                <p className="text-sm text-muted-foreground">
                  <em>“machine dreams, soft teeth”</em> — acrylic, thread, and a
                  week of insomnia, 2025
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          i painted these after the radiator started singing at night. i thought
          maybe the metal was praying. i wanted to make machines that could
          blush, circuits that could hum back when you touch them.
        </p>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1602524810858-4e43b5c8dfd3",
            "https://images.unsplash.com/photo-1618222083579-5dc1de3c1a54",
            "https://images.unsplash.com/photo-1618005198919-d3d4b5a6c71b",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border">
              <Image src={src} alt={`artwork ${i + 4}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          during the berlin months i kept pressing flowers into my notebooks and
          labeling them “memory variants.” i glued fruit stickers next to
          anatomy sketches. i think i was trying to teach the body how to
          remember joy without hurting.
        </p>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border">
            <Image
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
              alt="Installation view"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">“intervals” — installation</h2>
            <p className="text-muted-foreground leading-relaxed">
              i hung drawings from the ceiling because walls felt like liars.
              each sheet trembled when someone breathed too close. the
              electricity in the room had a personality that day — it kept
              rearranging everyone’s pulse to the same rhythm.
            </p>
            <div className="flex flex-wrap gap-2">
              {["installation", "sound", "paper", "light", "electric anxiety"].map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-10">
          brooklyn winters make you draw smaller. the paint freezes mid-gesture.
          so i turned to ink and breath, to notebooks and burnt coffee. each
          page was a confession pretending to be geometry.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1608889828378-3edafc9eac2f",
            "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1",
            "https://images.unsplash.com/photo-1603228257740-d8f2c4e8cbd9",
            "https://images.unsplash.com/photo-1616627458851-6d6b39e3e7f5",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border">
              <Image src={src} alt={`drawing ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          everything here is half-truth and pigment. i never finish a piece; i
          just stop before it tells me something i’m not ready to know.
          the rest, i leave to the wind that sneaks through the studio window.
        </p>
        <Button asChild>
          <a href="/contact">send a letter or a ghost</a>
        </Button>
      </motion.section>
    </main>
  );
}
