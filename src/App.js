import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Set total body height dynamically
    const contentHolderHeight = document.querySelector('.content-holder').offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`;

    // GSAP animations
    ScrollTrigger.create({
      trigger: '.website-content',
      start: '-0.1% top',
      end: 'bottom bottom',
      onEnter: () => {
        gsap.set('.website-content', { position: 'absolute', top: '195%' });
      },
      onLeaveBack: () => {
        gsap.set('.website-content', { position: 'fixed', top: '0' });
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
      <div className="logo" />
      <div className="img-holder">
        <img src="/public/hero.png" alt="Hero" />
      </div>
      <div className="header">
        <div className="letters">
          <div />
          <div>h</div>
          <div>e</div>
          <div>l</div>
        </div>
        <div className="letters">
          <div>l</div>
          <div>o</div>
          <div>!</div>
          <div />
        </div>
      </div>
      <div className="website-content">
        <div className="content-holder">
          {/* Navbar Section */}
          <div className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="container">
            {/* Profile Section */}
            <div className="profile" id="home">
              <div className="profile-image">
                <img src="/public/img-2.jpg" alt="Profile" />
              </div>
              <div className="profile-text">
                <h2>I'M DAVE</h2>
                <p>My name is Dave Bryan, I'm a 5th semester student in computer science Universitas Klabat.</p><br />
                <p>I am from Manado, North Sulawesi, Indonesia. I'm interested in game development, 3d art, and cyber security. I like to draw and play video games.</p>
              </div>
            </div>
            {/* Skills Section */}
            <div className="skill" id="skills">
              <div className="skill-text">
                <h2>My Skills</h2>
                <ul>
                  <li>Programming Languages: Python, JavaScript, C#</li>
                  <li>Game Development: Unity</li>
                  <li>3D Modeling: Blender 3D</li>
                  <li>Cyber Security: Penetration Testing Basics</li>
                </ul>
              </div>
            </div>
            {/* Portfolio Section */}
            <div className="portofolio" id="portfolio">
              <div className="feat">
                <img src="/public/porto1.png" alt="Project 1" />
                <h2>Real life building miniature</h2>
                <p>Real life building miniature made from Blender 3D</p>
              </div>
              <div className="feat">
                <img src="/public/game.png" alt="Project 2" />
                <h2>2 Players shooter game</h2>
                <p>A 2 player game where the players control rockets to shoot each other's rockets with a bouncing bullet feature.</p>
              </div>
              <div className="feat">
                <img src="/public/game2.png" alt="Project 3" />
                <h2>Roll a ball</h2>
                <p>A development from the basic Unity tutorial game "Roll a Ball" with more features. Themed as Pokémon, the objective is to catch as many Pokémon as possible in 5 minutes.</p>
              </div>
            </div>
            {/* Contact Section */}
            <div className="contact" id="contact">
              <h2>Contact</h2>
              <p>Email: davebryandave24@gmails.com</p>
              <div className="social-media">
                <a href="https://web.facebook.com/dbryn24/">
                  <img src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/dbryn_24/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/dave-bryan-78a12b302/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/dbryn24">
                  <img src="https://images.seeklogo.com/logo-png/30/1/github-logo-png_seeklogo-304612.png?v=638664844220000000" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
