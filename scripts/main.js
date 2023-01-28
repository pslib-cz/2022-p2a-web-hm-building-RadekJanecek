window.onclick = (event) => {
    if (event.target.matches('.menu, .menu > *')) {
        document.querySelector("nav menu").classList.toggle("active");
    } else {
        document.querySelector("nav menu").classList.remove("active");
    }
}