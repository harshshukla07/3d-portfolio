import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";



gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
        <div className="mb-16">
          <TitleHeader 
              title="Work"
              sub="💼 My Projects Overview"
          />
        </div>
      <div className="w-full">
        <div className="showcaselayout"> 
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project4.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                AI Productivity Made Effortless with a Powerful, User-Friendly App called QuickAI
              </h2>
              <p className="text-white-50 md:text-xl">
                
                An AI SAAS app built with React, Node.js, Express, PostgreSQL, and Tailwind CSS for a fast, seamless AI experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project5.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Slice, Click, Enjoy – Effortless Pizza Ordering at Your Fingertips!</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project6.png" alt="YC Directory App" />
              </div>
              <h2>World Wise - A World Exploration App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AppShowcase;
