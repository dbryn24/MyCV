import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Porto = () => {
  const [porto, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "porto");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
    return (
        <div className="portofolio" id="portfolio">
            <div className="feat">
              <img src="/porto1.png" alt="Project 1" />
              <h2>{porto.title1}</h2>
              <p>{porto.isi1}</p>
            </div>
            <div className="feat">
              <img src="/game.png" alt="Project 2" />
              <h2>{porto.title2}</h2>
              <p>{porto.isi2}</p>
            </div>
            <div className="feat">
              <img src="/game2.png" alt="Project 3" />
              <h2>{porto.title3}</h2>
              <p>{porto.isi3}</p>
            </div>
          </div>
    );
};

export default Porto;