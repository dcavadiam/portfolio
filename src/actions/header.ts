type ActiveSection = HTMLElement | null;

export const setActiveLink = (): void => {
    const sections = document.querySelectorAll<HTMLElement>('section');
    const links = document.querySelectorAll<HTMLAnchorElement>('nav a');
    let activeSection: ActiveSection = null;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSection = section;
        }
    });
    links.forEach((link) => {
        link.classList.remove('text-jacaranda-500');
        if (activeSection && link.href.includes(activeSection.id)) {
            link.classList.add('text-jacaranda-500');
        }
    });
};
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
