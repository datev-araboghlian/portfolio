import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useCallback, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const videoRef = useRef(null);

  const handleNavigation = useCallback((direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  }, []);

  useEffect(() => {
    // Prevent default video behavior on mobile
    const preventFullscreen = (e) => {
      e.preventDefault();
    };

    const currentVideo = videoRef.current;
    if (currentVideo) {
      currentVideo.addEventListener('webkitfullscreenchange', preventFullscreen);
      currentVideo.addEventListener('fullscreenchange', preventFullscreen);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('webkitfullscreenchange', preventFullscreen);
        currentVideo.removeEventListener('fullscreenchange', preventFullscreen);
      }
    };
  }, [selectedProjectIndex]);

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  console.log('Project href:', currentProject.href);
                  window.open(currentProject.href, '_blank');
                }}
                className="
                  flex items-center justify-center 
                  bg-black-100 text-white 
                  px-4 py-2 rounded-lg 
                  cursor-pointer 
                  group hover:bg-black-300 
                  transition-colors 
                  w-full
                "
              >
                <img 
                  src="/assets/github.svg" 
                  alt="GitHub" 
                  className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform pointer-events-none" 
                />
                View Project
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button 
              className="arrow-btn" 
              onClick={() => handleNavigation('previous')}
              aria-label="Previous Project"
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button 
              className="arrow-btn" 
              onClick={() => handleNavigation('next')}
              aria-label="Next Project"
            >
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group key={selectedProjectIndex} scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer 
                    ref={videoRef}
                    texture={currentProject.texture} 
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls 
              maxPolarAngle={Math.PI / 2} 
              enableZoom={false} 
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
