import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-blue-500/30">
            <Navbar />
            <main className="pt-20 px-6 max-w-7xl mx-auto">
                {children}
            </main>
            <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/5 mt-20">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </div>
    );
};
