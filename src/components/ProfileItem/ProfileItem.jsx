import { useContext } from "react";

import { ProfileContext } from "../../contexts/ProfileContext";
import "./index.scss";

const ProfileItem = ({
  birth_year,
  gender,
  hair_color,
  height,
  eye_color,
  mass,
  name,
  onSelectProfile
}) => {
  const { setShowModal } = useContext(ProfileContext);

  const handleClick = () => {
    setShowModal(true);
    onSelectProfile();
  }
  
  return (
    <div className="profile__item" onClick={handleClick}>
      <div className="profile__item__name">
        <h5>{name}</h5>
      </div>
      <p>
        <b>Date of birth:</b> {birth_year}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <span>
        <p>
          <b>Hair:</b> {hair_color}
        </p>
        <p>
          <b>Eye:</b> {eye_color}
        </p>
      </span>
      <span>
        <p>
          <b>Height:</b> {height}
        </p>
        <p>
          <b>Weight:</b> {mass}
        </p>
      </span>
    </div>
  );
};

export default ProfileItem;
