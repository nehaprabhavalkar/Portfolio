"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Hero() {
 
    const animatedText = "Turning Complexity Into Clarity!";

    return (
        <section className="pb-20 pt-36 h-screen">
        <Spotlight
            className="absolute inset-0 -z-10"
            gradientFirst="radial-gradient(60% 60% at 30% 40%, rgba(255,255,255,0.2) 0, transparent 100%)"
            gradientSecond="radial-gradient(50% 50% at 70% 50%, rgba(168,85,247,0.25) 0, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 60%, rgba(59,130,246,0.25) 0, transparent 100%)"
            width={800}
            height={1600}
            translateY={-300}
            duration={7}
            xOffset={100}
        />

        <div className="h-screen w-full dark:bg-black-100 absolute top-0 left-0 flex items-center justify-center">
            <div className="text-5xl md:text-7xl font-extrabold leading-tight text-center">
                <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
                Neha
                </Highlight>
                <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
                Prabhavalkar
                </Highlight>
                <TextGenerateEffect
                    words={animatedText}
                    duration={3}
                    className="text-center text-[40px] md:text-5xl lg:text-6xl p-4"/>
            </div>
        </div>

        </section>
  );
}
