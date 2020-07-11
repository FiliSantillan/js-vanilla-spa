export const Header = () => {
    const view = `
    <header class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            Rick & morty | <strong>Vanilla SPA</strong>
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </header>
  `;
    return view;
};
