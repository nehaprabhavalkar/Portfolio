import { WobbleCard } from "./ui/wobble-card";
import { techStack, contact } from "@/data";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {

    const skills = techStack;
    const { email, linkedin, github } = contact;

    return (
        <section id="about" className="h-fit mb-20 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <WobbleCard
                containerClassName="col-span-1 md:col-span-2 bg-[rgba(10,25,50,0.25)] text-white rounded-2xl"
                // containerClassName="col-span-1 md:col-span-2 text-white rounded-2xl"
                className="p-4 md:p-6 flex flex-col justify-end min-h-[280px] md:min-h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    // style={{ backgroundImage: "url('/spidey.jpeg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />
                <div className="relative z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                    Hi there, I&apos;m Neha Prabhavalkar,
                    <br /> your storyteller behind the data
                    </h2>
                </div>
                </WobbleCard>

                {/* About Card */}
                <WobbleCard
                containerClassName="bg-[rgba(10,25,50,0.25)] text-white rounded-2xl"
                // containerClassName="bg-[rgba(255,255,255,0.08)] text-white rounded-2xl"
                className="p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 leading-relaxed">
                    Passionate about building reliable data ecosystems, whether it’s architecting scalable pipelines, enabling data governance, or ensuring security and compliance.
                    <br/><br/>
                    Currently exploring the modern data stack to drive accessibility, 
                    discoverability, and trust in data, empowering teams to make smarter, faster decisions.
                </h3>
                </WobbleCard>

                {/* Connect Card */}
                <WobbleCard
                containerClassName="bg-[rgba(10,25,50,0.25)] text-white rounded-2xl"
                // containerClassName="bg-[rgba(16,185,129,0.15)] text-white rounded-2xl"
                className="p-4 md:p-6 flex flex-col items-center justify-center gap-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Connect with me
                </h3>

                <div className="flex gap-6 z-10 text-2xl sm:text-3xl">
                    <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    >
                    <FaLinkedin />
                    </a>
                    <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    >
                    <FaGithub />
                    </a>
                    <a
                    href={`mailto:${email}`}
                    className="hover:scale-110 transition-transform"
                    >
                    <FaEnvelope />
                    </a>
                </div>
                </WobbleCard>

                <WobbleCard
                containerClassName="bg-[rgba(10,25,50,0.25)] text-white rounded-2xl col-span-1 md:col-span-2"
                //containerClassName="bg-[rgba(6,182,212,0.15)] text-white rounded-2xl col-span-1 md:col-span-2"
                className="p-4 md:p-6"
                >
                <p className="text-xs sm:text-sm opacity-70">I constantly try to improve</p>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                    My tech stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((tech) => (
                    <span
                        key={tech}
                        className="bg-[rgba(255,255,255,0.12)] backdrop-blur-sm border border-white/10 
                                px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-[rgba(255,255,255,0.2)] 
                                transition-colors duration-200"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </WobbleCard>
            </div>
        </section>
    );  
}