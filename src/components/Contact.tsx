import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-2xl mx-auto space-y-8"
                >
                    <h3 className="text-2xl font-bold text-center">Let's Talk</h3>
                    <p className="text-gray-400 leading-relaxed text-center">
                        I'm currently open to freelance projects and full-time opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                        <a href="mailto:rushmadurwar@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail className="text-secondary" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="font-medium">rushmadurwar@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="text-secondary" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="font-medium">+1 213-681-2321</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin className="text-secondary" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-medium">San Jose, USA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
