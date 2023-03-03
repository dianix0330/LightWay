import { useState, useEffect, useContext } from "react";

import { ProfileItem } from "../../components";
import { ProfileContext } from "../../contexts/ProfileContext";
import { SWAPI } from "../../services/APIService";
import "./index.scss";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { profiles, setProfiles, setSelectedIndex } = useContext(ProfileContext);

  useEffect(() => {
    if (query === "") return;
    setLoading(true);
    const fetchData = async () => {
      const result = await SWAPI.getCharacter(query);
      setProfiles(result);
    };
    fetchData();
    setLoading(false);
  }, [query]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setQuery(e.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery(ev.target.search_input.value);
  };

  return (
    <main className="container">
      {loading ? (
        <div className="loading_spinner"></div>
      ) : (
        <div className="profile">
          <form onSubmit={handleSubmit} className="profile__serach">
            <input
              type="search"
              id="search_input"
              placeholder="Please input the character's name here..."
              className="profile__serach-input"
              onKeyDown={handleInput}
            />
            <input
              type="submit"
              className="profile__search-button"
              value="Search"
            />
          </form>
          <div className="profile__list">
            {profiles?.map((profile, index) => (
              <ProfileItem
                key={index}
                {...profile}
                onSelectProfile={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default ProfilePage;
