import { getHash } from "../utils/getHash";
import { getData } from "../utils/getData";

export const Character = async () => {
    const id = getHash();
    const character = await getData(id);

    const { image, name, episode, status, species, gender, origin, location } = character;

    const view = `
    <div class="Characters-inner">
      <div class="Characters-wrapper">
        <article class="Characters-imageWrapper">
          <img src="${image}" alt="${name}" class="Characters-image">
          <h2>${name}</h2>
        </article>
        <article class="Characters-details">
          <h3>Episodes: ${episode.length}</h3>
          <h3>Status: ${status}</h3>
          <h3>Species: ${species}</h3>
          <h3>Gender: ${gender}</h3>
          <h3>Origin: ${origin.name}</h3>
        </article>
      </div>
    </div>
  `;
    return view;
};
