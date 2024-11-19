import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "profile");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);

    return (
        <div className="profile" id="home">
            <div className="profile-image">
              <img src="/profil.jpeg" alt="Profile" />
            </div>
            <div className="profile-text">
              <h2>{profile.nama}</h2>
              <a>{profile.profil1}</a><br />
              <a>{profile.profil2}</a>
            </div>
          </div>
    );
};

export default Profile;