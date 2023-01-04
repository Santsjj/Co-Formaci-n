const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Información guardada");
  } else {
    modalAlerta("Error");
  }

});

const validFieldsForm = () => {
  const values = Object.values(validFields);
  let response = values.findIndex(e => e === false);
  return response;
}

//Objeto de Validación

let validFields = {
  //INFORMACIÓN PERSONAL
  fechaN: false,
  edad: false,
  name: false,
  gener: false,
  code: false,
  tipodoc: false,
  numind: false,
  prog: false,
  semestre: false,
  prom: false,
  //INFORMACIÓN DE CONTACTO
  emaili: false,
  emailp: false,
  drc: false,
  telefc: false,
  teleff: false
}



///////// INFORMACIÓN PERSONAL
const datebornig = document.getElementById("fn");
datebornig.addEventListener('change', (e) => {
  validFields.fechaN = datebornig.constructor ? true : false;
  console.log(Object.values(validFields));
})

const age = document.getElementById("age");
age.addEventListener('change', (e) => {
  const inputage = e.target.value;
  const patroage = /^[0-9]{2}$/gm;
  validFields.edad = inputage.match(patroage) ? true : false;
  console.log(Object.values(validFields));
})

const namestd = document.getElementById("name");
namestd.addEventListener('change', (e) => {
  const inputnm = e.target.value;
  const patronm = /([a-zA-Z]{3,})$/g;
  validFields.name = inputnm.match(patronm) ? true : false;
  console.log(Object.values(validFields));
})

const gener = document.getElementById("gener");
gener.addEventListener('change', (e) => {
  validFields.gener = gener.checked === true ? true : false;
  console.log(Object.values(validFields));
})

const code = document.getElementById("code");
code.addEventListener('change', (e) => {
  const inputcd = e.target.value;
  const patrocd = /^[0-9]{6,}$/gm;
  validFields.code = inputcd.match(patrocd) ? true : false;
  console.log(Object.values(validFields));
})

const tipodoc = document.getElementById("td");
tipodoc.addEventListener('change', (e) => {
  validFields.tipodoc = tipodoc.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})

const numind = document.getElementById("ni");
numind.addEventListener('change', (e) => {
  const inputni = e.target.value;
  const patroni = /^[0-9]{7,10}$/gm;
  validFields.numind = inputni.match(patroni) ? true : false;
  console.log(Object.values(validFields));
})

const prog = document.getElementById("prog");
prog.addEventListener('change', (e) => {
  validFields.prog = prog.checked === true ? true : false;
  console.log(Object.values(validFields));
})

const semestre = document.getElementById("semestre");
semestre.addEventListener('change', (e) => {
  validFields.semestre = semestre.checked === true ? true : false;
  console.log(Object.values(validFields));
})

const prom = document.getElementById("prom");
prom.addEventListener('change', (e) => {
  const inputprm = e.target.value;
  const patroprm = /^[a-z0-9]{1,}$/gm;
  validFields.prom = inputprm.match(patroprm) ? true : false;
  console.log(Object.values(validFields));
})



///////// INFORMACIÓN DE CONTACTO
const emailp = document.getElementById("emailp");
emailp.addEventListener('change', function(e) {
  const inputEmailp = e.target.value;
  const patronEmailp = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4})/gm
  validFields.emailp = inputEmailp.match(patronEmailp) ? true : false;
})

const emaili = document.getElementById("emaili");
emaili.addEventListener('change', function(e) {
  const inputEmail = e.target.value;
  const patronEmail = /^[a-zA-Z.]+@(u)(n)(i)(e)(m)(p)(r)(e)(s)(a)(r)(i)(a)(l)\.(e)(d)(u)\.(c)(o)$/gm;
  validFields.emaili = inputEmail.match(patronEmail) ? true : false;
  console.log(Object.values(validFields));
  if (validFields.emaili === false) {
    modalAlerta("El correo no es institucional");
  }

});

const dirrecionr = document.getElementById("dirrecionr");
dirrecionr.addEventListener('change', function(e) {
  const inputdrc = e.target.value;
  const patrondrc = /[a-zA-Z0-9-_#]/gm;
  validFields.drc = inputdrc.match(patrondrc) ? true : false;
  console.log(Object.values(validFields));
})

const telefc = document.getElementById("telefc");
telefc.addEventListener('change', function(e) {
  const inputtlf = e.target.value;
  const patrontlf = /[0-9]{10}/gm;
  validFields.telefc = inputtlf.match(patrontlf) ? true : false;
  console.log(Object.values(validFields));
})

const teleff = document.getElementById("teleff");
teleff.addEventListener('change', function(e) {
  const inputtlff = e.target.value;
  const patrontlff = /[0-9]{6,}/gm;
  validFields.teleff = inputtlff.match(patrontlff) ? true : false;
  console.log(Object.values(validFields));
})