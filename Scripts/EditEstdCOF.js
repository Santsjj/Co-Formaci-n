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
  //EMPRESA COFORMADORA
  estado: false,
  nameemp: false,
  infoe: false,
  nit: false,
  codeV: false,
  //CONTACTO EMPRESA
  namecon: false,
  cargocon: false,
  correo1: false,
  correo2: false,
  celu: false,
  telf: false,
  //CONTACTO TUTOR
  namettr: false,
  cargottr: false,
  emailttr: false,
  celuttr: false,
  //TIPO DE VINCULACIÓN
  TipoVin: false,
  SosSueld: false,
  cantsld: false,
  prdpago: false,
  horario: false,
  frmPgo: false,
  //DOCENTE DE ACOMPAÑAMIENTO
  namedoce: false,
  docint: false,
  emaildoce: false,
  celdoce: false,
  //PRACTICAS
  isemestre: false,
  fechaIn: false,
  fechaFin: false
}
//EMPRESA COFORMADORA
const estado = document.getElementById("estado");
estado.addEventListener('change', (e) => {
  validFields.estado = estado.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})
const nameemp = document.getElementById("name_empresa");
nameemp.addEventListener('change', (e) => {
  const inputnme = e.target.value;
  const patronme = /([a-zA-Z]{3,})$/g;
  validFields.nameemp = inputnme.match(patronme) ? true : false;
  console.log(Object.values(validFields));
})
const infoe = document.getElementById("info_empresa");
infoe.addEventListener('change', (e) => {
  const inputinfo = e.target.value;
  const patroninf = /([a-zA-Z0-9]{30,})$/g;
  validFields.infoe = inputinfo.match(patroninf) ? true : false;
  console.log(Object.values(validFields));
})
const nit = document.getElementById("nit_empresa");
nit.addEventListener('change', (e) => {
  const inputnit = e.target.value;
  const patronnit = /^[0-9]{9,}$/gm
  validFields.nit = inputnit.match(patronnit) ? true : false;
  console.log(Object.values(validFields));
})
const codeV = document.getElementById("code_vrfcn");
codeV.addEventListener('change', (e) => {
  const inputcodeV = e.target.value;
  const patroncodeV = /^[0-9]{1,}$/gm
  validFields.codeV = inputcodeV.match(patroncodeV) ? true : false;
  console.log(Object.values(validFields));
})
//CONTACTO EMPRESA
const namecon = document.getElementById("name_contacto");
namecon.addEventListener('change', (e) => {
  const inputnmec = e.target.value;
  const patronmec = /([a-zA-Z]{3,})$/g;
  validFields.namecon = inputnmec.match(patronmec) ? true : false;
  console.log(Object.values(validFields));
})
const cargocon = document.getElementById("cargo_contacto");
cargocon.addEventListener('change', (e) => {
  const inputcrg = e.target.value;
  const patroncrg = /([a-zA-Z]{3,})$/g;
  validFields.cargocon = inputcrg.match(patroncrg) ? true : false;
  console.log(Object.values(validFields));
})
const correo1 = document.getElementById("correo1_contacto");
correo1.addEventListener('change', (e) => {
  const inputEmail1 = e.target.value;
  const patronEmail1 = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4})/gm
  validFields.correo1 = inputEmail1.match(patronEmail1) ? true : false;
})
const correo2 = document.getElementById("correo2_contacto");
correo2.addEventListener('change', (e) => {
  const inputEmail2 = e.target.value;
  const patronEmail2 = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4})/gm
  validFields.correo2 = inputEmail2.match(patronEmail2) ? true : false;
})
const celu = document.getElementById("celular_contacto");
celu.addEventListener('change', (e) => {
  const inputcel = e.target.value;
  const patroncel = /[0-9]{10}/gm;
  validFields.celu = inputcel.match(patroncel) ? true : false;
  console.log(Object.values(validFields));
})
const telf = document.getElementById("telef_contacto");
telf.addEventListener('change', (e) => {
  const inputtlff = e.target.value;
  const patrontlff = /[0-9]{6,}/gm;
  validFields.telf = inputtlff.match(patrontlff) ? true : false;
  console.log(Object.values(validFields));
})
//TUTOR ENCARGADO
const namettr = document.getElementById("name_tutor");
namettr.addEventListener('change', (e) => {
  const inputntrr = e.target.value;
  const patronntrr = /([a-zA-Z]{3,})$/g;
  validFields.namettr = inputntrr.match(patronntrr) ? true : false;
  console.log(Object.values(validFields));
})
const cargottr = document.getElementById("cargo_tutor");
cargottr.addEventListener('change', (e) => {
  const inputcrgt = e.target.value;
  const patroncrgt = /([a-zA-Z]{3,})$/g;
  validFields.cargottr = inputcrgt.match(patroncrgt) ? true : false;
  console.log(Object.values(validFields));
})
const emailttr = document.getElementById("correo_tutor");
emailttr.addEventListener('change', (e) => {
  const inputeml = e.target.value;
  const patroneml = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4})/gm
  validFields.emailttr = inputeml.match(patroneml) ? true : false;
})
const celuttr = document.getElementById("celular_tutor");
celuttr.addEventListener('change', (e) => {
  const inputcelttr = e.target.value;
  const patroncelttr = /[0-9]{10}/gm;
  validFields.celuttr = inputcelttr.match(patroncelttr) ? true : false;
  console.log(Object.values(validFields));
})
//TIPO DE VINCULACIÓN
const TipoVin1 = document.getElementById("TipoVin1");
TipoVin1.addEventListener('change', (e) => {
  validFields.TipoVin = TipoVin1.checked === true ? true : false;
  console.log(Object.values(validFields));
})
const TipoVin2 = document.getElementById("TipoVin2");
TipoVin2.addEventListener('change', (e) => {
  validFields.TipoVin = TipoVin2.checked === true ? true : false;
  console.log(Object.values(validFields));
})
const SosSueld1 = document.getElementById("sos_suel1");
SosSueld1.addEventListener('change', (e) => {
  validFields.SosSueld = SosSueld1.checked === true ? true : false;
  console.log(Object.values(validFields));
})
const SosSueld2 = document.getElementById("sos_suel2");
SosSueld2.addEventListener('change', (e) => {
  validFields.SosSueld = SosSueld2.checked === true ? true : false;
  console.log(Object.values(validFields));
})
const cantsld = document.getElementById("cantsld");
cantsld.addEventListener('change', (e) => {
  const inputcnt = e.target.value;
  const patroncnt = /([0-9]{5,})$/g;
  validFields.cantsld = inputcnt.match(patroncnt) ? true : false;
  console.log(Object.values(validFields));
})
const prdpago = document.getElementById("prd_pago");
prdpago.addEventListener('change', (e) => {
  const inputprd = e.target.value;
  const patronprd = /([a-zA-Z0-9]{5,})$/g;
  validFields.prdpago = inputprd.match(patronprd) ? true : false;
  console.log(Object.values(validFields));
})
const horario = document.getElementById("horario");
horario.addEventListener('change', (e) => {
  const inputhro = e.target.value;
  const patronhro = /([a-zA-Z0-9]{5,})$/g;
  validFields.horario = inputhro.match(patronhro) ? true : false;
  console.log(Object.values(validFields));
})
const frmPgo = document.getElementById("frm_pago");
frmPgo.addEventListener('change', (e) => {
  const inputfrmp = e.target.value;
  const patronfrmp = /([a-zA-Z0-9]{6,})$/g;
  validFields.frmPgo = inputfrmp.match(patronfrmp) ? true : false;
  console.log(Object.values(validFields));
})
//DOCENTE DE ACOMPAÑAMIENTO 
const namedoce = document.getElementById("name_docente");
namedoce.addEventListener('change', (e) => {
  const inputnmedc = e.target.value;
  const patronmedc = /([a-zA-Z]{3,})$/g;
  validFields.namedoce = inputnmedc.match(patronmedc) ? true : false;
  console.log(Object.values(validFields));
})
const docint = document.getElementById("docint_docente");
docint.addEventListener('change', (e) => {
  const inputnint = e.target.value;
  const patronint = /^[0-9]{7,10}$/gm;
  validFields.docint = inputnint.match(patronint) ? true : false;
  console.log(Object.values(validFields));
})
const emaildoce = document.getElementById("email_docente");
emaildoce.addEventListener('change', (e) => {
  const inputEmaildc = e.target.value;
  const patronEmaildc = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4})/gm
  validFields.emaildoce = inputEmaildc.match(patronEmaildc) ? true : false;
})
const celdoce = document.getElementById("celu_docente");
celdoce.addEventListener('change', function(e) {
  const inputceldc = e.target.value;
  const patronceldc = /[0-9]{10}/gm;
  validFields.celdoce = inputceldc.match(patronceldc) ? true : false;
  console.log(Object.values(validFields));
})
//PRACTICAS
const isemestre = document.getElementById("isemestre");
isemestre.addEventListener('change', (e) => {
  validFields.isemestre = isemestre.selectedIndex > 0 ? true : false;
  console.log(Object.values(validFields));
})
const fechaIn = document.getElementById("fecha_inicio");
fechaIn.addEventListener('change', (e) => {
  validFields.fechaIn = fechaIn.constructor ? true : false;
  console.log(Object.values(validFields));
})
const fechaFin = document.getElementById("fecha_fin");
fechaFin.addEventListener('change', (e) => {
  validFields.fechaFin = fechaFin.constructor ? true : false;
  console.log(Object.values(validFields));
})