import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Headers = () => {
  const [awal, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "awal");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);

  return (
    <div className="header">
            <div className="letters">
              <div />
              <div>{awal.H}</div>
              <div>{awal.E}</div>
              <div>{awal.L}</div>
            </div>
            <div className="letters">
              <div>{awal.L}</div>
              <div>{awal.O}</div>
              <div>{awal.tandaseru}</div>
              <div />
            </div>
          </div>
    );
};

export default Headers;