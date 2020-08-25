import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const btnReturn = document.querySelector("#return")

footer.innerHTML = `${footerContent()}`

const returnIndex = () => {
  localStorage.removeItem('name')
  location.href = "../../index.html"
}

btnReturn.addEventListener("click", returnIndex)