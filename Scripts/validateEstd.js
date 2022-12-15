form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFieldsForm() === -1) {
    modalAlerta("Información Validada");
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
  //información personal
  fechaN: false,
  edad: false,
  name: false,
  gener: false,
  code: false,
  tipodoc: false,
  numind: false,
  prog: false,
  semestre: false,
  prom: false
}



///////// INFORMACIÓN PERSONAL
const datebornig = document.getElementById("fn");
datebornig.addEventListener('change', (e) => {
  validFields.fechaN = datebornig.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})

const age = document.getElementById("age");
age.addEventListener('change', (e) => {
  const inputage = e.target.value;
  const patroage = /^[0-9]{2}$/gm;
  validFields.edad = inputage.match(patroage) ? true : false;
  console.log(Object.values(validFields));
})

const name = document.getElementById("name");
name.addEventListener('change', (e) => {
  const inputnm = e.target.value;
  const patronm = /([a-zA-Z]{3,})$/g;
  validFields.name = inputnm.match(patronm) ? true : false;
  console.log(Object.values(validFields));
})

const gener = document.getElementById("gener");
gener.addEventListener('change', (e) => {
  validFields.gener = gener.selectedIndex > 0 ? true : false;
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
  validFields.prog = prog.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})

const semestre = document.getElementById("semestre");
semestre.addEventListener('change', (e) => {
  validFields.semestre = semestre.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})

const prom = document.getElementById("prom");
prom.addEventListener('change', (e) => {
  const inputprm = e.target.value;
  const patroprm = /^[0-9]{1,}$/gm;
  validFields.prom = inputprm.match(patroprm) ? true : false;
  console.log(Object.values(validFields));
})

///////// INFORMACIÓN DE CONTACTO