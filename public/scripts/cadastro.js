import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const emailConfirm = document.querySelector("#emailConfirm")
const button = document.querySelector("button")
const inputs = [...document.querySelectorAll("input")]

footer.innerHTML = `${footerContent()}`
name.value = localStorage.getItem("name")


const validateEmail = (event) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const emailValue = event.target.value
  if (!emailValue.match(regexEmail)) {
    event.target.parentNode.classList.remove("sucess")
    event.target.parentNode.classList.add("error")
    emailConfirm.disabled = true
    button.disabled=true
  } else {
    event.target.parentNode.classList.remove("error")
    event.target.parentNode.classList.add("sucess")
    emailConfirm.disabled = false
    button.disabled=false
  }
  return true
}

const confirmEmail = (event) => {
  if (event.target.value === email.value) {
    event.target.parentNode.classList.remove("error")
    event.target.parentNode.classList.add("sucess")
    email.parentNode.classList.add("sucess")
    button.disabled=false
  } else {
    event.target.parentNode.classList.remove("sucess")
    email.parentNode.classList.remove("sucess")
    event.target.parentNode.classList.add("error")
    button.disabled=true
  }
  return true
}

const validateFields = (event) => {
  if (event.target.value === "") {
    return event.target.parentNode.classList.add("error")
  } else if (event.target.id === "email") {
    return validateEmail(event)
  } else if (event.target.id === "emailConfirm"){
    return confirmEmail(event)
  }
  return event.target.parentNode.classList.remove("error")
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

