import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "navbar");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
    return (
        <div className="navbar">
          <ul>
            <li><a href="#home">{navbar.Home}</a></li>
            <li><a href="#skills">{navbar.skills}</a></li>
            <li><a href="#portfolio">{navbar.portofolio}</a></li>
            <li><a href="#contact">{navbar.contact}</a></li>
          </ul>
        </div>
    );
};

export default Navbar;