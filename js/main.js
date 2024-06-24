let input = document.querySelector(".input").value;
let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
  let input = document.querySelector(".input");
  let btn = document.querySelector(".btn1");
  let logo = document.querySelector(".qrcode");
  logo.id = "logo";
  input.id = "ocultar";
  btn.id = "ocultar";
});

let qrcode = new QRCode(document.querySelector(".QR"), {
  text: input,
  width: 128, // Ancho del código QR
  height: 128, // Alto del código QR
});

let codigo = document.querySelector(".QR");
