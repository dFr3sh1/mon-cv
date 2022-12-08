
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("more");
    var btnText = document.getElementsByClassName("readMoreButton");

function readAllTheArticle(i) {
    if (dots[i].style.display === "none") {
        dots[i].style.display = "inline";
        btnText[i].innerHTML = "Savoir plus";
        moreText[i].style.display = "none";
    } else {
        dots[i].style.display = "none";
        btnText[i].innerHTML = "Lire moins";
        moreText[i].style.display = "inline";
    }
}


for (const i in btnText) {
    btnText[i].addEventListener("click", () =>readAllTheArticle(i));
}

