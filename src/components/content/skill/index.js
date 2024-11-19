import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skill = () => {
  const [skill, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "skill");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
    return (
        <div className="skill" id="skills">
            <div className="skill-text">
              <h2>{skill.title}</h2>
              <ul>
                <li>{skill.programming}</li>
                <li>{skill.gamedev}</li>
                <li>{skill.modeling}</li>
                <li>{skill.cybersec}</li>
              </ul>
            </div>
        </div>
    );
};

export default Skill;