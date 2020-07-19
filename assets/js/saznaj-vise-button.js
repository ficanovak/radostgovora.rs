function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Saznaj više";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Zatvori";
    moreText.style.display = "inline";
  }
}

function myFunctions() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("mores");
  var btnText = document.getElementById("myBtns");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Saznaj više";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Zatvori";
    moreText.style.display = "inline";
  }
}