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
    var calcChoise = document.getElementById("calcChoiseContainer");
    var sk_renessans = document.getElementById("sk_renessansContainer");
    overlay.classList.remove("active");
    popup.classList.remove("active");
    calcChoise.classList.remove("active");
    sk_renessans.classList.remove("active");
    body.style.overflow = "visible";
    setTimeout(function() {
        overlay.style.display = "none";
        popup.style.display = "none";
        calcChoise.style.display = "none";
        sk_renessans.style.display = "none";
    }, 300);
}
function openCalcChoise() {
    var overlay = document.getElementById("overlay");
    var calcChoise = document.getElementById("calcChoiseContainer");
    overlay.style.display = "block";
    calcChoise.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        calcChoise.classList.add("active");
    }, 10);
}
function opensk_renessans() {
    var overlay = document.getElementById("overlay");
    var sk_renessans = document.getElementById("sk_renessansContainer");
    var calcChoise = document.getElementById("calcChoiseContainer");
    calcChoise.style.display = "none";
    overlay.style.display = "block";
    sk_renessans.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        sk_renessans.classList.add("active");
    }, 10);
}

function navigate(url) {
    window.location.href = url;
}