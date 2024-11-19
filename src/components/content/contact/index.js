import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setFeatures] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "contact");
    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
    return (
        <div className="contact" id="contact">
            <h2>{contact.title}</h2>
            <p>{contact.email}</p>
            <div className="social-media">
              <a href="{https://web.facebook.com/dbryn24/}">
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
    );
};

export default Contact;