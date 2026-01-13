import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        id: 1,
        degree: 'MS Computer Science',
        school: 'University of Southern California',
        year: 'Jan 2024 - Dec 2025',
        details: 'Coursework: Analysis of Algorithms, Web Technologies, Advanced Data Stores, Information Retrieval, Advanced Mobile Devices, Security Systems.'
    },
    {
        id: 2,
        degree: 'BE (Computer Engineering & Data Science)',
        school: 'Savitribai Phule Pune University',
        year: 'Aug 2019 - May 2023',
        details: 'Coursework: OOPs, Software Engineering, Data Structures, DBMS, NLP.'
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-20 relative bg-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-4xl mx-auto px-4 grid gap-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-dark border border-white/5 hover:border-white/10 transition-all"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                <GraduationCap size={24} />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">{edu.degree}</h3>
                                <span className="text-sm text-green-400 font-medium px-3 py-1 bg-green-500/10 rounded-full w-fit">
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-lg text-gray-300 mb-2">{edu.school}</p>
                            <p className="text-gray-400">{edu.details}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
