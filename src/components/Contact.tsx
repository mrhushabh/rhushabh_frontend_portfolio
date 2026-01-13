import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-teal-500/5 blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 space-y-8"
                >
                    <h3 className="text-2xl font-bold">Let's Talk</h3>
                    <p className="text-gray-400 leading-relaxed">
                        I'm currently open to freelance projects and full-time opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="font-medium">rushmadurwar@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="text-teal-400" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="font-medium">+1 213-681-2321</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin className="text-green-400" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-medium">Los Angeles, USA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
