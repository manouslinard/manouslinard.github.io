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

// const sectionElements = document.querySelectorAll('.card');
const sectionCenter = document.querySelector('.section_center');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sectionCenter.classList.add('on-screen');
    } else {
      sectionCenter.classList.remove('on-screen');
    }
  });
});

observer.observe(sectionCenter);


// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//         }
//     });
// });

// const section = document.getElementById("skills");
// observer.observe(section);



// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('.show');
//         } else {
//             entry.target.classList.remove('.show');
//         }
//     })
// })

// const sectionElements = document.querySelectorAll('.card');
// sectionElements.forEach((el)=>observer.observe(el));