const navLinks = document.querySelectorAll("header-text");

const sideBarElt = document.getElementById("sideBar");

function linkClicked(navLinks) {
  if (getComputedStyle(sideBarElt) = visible) {
    sideBarElt.style.visibility = "hidden"
  }
}