import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl px-4"
            >
                <div className="flex items-center justify-center gap-2 mb-8">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 backdrop-blur-sm">
                        Available for hire
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Hi, I'm <span className="text-white">Rhushabh</span><br />
                    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                        Building Digital Experiences
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    MS in Computer Science at USC | Full Stack Software Developer
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-3 bg-white text-dark font-semibold rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all"
                    >
                        View Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all"
                    >
                        Contact Me
                    </motion.a>
                </div>

                {/* Tech Stack Bubbles */}
                <div className="pt-20 flex items-center justify-center gap-8 text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                        <Layout size={24} className="text-blue-400" />
                        <span className="text-xs">Frontend</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Code size={24} className="text-teal-400" />
                        <span className="text-xs">System</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Database size={24} className="text-green-400" />
                        <span className="text-xs">Architecture</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
