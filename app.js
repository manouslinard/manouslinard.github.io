function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    const offset = 100;
    section.scrollIntoView({
        block: "center",
        behavior: "smooth",
        inline: "nearest",
        offsetTop: -offset,
    });
}

const sections = document.querySelectorAll('.section');
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});
