import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const input = document.querySelector("input")
const button = document.querySelector("button")

footer.innerHTML = `${footerContent()}`

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
    location.href = "../views/cadastro.html"
  }
}

button.addEventListener("click", handleButton)

