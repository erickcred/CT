let return_top = document.querySelector(".icon-top");

document.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        return_top.classList.remove("disabled");
    } else {
        return_top.classList.add("disabled");
    }
});

console.log(window.scrollY)