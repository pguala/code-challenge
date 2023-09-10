document.addEventListener("DOMContentLoaded", () => {
  var boton = document.getElementById("submit");
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    var nam = document.getElementById("name");
    var srn = document.getElementById("surname");
    var dob = document.getElementById("dob");
    var rs = document.getElementById("rs");

    console.log("Datos:" + nam.value + " " + srn.value + " " + dob.value);
    var data =
      "{nombre: " +
      nam.value +
      ", apellido: " +
      srn.value +
      ", nacimiento: " +
      dob.value +
      ",}";
    console.log("String:" + data);
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify({
        title: nam,
        body: srn,
        userId: dob,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Enviado");
        console.log(json);
        rs.innerHTML=json;
      });
  });
});
