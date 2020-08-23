import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const emailConfirm = document.querySelector("#emailConfirm")
const button = document.querySelector("button")
const state = document.querySelector("#state")
const inputs = [...document.querySelectorAll("input")]

footer.innerHTML = `${footerContent()}`
name.value = localStorage.getItem("name")

const validateEmail = (event) => {
  const clientEmail = event.target
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const emailValue = clientEmail.value
  if (!emailValue.match(regexEmail)) {
    clientEmail.parentNode.classList.remove("sucess")
    clientEmail.parentNode.classList.add("error")
    emailConfirm.disabled = true
    button.disabled=true
  } else {
    clientEmail.parentNode.classList.remove("error")
    clientEmail.parentNode.classList.add("sucess")
    emailConfirm.disabled = false
    button.disabled=false
  }
}

const confirmEmail = (event) => {
  const clientEmailConfirm = event.target
  if (clientEmailConfirm.value === email.value) {
    clientEmailConfirm.parentNode.classList.remove("error")
    clientEmailConfirm.parentNode.classList.add("sucess")
    email.parentNode.classList.add("sucess")
    button.disabled=false
  } else {
    clientEmailConfirm.parentNode.classList.remove("sucess")
    // email.parentNode.classList.remove("sucess")
    clientEmailConfirm.parentNode.classList.add("error")
    button.disabled=true
  }
}

const validateFields = (event) => {
  const selectedField = event.target
  if (selectedField.value === "") {
    return selectedField.parentNode.classList.add("error")
  } else if (selectedField.id === "email") {
    return validateEmail(event)
  } else if (selectedField.id === "emailConfirm"){
    return confirmEmail(event)
  }
  return selectedField.parentNode.classList.remove("error")
}

const phoneMask = () => {
  if (phone.value.length == 11) {
    phone.setAttribute("type", "text")
    phone.value = phone.value.replace(/^(\d{2})(\d)(\d{4})(\d{4})/g, "($1) $2 $3-$4");
  }
}

inputs.forEach(elem => {
  elem.addEventListener("focusout", validateFields)
})
phone.addEventListener("keyup", phoneMask)

