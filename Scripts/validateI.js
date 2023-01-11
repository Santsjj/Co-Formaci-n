'use strict';
const email = document.querySelector("#iMail");
const pass = document.querySelector("#iPass");
const form = document.querySelector("#form");
const rol = document.querySelector("#iRol");

form, addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Informacion Validada");
    if (rol.value === "1") {
      console.log("1");
      window.location.href = "../../CMain/Estudiante.html";
    } else if (rol.value === "2") {
      console.log("2");
      window.location.href = "../../CMain/ListaEmpresasDR.html";
    } else if (rol.value === "3") {
      window.location.href = "../../CMain/GestionA.html";
    }
  }
  else {
    modalAlerta("Error");
  }

})

const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}

//Objeto de Validación

let validFields = {
  email: false,
  pass: false

}

email.addEventListener('change', function(e) {
  const inputEmail = e.target.value;
  const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
  validFields.email = inputEmail.match(patronEmail) ? true : false;
  console.log(Object.values(validFields));
  if (validFields.email === false) {
    modalAlerta("El correo no es institucional");
  }

});
pass.addEventListener('change', (event) => {
  const inputPass = event.target.value;
  const patronPass = /([a-zA-Z0-9]{8,})$/g;
  validFields.pass = inputPass.match(patronPass) ? true : false;
  console.log(Object.values(validFields));
});

function modalAlerta(cadena) {
  const alert = document.createElement("div");
  const texto = document.createElement("p");
  texto.setAttribute("Class", "textAlerta");
  alert.setAttribute("id", "alerta");
  alert.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cadena}</strong>`;
  alert.appendChild(texto);
  document.body.appendChild(alert);
  alert.onclick = function() {
    document.getElementById("alerta").remove();
  }
}
function PassV() {
  var x = document.getElementById("iPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function Redir() {
  if ((email === "true")) {
    console.log("1");
    window.location.href = "../../Co-Formaci-n-main/CMain/ListaEstudiantes.html";
  } else {

  }

}
document.querySelector('.form2 span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#iPass');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = '';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'iPass';
    }
});