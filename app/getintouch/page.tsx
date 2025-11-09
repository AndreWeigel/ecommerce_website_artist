"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-3 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Get in Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          whether it’s a show, a collaboration, or just a thought — I’d love to hear from you.
        </p>
      </motion.header>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {/* Left: Contact Details */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:joanapereiraseabra@gmail.com"
                className="hover:underline"
              >
                joanapereiraseabra@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-primary" />
              <a
                href="https://www.instagram.com/joanapse/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @joanapse
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Studio based in Porto, Portugal</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-primary" />
              <a
                href="https://joanaseabra.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                joanaseabra.com
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Right: Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree or backend endpoint
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>

      {/* Optional: Studio Visit Invitation */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-xl font-semibold mb-2">Studio Visits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Visits are welcome by appointment. Let me know if you{"'"}d like to drop by the studio —
          there’s always paint, coffee, and unfinished thoughts waiting.
        </p>
      </motion.section>
    </main>
  );
}
