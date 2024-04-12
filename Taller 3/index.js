const validarNombre = () => {
  let nombre = document.getElementById("nombre").value;
  console.log(nombre);
  let p = document.getElementById("errorNombre");
  let formato = /[a-zA-Z]+$/;
  if (nombre === "") {
    p.style.display = "block";
    p.style.color = "red";
    p.innerHTML = "El elemento no puede estar vacio";
  } else {
    let val = formato.test(nombre);
    if (!val) {
      p.style.display = "block";
      p.style.color = "red";
      p.innerHTML = "Ingrese caracteres validos";
    } else {
      p.style.display = "none";
    }
  }
};

function validarTelefono() {
  let telefono = document.getElementById("telefono").value;
  console.log(telefono);
  let p = document.getElementById("errorTelefono");
  let formato = /3[0-9]{7}/;
  if (telefono === "") {
    p.style.display = "block";
    p.style.color = "red";
    p.innerHTML = "El elemento no puede estar vacio";
  } else {
    let val = formato.test(telefono);
    if (!val) {
      p.style.display = "block";
      p.style.color = "red";
      p.innerHTML = "Ingrese el formato valido";
    } else {
      p.style.display = "none";
    }
  }
}

function enviarFormulario() {
  console.log(`Enviando Formulario`);
}

document.getElementById("btnEnviar").addEventListener("click", () => {
  validarNombre();
  validarTelefono();
});
