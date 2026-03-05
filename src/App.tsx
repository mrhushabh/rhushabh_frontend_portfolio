import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Splash } from './components/Splash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Splash key="splash" onComplete={() => { }} />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;
