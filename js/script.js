async function cargarDemons() {
    const respuesta = await fetch("./js/data/demons.json");
    const demons = await respuesta.json();

    const lista = document.getElementById("demon-list");
    lista.innerHTML = "";

    demons.forEach(demon => {
        lista.innerHTML += `
        <div class="level">
            <img src="${demon.thumbnail}" alt="${demon.name}" class="thumbnail">

            <div class="info">
                <div class="rank">#${demon.position}</div>
                <h2>${demon.name}</h2>
                <p>Creador: ${demon.creator}</p>
                <p>Verificador: ${demon.verifier}</p>
                <p>${demon.difficulty}</p>

                <a href="${demon.video}" target="_blank">
                    <button>Ver video</button>
                </a>
            </div>
        </div>
        `;
    });
}

cargarDemons();
