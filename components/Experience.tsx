import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { items } from "../data";

const Experience = () => {
    return (
        <section id="experience" className="mt-10 flex items-center justify-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    My <span className="text-purple">Work Experience</span>
                </h1>
                </div>

                <div className="relative pt-5">
                    <HoverEffect
                        items={items}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;