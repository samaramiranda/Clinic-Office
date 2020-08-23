import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const input = document.querySelector("input")
const button = document.querySelector("button")

footer.innerHTML = `${footerContent()}`

const handleInput = () => {
  if (input.value.length == 100) {
    input.disabled = true
  }
}

const handleButton = () => {
  if (input.value.trim() == "") {
    input.classList.add("validate-error")
  }
  
  const formError = document.querySelector(".validate-error")
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error")
      }
    })
  } else {
    localStorage.setItem("name", input.value)
    location.href = "public/views/cadastro.html"
  }
}

input.addEventListener("keydown", handleInput)
button.addEventListener("click", handleButton)

