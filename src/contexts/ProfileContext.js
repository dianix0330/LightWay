import { createContext, useState } from "react";

const ProfileContext = createContext({});

function ProfileProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ProfileContext.Provider value={{ showModal, profiles, selectedIndex, setShowModal, setProfiles, setSelectedIndex }}>
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
