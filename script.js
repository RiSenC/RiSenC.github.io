function openPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popupContainer");
    overlay.style.display = "block";
    popup.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        popup.classList.add("active");
    }, 10);
}

function closePopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popupContainer");
    var calc = document.getElementById("calcContainer");
    overlay.classList.remove("active");
    popup.classList.remove("active");
    calc.classList.remove("active");
    body.style.overflow = "visible";
    setTimeout(function() {
        overlay.style.display = "none";
        popup.style.display = "none";
        calc.style.display = "none";
    }, 300);
}

function openCalc() {
    var overlay = document.getElementById("overlay");
    var calc = document.getElementById("calcContainer");
    overlay.style.display = "block";
    calc.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        calc.classList.add("active");
    }, 10);
}

function navigate(url) {
    window.location.href = url;
}