//Validación
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
  Empnom: false,
  Enit: false
}
const aNombreEmp = document.getElementById("aNombreEmp");
aNombreEmp.addEventListener('change', (e) => {
  const inputEnm = e.target.value;
  const patroEnm = /([a-zA-Z]{6,})$/g;
  validFields.Empnom = inputEnm.match(patroEnm) ? true : false;
  console.log(Object.values(validFields));
})
const aNitEmp = document.getElementById("aNitEmp");
aNitEmp.addEventListener('change', (e) => {
  const inputEnit = e.target.value;
  const patronEnit = /^[0-9]{9,}$/gm
  validFields.Enit = inputEnit.match(patronEnit) ? true : false;
  console.log(Object.values(validFields));
})
