import { useContext } from "react";

import { Header } from "./components";
import { ProfilePage } from "./containers";
import { ProfileModal } from "./components";

import { ProfileContext } from "./contexts/ProfileContext";
import "./App.css";

function App() {
  const { showModal, selectedIndex, profiles, setShowModal } = useContext(ProfileContext);

  const handleOutModal = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Header />
      <ProfilePage />
      {profiles && profiles.length > 0 && selectedIndex !== -1 && (
        <div className={`modal__container ${showModal ? "show" : "hide"}`} onClick={handleOutModal}>
          <ProfileModal {...profiles[selectedIndex]} />
        </div>
      )}
    </div>
  );
}

export default App;
