let input = document.querySelector(".input").value;
let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
  let input = document.querySelector(".input");
  let btn = document.querySelector(".btn1");
  let logo = document.querySelector(".qrcode");
  logo.id = "logo";
  input.id = "ocultar";
  btn.id = "ocultar";
  let qrcode = new QRCode(document.querySelector(".QR"), {
    text: input,
    width: 200, // Ancho del código QR
    height: 200, // Alto del código QR
    correctLevel: QRCode.CorrectLevel.H, // Nivel de corrección de errores (L, M, Q, H)
  });
  setTimeout(function () {
    let qrImg = document.querySelector(".QR img");

    if (qrImg) {
      qrImg.id = "miClase";
    }
  }, 200);
});
