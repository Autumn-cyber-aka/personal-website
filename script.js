const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');
const header = document.querySelector('[data-header]');
const navigationLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

function closeMenu() {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航菜单');
  navigation.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? '打开导航菜单' : '关闭导航菜单');
    navigation.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

function updatePageState() {
  header?.classList.toggle('scrolled', window.scrollY > 12);

  const currentPosition = window.scrollY + 160;
  let currentSection = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= currentPosition) currentSection = section.id;
  });

  navigationLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentSection}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', updatePageState, { passive: true });
updatePageState();

const yearElement = document.querySelector('[data-year]');
if (yearElement) yearElement.textContent = new Date().getFullYear();
