import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const form = document.querySelector("form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const emailConfirm = document.querySelector("#emailConfirm")
const clinicName = document.querySelector("#clinicName")
const state = document.querySelector("#state")
const city = document.querySelector("#city")
const plan = document.querySelector("#plan")
const button = document.querySelector("button")
const inputs = [...document.querySelectorAll("input")]

footer.innerHTML = `${footerContent()}`
name.value = localStorage.getItem("name")


const validateFields = (event) => {
  if (event.target.value === "") {
    event.target.parentNode.classList.add("error")
  }else {
    event.target.parentNode.classList.remove("error")
  }
  return
}

const validateEmail = (event) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const emailValue = event.target.value
  if(!emailValue.match(regexEmail)){
    event.target.parentNode.classList.remove("sucess")
    event.target.parentNode.classList.add("error")
    emailConfirm.disabled = true
  }else {
    event.target.parentNode.classList.remove("error")
    event.target.parentNode.classList.add("sucess")
    emailConfirm.disabled = false
  }
  return
}

const confirmEmail = (event) => {
  if (event.target.value === email.value) {
    event.target.parentNode.classList.remove("error")
    event.target.parentNode.classList.add("sucess")
    email.parentNode.classList.add("sucess")
  } else {
    event.target.parentNode.classList.remove("sucess")
    email.parentNode.classList.remove("sucess")
    event.target.parentNode.classList.add("error")
  }
}

const phoneMask = () => {
  if (phone.value.length == 11) {
    phone.setAttribute("type", "text")
    phone.value = phone.value.replace(/^(\d{2})(\d)(\d{4})(\d{4})/g, "($1) $2 $3-$4");
  }
  return
}


email.addEventListener("focusout", validateEmail)
emailConfirm.addEventListener("focusout", confirmEmail)
phone.addEventListener("keyup", phoneMask)

inputs.forEach(elem => {
  elem.addEventListener("focusout", validateFields)
})