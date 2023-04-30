let otherLinks = document.querySelector(".mega-container");
let megaMenu = document.getElementById("mega");
console.log(megaMenu);
otherLinks.onclick = function () {
    megaMenu.classList.toggle("mega-flex");
};

//  start animation for website
const ele = document.querySelectorAll("body > *");
ele.forEach((ele) => {
    ele.classList.add("show");
});
console.log(ele);
const options = {
    root: null,
    rootMargin: "-140px 0px -100px 0px",
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        e.target.classList.toggle("show", e.isIntersecting);
    });
}, options);

ele.forEach((e) => {
    observer.observe(e);
});
//end  animation for website
