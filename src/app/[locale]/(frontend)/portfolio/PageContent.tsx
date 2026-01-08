"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";

/**
 * Contact Us Page Content
 */
export function PageContent() {
  return (
    <main className="min-h-screen p-8">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground mb-12"
          variants={fadeInUp}
        >
          Get in touch with us. We&apos;d love to hear from you.
        </motion.p>

        <motion.form className="space-y-6" variants={fadeInUp}>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg bg-background"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg bg-background"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3 border rounded-lg bg-background min-h-[150px]"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </main>
  );
}

