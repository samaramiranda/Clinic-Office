import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const input = document.querySelector("input")
const button = document.querySelector("button")

footer.innerHTML = `${footerContent()}`

const handleInput = () => {
  if(input.value.length == 100){
    input.disabled = true
  }
}

const handleButton = () => {
  localStorage.setItem("nome", input.value)
  location.href = "public/views/cadastro.html"
}

input.addEventListener("keydown", handleInput)
button.addEventListener("click", handleButton)

