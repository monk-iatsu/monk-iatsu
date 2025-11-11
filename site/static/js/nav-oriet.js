document.addEventListener('DOMContentLoaded', function () {
  const tabsElement = document.getElementById('myTabs');
  const mediaQuery = window.matchMedia('(max-width: 599px)');

  function handleOrientationChange(event) {
    if (event.matches) {
      tabsElement.setAttribute('aria-orientation', 'vertical');
    } else {
      tabsElement.setAttribute('aria-orientation', 'horizontal');
    }
  }

  handleOrientationChange(mediaQuery);

  mediaQuery.addEventListener('change', handleOrientationChange);
});