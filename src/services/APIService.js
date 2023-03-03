export const SWAPI = {
  getCharacter: async function (characterName) {
    const data =  await fetch(`${process.env.REACT_APP_BASE_URL}?search=${characterName}&format=json`)
    const result = await data.json();
    return result.results;
  }
}