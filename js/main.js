let input = document.querySelector(".input");
let btn = document.querySelector(".btn1");
let fondo = document.querySelector(".QR");

btn.addEventListener("click", () => {
  let logo = document.querySelector(".qrcode");
  logo.id = "logo";
  input.id = "ocultar";
  btn.id = "ocultar";
  obtenerQr();
  fondo.style.backgroundColor = "#4e80ee33";
  crearBotones();
});

function obtenerQr() {
  url = input.value;
  let qrcode = new QRCode(document.querySelector(".QR"), {
    text: url,
    correctLevel: QRCode.CorrectLevel.H, // Nivel de corrección de errores (L, M, Q, H)
  });

  let qrImg = document.querySelector(".QR img");
  if (qrImg) {
    qrImg.id = "miClase";
  }
}

function crearBotones() {
  let botones = document.createElement("div");
  fondo.appendChild(botones);
  url = input.value;
  let descargar = document.createElement("a");
  descargar.href = url;
  descargar.innerText = "descargar";
  botones.appendChild(descargar);
  let copiar = document.createElement("button");
  copiar.id = "btn3";
  copiar.innerText = "copiar";
  botones.appendChild(copiar);
}
