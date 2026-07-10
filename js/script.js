async function cargarDemons() {
    const respuesta = await fetch("data/demons.json");
    const demons = await respuesta.json();

    console.log(demons);
}

cargarDemons();
