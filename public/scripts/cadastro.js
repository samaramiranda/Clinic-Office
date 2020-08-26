import footerContent from "./module-footer.js"

const footer = document.querySelector("footer")
const name = document.querySelector('input[name="name"]')
const phone = document.querySelector('input[name="phone"]')
const emailConfirm = document.querySelector('input[name="emailConfirm"]')
const state = document.querySelector('select[name="state"]')
const button = document.querySelector("button")
const inputs = [...document.querySelectorAll("input")]
const selects = [...document.querySelectorAll("select")]

footer.innerHTML = `${footerContent()}`
name.value = localStorage.getItem("name")

const updateName = () => {
  const newName = document.querySelector('input[name="name"]')
  localStorage.setItem("name", newName.value)
} 

const validateEmail = event => {
  const clientEmail = event.target
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (clientEmail.value.match(regexEmail)) {
    clientEmail.parentNode.classList.remove("error")
    clientEmail.parentNode.classList.add("sucess")
    emailConfirm.disabled = false
    button.disabled = false
  } else {
    clientEmail.parentNode.classList.remove("sucess")
    clientEmail.parentNode.classList.add("error")
    emailConfirm.disabled = true
    button.disabled = true
  }
}

const confirmEmail = event => {
  const email = document.querySelector('input[name="email"]')
  if (emailConfirm.value === email.value) {
    emailConfirm.parentNode.classList.remove("error")
    emailConfirm.parentNode.classList.add("sucess")
    button.disabled = false
  } else {
    emailConfirm.parentNode.classList.remove("sucess")
    emailConfirm.parentNode.classList.add("error")
    button.disabled = true
  }
}

const phoneMask = () => {
  if (phone.value.length === 11) {
    phone.setAttribute("type", "text")
    phone.value = phone.value.replace(/^(\d{2})(\d)(\d{4})(\d{4})/g, "($1) $2 $3-$4");
  }
}

const populateUFs = (() => {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => {
      return res.json()
    })
    .then(states => {
      for (const elemState of states) {
        state.innerHTML += `<option value="${elemState.id}">${elemState.nome}</option>`
      }
    })
})()

const getCities = event => {
  const city = document.querySelector('select[name="city"]')
  const stateName = document.querySelector('input[name="uf"]')
  const stateValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateName.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`

  city.innerHTML = '<option value="">Cidade</option>'

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(cities => {
      for (const elemCity of cities) {
        city.innerHTML += `<option value="${elemCity.nome}">${elemCity.nome}</option>`
      }
      city.disabled = false
    })
}

const validateFields = event => {
  const selectedField = event.target
  if (selectedField.value.trim() === "") {
    return selectedField.parentNode.classList.add("error")
  } else if (selectedField.name === "email") {
    return validateEmail(event)
  } else if (selectedField.name === "emailConfirm") {
    return confirmEmail(event)
  }
  return selectedField.parentNode.classList.remove("error")
}

inputs.forEach(elem => {
  elem.addEventListener("focusout", validateFields)
})
selects.forEach(elem => {
  elem.addEventListener("focusout", validateFields)
})

name.addEventListener("change", updateName)
phone.addEventListener("keyup", phoneMask)
state.addEventListener("change", getCities)

