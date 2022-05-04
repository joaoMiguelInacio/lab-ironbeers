if (window.location.pathname === "/"){
    document.getElementById("nav-home").classList.add("current-page");
}

if (window.location.pathname === "/beers"){
    document.getElementById("nav-beers").classList.add("current-page");
    document.getElementById("footer").classList.add("hidden");
}

if (window.location.pathname === "/random-beer"){
    document.getElementById("nav-random-beer").classList.add("current-page");
}