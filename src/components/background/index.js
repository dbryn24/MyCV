import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Background = () => {
  const [awal, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "awal");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setFeatures(data);
    });
  }, []);
    return (
        <div className="img-holder">
        <img src={awal.bg} alt="background" />
      </div>
    );
};

export default Background;