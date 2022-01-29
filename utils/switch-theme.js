export default function switchTheme() {
  /*     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
    } */

  const isDarkModeSet = window.localStorage.getItem('darkmode');

  if (!isDarkModeSet) {
    document.body.classList.add('dark-mode');
    window.localStorage.setItem('darkmode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    window.localStorage.removeItem('darkmode');
  }
}
