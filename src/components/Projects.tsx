import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Youtube, Info, ChevronRight } from 'lucide-react';
import { Modal } from './Modal';

const projects = [
    {
        id: 1,
        title: 'Stock Trading and Digital Wallet iOS/Web App',
        summary: 'Cross-platform app for stock trading and portfolio analysis with HighCharts visualization.',
        details: [
            'Built a cross-platform stock trading and portfolio analysis app, developing a SwiftUI iOS app and a MERN stack web app.',
            'Utilized Finnhub APIs for real-time stock data and MongoDB for portfolio management.',
            'Implemented portfolio tracking, virtual trading, and financial visualizations using HighCharts, WebKit (iOS), and React (Web).',
            'Deployed the full iOS/Web trading platform on GCP using Cloud Run and Cloud Build, enabling scalable API performance.',
            'Reduced backend latency by 35% and ensured high availability for real-time stock data delivery.'
        ],
        tech: ['SwiftUI', 'React', 'Node.js', 'MongoDB', 'GCP', 'MERN Stack'],
        github: 'https://github.com/mrhushabh',
        demo: 'https://node-backend-448822.web.app/search/home',
        video: 'https://www.youtube.com/watch?v=F8raFihjc6c',
        image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        title: 'Twist Tile Golf',
        summary: '2D Unity game with real-time Firebase analytics and C# scripting.',
        details: [
            'Designed and developed a 2D game using Unity and C# for game mechanics and scripting.',
            'Integrated Firebase to store and manage real-time game analytics.',
            'Established real-time analytics tracking by embedding Firebase database calls within Unity C# scripts.',
            'Dynamically updated player behavior data and in-game events to generate actionable insights for continuous gameplay improvement.'
        ],
        tech: ['C#', 'Unity', 'Firebase'],
        github: 'https://github.com/CSCI-526-Spring-2025/csci-526-final-project-putter-pirates',
        demo: 'https://csci-526-spring-2025.github.io/csci-526-final-project-putter-pirates/BetaBuild2/',
        image: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        title: 'ChatDB',
        summary: 'NLP to SQL/NoSQL translator using Python/Flask and Flutter.',
        details: [
            'Devised a Python-based system using NLTK to translate natural language into SQL and NoSQL queries, reducing query creation time by 50%.',
            'Integrated MySQL and MongoDB with natural language parsing and query execution workflows.',
            'Supported operations like SELECT, GROUP BY, and conditional filters, achieving 30% faster execution.',
            'Developed a Flutter mobile app for intuitive query input, displaying the generated query, and enabling real-time execution.'
        ],
        tech: ['Python', 'Flask', 'NLP', 'Flutter', 'Dart', 'MySQL', 'MongoDB'],
        github: 'https://github.com/mrhushabh',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        title: 'ApplyFlow',
        summary: 'Full-stack job application tracker with Kanban board and real-time analytics.',
        details: [
            'Built a type-safe REST API using Node.js, Express, and Prisma with a SQLite database and JWT authentication.',
            'Developed a responsive, modern UI with React, TypeScript, and Tailwind CSS, featuring drag-and-drop functionality via @dnd-kit.',
            'Implemented React Query for efficient server-state management and Recharts for visualizing application metrics.',
            'Future Scope: Integrate Gmail API (OAuth2) to parse incoming recruiter emails and automatically update application statuses using LLM-based text extraction.'
        ],
        tech: ['React', 'TypeScript', 'Node.js', 'Prisma', 'Tailwind', 'Recharts'],
        github: 'https://github.com/mrhushabh/ApplyFlow',
        demo: 'https://apply-flow-mauve.vercel.app/',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Image Overlay */}
                        <div className="aspect-video w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/20 transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/20">
                                <Info size={20} className="text-white" />
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <Folder className="text-teal-400" size={20} />
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 line-clamp-2">{project.summary}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                    View Details <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="aspect-video w-full rounded-xl overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <h5 className="font-semibold text-lg text-white">Key Features</h5>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {selectedProject.details.map((point, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-semibold text-lg text-white mb-3">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-medium"
                            >
                                <Github size={20} /> View Code
                            </a>

                            {selectedProject.demo !== '#' && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-colors font-medium border border-teal-500/20"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}

                            {/* @ts-ignore */}
                            {selectedProject.video && (
                                /* @ts-ignore */
                                <a
                                    href={selectedProject.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors font-medium border border-red-500/20"
                                >
                                    <Youtube size={20} /> Watch Demo
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};
