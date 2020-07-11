import { getData } from "../utils/getData";

export const Home = async () => {
    const characters = await getData();

    const view = `
    <div class="Characters">
      ${characters.results
          .map(
              character => `
        <article class="Character-card">
          <a href="#/${character.id}/">
            <header class="Character-details">
              <h2>${character.name}</h2>
              <span status="${character.status.toLowerCase()}">${character.status}</span>
            </header>
            <section class="Character-imageWrapper">
              <img src="${character.image}" alt="${character.name}" class="Character-image">
            </section>
          </a>
      </article>
      `
          )
          .join("")}
    </div>
  `;
    return view;
};
