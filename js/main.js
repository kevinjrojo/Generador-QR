let input = document.querySelector(".input");
let btn = document.querySelector(".btn1");
let fondo = document.querySelector(".QR");
let form = document.querySelector(".formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  let logo = document.querySelector(".qrcode");
  logo.id = "logo";
  input.id = "ocultar";
  btn.id = "ocultar";
  url = input.value;
  let qrcode = new QRCode(document.querySelector(".QR"), {
    text: url,
    correctLevel: QRCode.CorrectLevel.H, // Nivel de corrección de errores (L, M, Q, H)
  });
  let qrImg = document.querySelector(".QR img");
  if (qrImg) {
    qrImg.id = "miClase";
  }

  fondo.style.backgroundColor = "#4e80ee33";
  crearBotones();
});

function obtenerQr() {}

function crearBotones() {
  let qrImg = document.querySelector(".QR img");

  let botones = document.createElement("div");
  botones.classList.add("funciones");
  fondo.appendChild(botones);
  let descargar = document.createElement("a");
  setTimeout(() => {
    descargar.href = qrImg.src;
    descargar.download = "qrcode.jpg";
  }, 100);
  descargar.classList.add("btn2");
  descargar.innerText = "Download ↓";
  botones.appendChild(descargar);

  let copiar = document.createElement("a");
  copiar.classList.add("btn3");
  copiar.innerText = "Share 🔗";
  copiar.addEventListener("click", () => {
    navigator.clipboard
      .writeText(qrImg.src)
      .then(() => {
        alert("URL copiada al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar la URL: ", err);
      });
  });
  botones.appendChild(copiar);
}
