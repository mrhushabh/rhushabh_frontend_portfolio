import { motion } from 'framer-motion';

interface SplashProps {
    onComplete: () => void;
}

export const Splash = ({ onComplete }: SplashProps) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
        >
            <div className="relative flex items-center justify-center">
                {/* Outer rotating ring */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full border-t-2 border-r-2 border-primary/30"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />

                {/* Inner rotating ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full border-b-2 border-l-2 border-secondary/50"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />

                {/* Center Logo Text */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-4xl font-bold tracking-tighter"
                >
                    <span className="text-secondary">&lt;</span>
                    <span className="text-primary mx-1">R</span>
                    <span className="text-secondary">/&gt;</span>
                </motion.div>
            </div>
        </motion.div>
    );
};
