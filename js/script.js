async function cargarDemons() {
    const respuesta = await fetch("./js/data/demons.json");
    const demons = await respuesta.json();

    const lista = document.getElementById("demon-list");
    lista.innerHTML = "";

    demons.forEach(demon => {
        lista.innerHTML += `
        <div class="level">
            <div>
                <div class="rank">#${demon.position}</div>
                <h2>${demon.name}</h2>
                <p>Creador: ${demon.creator}</p>
                <p>Verificador: ${demon.verifier}</p>
                <p>${demon.difficulty}</p>
            </div>
            <a href="${demon.video}" target="_blank">
                <button>Ver video</button>
            </a>
        </div>
        `;
    });
}

cargarDemons();
