var boton = document.getElementById("submit");

boton.addEventListener("submit", function (event) {
    event.preventDefault();
    var nam = document.getElementById("name").value;
    var srn = document.getElementById("surname").value;
    var dob = document.getElementById("dob").value;
    var rs = document.getElementById("rs");

    console.log("Datos:" + nam + " " + srn + " " + dob);
    var data = "{nombre: " + nam + ", apellido: " + srn + ", nacimiento: " + dob + ",}";
    console.log("String:" + data);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            title: nam,
            body: srn,
            userId: dob,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => function () {
            rs.innerHTML(json);
            console.log(json);
        }
        );
}
);


