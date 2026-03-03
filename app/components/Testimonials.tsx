"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Benjamin Carter",
        role: "X User",
        text: "This looks awesome! 🎉 Love that it’s free with no signup and so many customization options.",
    },
    {
        name: "Empuc1a",
        role: "Reddit User",
        text: "I was literally looking for an extension exactly like this today, app looks awesome. Using it on Chrome.",
    },
    {
        name: "Naitik",
        role: "Reddit User",
        text: "This is actually a really slick idea hovering to scan feels way more natural than pulling out your phone every time. Love the focus on speed and removing friction, especially for QR codes inside videos.",
    },
    {
        name: "Vikram Eashwar",
        role: "X User",
        text: "That’s amazing man!",
    },
    {
        name: "FromAndToUnknown",
        role: "Reddit User",
        text: "Finally no longer need to pull out the phone for every QR code, this is great",
    },
    {
        name: "Sammii",
        role: "X User",
        text: "I want this to be taken even further IMO, love the concept though.",
    },
    {
        name: "Chaminda Delpagodage",
        role: "X User",
        text: "This is super cool. I wish there was something like this for mobile browsers.",
    },
    {
        name: "Bradley",
        role: "Reddit User",
        text: "Looks awesome, will definitely try it, can’t wait for it to come to other browsers also",
    },
    {
        name: "Harjot Singh",
        role: "Reddit User",
        text: "this just made my chrome feel way too fancy today!",
    }
];

export default function Testimonials() {
    // We duplicate the array to create a seamless infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-16 relative z-10"
            >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
                    <span className="text-sm font-medium text-indigo-400">Wall of Love</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl px-2 font-extrabold tracking-tight text-white mb-6 leading-tight">
                    Users love <span className="text-indigo-500">HoverQR</span>
                </h2>
                <p className="mt-6 text-lg sm:text-xl px-4 text-white/60 font-light">
                    Here's what our early adopters have to say.
                </p>
            </motion.div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden z-10 py-10">
                {/* Fading Edges */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 w-12 sm:w-24 md:w-40 h-full bg-gradient-to-r from-slate-900 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 w-12 sm:w-24 md:w-40 h-full bg-gradient-to-l from-slate-900 to-transparent" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35, // Adust this value to make it faster/slower
                    }}
                    className="flex gap-6 w-max px-6"
                >
                    {duplicatedTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] sm:w-[340px] md:w-[400px] flex-shrink-0 flex flex-col justify-between rounded-3xl border border-white/10 bg-indigo-500/5 backdrop-blur-lg p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-indigo-500/30 transition-colors duration-300"
                        >
                            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 sm:mb-8">
                                "{testimonial.text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                                <p className="text-indigo-400 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
