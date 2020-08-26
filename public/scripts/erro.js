import footerContent from "./modules/footer.js"

const footer = document.querySelector("footer")
const body = document.querySelector("body")
const btnReturn = document.querySelector("#return")

footer.innerHTML = `${footerContent()}`

const returnIndex = () => {
  localStorage.removeItem('name')
  body.classList.add("body-hide")
}

body.addEventListener("animationstart", event => {
  if (event.animationName == "down") {
    document.querySelector("body").style.overflow = "hidden"
  }
})

body.addEventListener("animationend", event => {
  if (event.animationName == "down") {
    location.href = "../views/index.html"
    body.style.display = "none"
    document.querySelector("body").style.overflow = "none"
  }
})

btnReturn.addEventListener("click", returnIndex)