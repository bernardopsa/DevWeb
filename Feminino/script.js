console.log("Usando o forEach", "---------------------------------------------------------------------")

dados.forEach(
    (elemento) => {
        console.log(elemento.nome);
    }
);

console.log("Usando o while", "--------------------------------------------------");

let indice = 0;

while(indice < dados.length){
    console.log("A posição de", dados[indice].nome, "é", dados[indice].posicao);
    indice++;
}

console.log("Usando o for", "--------------------------------------------------");
for(var i= 0; i < dados.length; i++){
    console.log("A posição de", dados[i].nome, "é", dados[i].posicao);
}

console.log("Usando o for of", "--------------------------------------------------");
for (const atleta of dados) {
    console.log("O nome completo é", (atleta.nome_completo));
} 

const atleta = dados[15];

const container = document.getElementById("conteudo");
dados.forEach(
(atleta) => container.innerHTML +=`
    <div class='card'>
        <imagem><img src=${atleta.imagem} alt='foto de ${atleta.nome}'></img></imagem>
        <p class='posicao text'>${atleta.posicao}</p>
        <p class='nome text'>${atleta.nome}</p>
        <p class='descricao text'>${atleta.descricao}</p>
        <p class='nascimento text'>${atleta.nascimento}</p>
    </div>`
)