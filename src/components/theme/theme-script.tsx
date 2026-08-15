const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

const ThemeScript = () => {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
};

export default ThemeScript;
