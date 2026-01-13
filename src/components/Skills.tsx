import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        icon: <Code size={24} className="text-blue-400" />,
        skills: ['HTML', 'CSS', 'Javascript', 'Java', 'Python', 'Swift', 'Kotlin', 'SQL', 'C#']
    },
    {
        title: 'Web & Databases',
        icon: <Database size={24} className="text-teal-400" />,
        skills: ['React', 'Typescript', 'Firebase', 'Flask', 'Node.js', 'MongoDB', 'MySQL', 'Postgres', 'REST API']
    },
    {
        title: 'Frameworks & Cloud',
        icon: <Server size={24} className="text-green-400" />,
        skills: ['SwiftUI', 'Tailwind CSS', 'Vite', 'Flutter', 'Springboot', 'Hadoop', 'AWS', 'GCP']
    },
    {
        title: 'Tools & Methodologies',
        icon: <Wrench size={24} className="text-purple-400" />,
        skills: ['Xcode', 'Git', 'Jira/Confluence', 'OOP', 'Data Science', 'Machine Learning', 'Unity']
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-dark p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-white/5 rounded-lg">
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-lg">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
