const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';

const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';

divPesquisa.appendChild(inputPesquisa);
document.body.appendChild(divPesquisa);

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '.5rem';

document.body.appendChild(container);

const montaCard =  (entrada) => {
    const card = document.createElement('div');
    card.style.cssText = `
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    "a1 a2"
    "a1 a3"
    "a4 a4"
    "a5 a5";
    border: solid black;
    padding: .3rem;
    `

    const divImagem = document.createElement('div');
    divImagem.className = 'imagem';
    divImagem.style.gridArea = 'a1';
    divImagem.style.display = 'flex';
    divImagem.style.alignItems = 'center';
    divImagem.style.justifyContent = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;
    imagem.style.width = '7rem';
    imagem.style.height = '7rem';
    imagem.style.borderRadius = '50%';
    imagem.style.objectFit = 'cover'
    imagem.style.objectPosition = '20% 20%'
    imagem.style.margin = '20px';


    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = entrada.posicao;
    pPosicao.style.gridArea = 'a2';
    pPosicao.style.display = 'flex';
    pPosicao.style.justifyContent = 'center';
    pPosicao.style.textTransform = 'uppercase';
    pPosicao.style.fontWeight = 'bold';

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = entrada.nome;
    pNome.style.gridArea = 'a3';
    pNome.style.display = 'flex';
    pNome.style.justifyContent = 'center';
    pNome.style.alignItems = 'center';
    pNome.style.text

    const pDescricao = document.createElement('p');
    pDescricao.className = 'descri';
    pDescricao.innerHTML = entrada.descricao;
    pDescricao.style.gridArea = 'a4';
    pDescricao.style.textTransform = 'uppercase';
    pDescricao.style.margin = '0.3rem';


    const pNascimento = document.createElement('p');
    pNascimento.className = 'nascimento';
    pNascimento.innerHTML = entrada.nascimento;
    pNascimento.style.gridArea = 'a5';
    pDescricao.style.textTransform = 'uppercase';
    pDescricao.style.margin = '0.3rem';

    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(pPosicao);
    card.appendChild(pNome);
    card.appendChild(pDescricao);
    card.appendChild(pNascimento);

    return card;

}

dados.forEach(
    (atleta) => {
        container.appendChild(montaCard(atleta))
    }
);


inputPesquisa.onkeyup = ( ev ) => {
    if (ev.target.value.length > 2 || ev.target.value.length == 0){
        const filtrado = dados.filter(
            (ele) => {
                const noNome = ele.nome.toLowerCase().includes(ev.target.value)
                const naPosicao = ele.posicao.toLowerCase().includes(ev.target.value)
                return noNome || naPosicao
            }
        )

        container.innerHTML = '';
        filtrado.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta))
            }
        )
    }
}

const pegaDados = async(caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados
}

pegaDados("https://botafogo-atletas.mange.li/feminino").then(
    (entrada) => {
        entrada.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta));
            }
        )
    }
)

console.log("síncrono");