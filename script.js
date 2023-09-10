let response = "";
//Al cargar contenido DOM
document.addEventListener("DOMContentLoaded", () => {
  //Botón
  let boton = document.getElementById("submit");
  let rs = document.getElementById("rs");
  rs.innerHTML = "";
  //En click
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    //Valores
    let nam = document.getElementById("name");
    let srn = document.getElementById("surname");
    let dob = document.getElementById("dob");
    let data =
      "{nombre: '" +
      nam.value +
      "', apellido: '" +
      srn.value +
      "', nacimiento: '" +
      dob.value +
      "'}";
    let string = JSON.stringify(data);

    console.log(
      "Datos ingresados: " + nam.value + " " + srn.value + " " + dob.value
    );
    console.log("String generado: " + data);
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify({
        nombre: nam.value,
        apellido: srn.value,
        nacimiento: dob.value
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        response += json;
        console.log(json);
        rs.innerHTML =
          '<div class="alert alert-success"><b class="v">✔</b> Enviado</div><br><div class="alert alert-secondary"><b class="g">Consola ≥</b> '+JSON.stringify(json)+'</div><br><div class="alert alert-success"><b class="v">✔</b> '+JSON.stringify(json.id)+'</div>';
      });
  });
});
