import Navbar from "../navbar";
import Contact from "./contact";
import Porto from "./portofolio";
import Profile from "./profile";
import Skill from "./skill";

const Content = () => {
    return (
      <div className="website-content">
      <div className="content-holder">
        <Navbar />
        <div className="container">
          <Profile />
          <Skill />
          <Porto />
          <Contact />
        </div>
      </div>
    </div>
    );
    };

export default Content;