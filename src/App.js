import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headers from './components/header';
import Content from './components/content';
import Background from './components/background';

gsap.registerPlugin(ScrollTrigger);
gsap.set(".website-content", { position: "absolute", top: "195%" });


function App() {
  useEffect(() => {
    const contentHolderHeight = document.querySelector('.content-holder').offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`;

    // GSAP animations
    ScrollTrigger.create({
      trigger: ".website-content",
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(".website-content", { position: "absolute", top: "195%" });
      },
    });

    gsap.to('.header .letters:first-child', {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: 'power2.inOut',
      scrollTrigger: {
        start: 'top top',
        end: '+=200%',
        scrub: 1,
      },
    });

    gsap.to('.header .letters:last-child', {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: 'power2.inOut',
      scrollTrigger: {
        start: 'top top',
        end: '+=200%',
        scrub: 1,
      },
    });

    gsap.to('.img-holder', {
      rotation: 0,
      clipPath: 'Polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power2.inOut',
      scrollTrigger: {
        start: 'top top',
        end: '+=200%',
        scrub: 1,
      },
    });

    gsap.to('.img-holder img', {
      scale: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        start: 'top top',
        end: '+=200%',
        scrub: 1,
      },
    });
  }, []);

  
  return (
    <div>
      <Background />
      <Headers />
      <Content />
    </div>
  );
}

export default App;
