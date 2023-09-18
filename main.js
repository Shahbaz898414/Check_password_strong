const pas = document.querySelector(".int");
const out = document.querySelector(".output");

let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

pas.addEventListener("change", () => {
  const sa = pas.value;

  if (sa === "") {
    out.innerHTML = "";
  } else if (sa.length < 8) {
    out.innerHTML = "Password must be at least 8 characters";
  } else if (sa.length > 12) {
    out.innerHTML = "Password must less or equal to 12";
  } else {
    if (sa.includes(str) === false) {
      out.innerHTML =
        "Password must include number, uppercase ,lowercase and ans special charactors";
    } else if (sa.includes(str) === true) {
      out.innerHTML = "Strong password";
    }
  }
});
