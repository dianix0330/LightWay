import "./index.scss";

const ProfileModal = ({
  birth_year,
  gender,
  hair_color,
  height,
  eye_color,
  mass,
  name,
  films,
  starships,
}) => {
  const getNumber = (title, url) => {
    const splits = url.split("/");
    return title + splits[splits.length - 2];
  };

  const handleModalClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <div className="profile__modal" onClick={handleModalClick}>
      <div className="profile__modal__header">
        <h1>{name}</h1>
      </div>
      <table class="styled-table">
        <tbody>
          <tr>
            <th>Date of Birth</th>
            <td>{birth_year}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{gender}</td>
          </tr>
          <tr class="active-row">
            <th>Height</th>
            <td>{height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{mass}</td>
          </tr>
          <tr>
            <th>Hair Color</th>
            <td>{hair_color}</td>
          </tr>
          <tr>
            <th>Eye Color</th>
            <td>{eye_color}</td>
          </tr>
          {films.length > 0 && (
            <tr>
              <th>Films</th>
              <td>
                <ul>
                  {films.map((film, index) => (
                    <li key={"film" + index}>{getNumber("Film-", film)}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          <tr>
            <th>Starships</th>
            <td>{starships.length ?? 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileModal;
