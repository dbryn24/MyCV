import Navbar from "../navbar";

const Content = () => {
    return (
      <div className="website-content">
      <div className="content-holder">
        <Navbar />
        <div className="container">
          <div className="profile" id="home">
            <div className="profile-image">
              <img src="/profil.jpeg" alt="Profile" />
            </div>
            <div className="profile-text">
              <h2>I'M DAVE</h2>
              <a>My name is Dave Bryan, I'm a 5th semester student in computer science Universitas Klabat.</a><br />
              <a>I am from Manado, North Sulawesi, Indonesia. I'm interested in game development, 3d art, and cyber security. I like to draw and play video games.</a>
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
              <img src="/porto1.png" alt="Project 1" />
              <h2>Real life building miniature</h2>
              <p>Real life building miniature made from Blender 3D</p>
            </div>
            <div className="feat">
              <img src="/game.png" alt="Project 2" />
              <h2>2 Players shooter game</h2>
              <p>A 2 player game where the players control rockets to shoot each other's rockets with a bouncing bullet feature.</p>
            </div>
            <div className="feat">
              <img src="/game2.png" alt="Project 3" />
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
    );
    };

export default Content;