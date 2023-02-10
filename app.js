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

let sections = document.querySelectorAll('.section');

sections.forEach(section => {
  let options = {
    root: null,
    threshold: 0.1
  };

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() {
            entry.target.classList.add('show');
        }, 250);
      } else {
        section.classList.remove('show');
      }
    });
  }, options);

  observer.observe(section);
});



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