import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Modal } from './Modal';

const experiences = [
    {
        id: 1,
        role: 'Software Developer',
        company: 'University of Southern California',
        period: 'May 2024 - Present',
        summary: 'Architected full-stack dashboards and led integration log tracker development.',
        details: [
            'Led a Team to develop a real-time AssetWorks–Workday integration log tracker, reducing issue resolution time by 40%.',
            'Architected and developed a full-stack dashboard using React, Node.js, Express, and MongoDB to monitor logs.',
            'Built dynamic UI components in React to display real-time, XML-based logs with filtering and anomaly detection features.',
            'Completed Data migration, API migration and API testing processes, increasing data fetching speed by 25%.',
            'Programmed Python scripts to automate daily MySQL server and AssetWorks API updates, reducing manual work by 50%.',
            'Deployed the internal dashboard on AWS (EC2, S3, CloudFront), improving uptime to 99.9% and reducing load times by 30%.',
            'Automated data integration pipelines for AssetWorks–Workday using Python scripts, improving data reliability by 35%.'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Python']
    },
    {
        id: 2,
        role: 'Software Developer Intern',
        company: 'Hudson Advisors L.P.',
        period: 'May 2025 - Aug 2025',
        summary: 'Built Go APIs for Tax Compliance and migrated legacy workflows to AWS.',
        details: [
            'Built REST/gRPC APIs in Go (Gin) for the Tax Compliance Tracker, adding data validation and cutting manual work by 40%.',
            'Developed an API integration layer for the Bond Investor CRM, connecting internal systems to external data providers.',
            'Contributed to migration of legacy eBAM workflows into Go microservices on AWS ECS.',
            'Implemented secure API authentication, improving reliability and maintainability by 25%.'
        ],
        technologies: ['Go', 'Gin', 'AWS ECS', 'REST', 'gRPC']
    },
    {
        id: 3,
        role: 'Software Engineering Intern',
        company: 'PTC.Inc',
        period: 'Jul 2022 - Jun 2023',
        summary: 'Developed Python automation scripts and designed Kafka-based architectures.',
        details: [
            'Developed Python automation scripts using BeautifulSoup and Kafka for Help Center pipelines, reducing manual effort by 75%.',
            'Designed a Kafka-based event-driven architecture for real-time Help Center updates.',
            'Resolved CI/CD pipeline and Ant build script issues reported in JIRA, cutting build failures by 25%.'
        ],
        technologies: ['Python', 'Kafka', 'BeautifulSoup', 'CI/CD', 'Ant']
    }
];

export const Experience = () => {
    const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

    return (
        <section id="experience" className="py-20 relative">
            <div className="absolute left-0 top-0 w-full h-full bg-dark -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark" />

                            <div
                                className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                                onClick={() => setSelectedExp(exp)}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={18} className="text-blue-400" />
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Calendar size={16} />
                                        {exp.period}
                                    </div>
                                </div>

                                <h4 className="text-lg font-medium text-blue-300 mb-3">{exp.company}</h4>
                                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {exp.summary}
                                </p>

                                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                                    Read More <ChevronRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedExp}
                onClose={() => setSelectedExp(null)}
                title={selectedExp?.role}
            >
                {selectedExp && (
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-bold text-blue-300 mb-2">{selectedExp.company}</h4>
                            <p className="text-gray-400 flex items-center gap-2">
                                <Calendar size={16} /> {selectedExp.period}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h5 className="font-semibold text-lg text-white">Key Achievements</h5>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {selectedExp.details.map((point, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-semibold text-lg text-white mb-3">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                                {selectedExp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};
