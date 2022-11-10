const postos = [
    {
        nome: "PostoI",
        distancia: 15,
    },
    {
        nome: "PostoII",
        distancia: 2,
    },
    {
        nome: "PostoIII",
        distancia: 25,
    },
    {
        nome: "PostoIV",
        distancia: 22,
    }
]

function adicionar() {
    var aposto = (document.getElementById("posto").value);
    var adistancia = parseInt(document.getElementById("distancia").value);

    postos.push(
        {
            nome: aposto,
            distancia: adistancia,
    },
    )
}

function calcular() {
    var consumoM = parseInt(document.getElementById("txconsmedio").value);
    var combustivelD = parseInt(document.getElementById("txcombdisp").value);


    var dist = consumoM * combustivelD

    var result = {
        nome: "",
        distancia: 0,
    }

    for (let posto of postos) {
        if (posto.distancia >= result.distancia && posto.distancia <= dist) {
            result = posto
        }

    }

    if (result.nome == null && result.distancia == null) {
        return -1
    }
      document.getElementById("resultado").innerText = "Resultado: "+result.nome+"   "+result.distancia

}