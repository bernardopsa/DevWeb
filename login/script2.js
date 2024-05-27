const senhaCorreta = localStorage.getItem('senha_correta') === 'true';
const mensagem2 = document.getElementById('mensagem2'); 
console.log(senhaCorreta)

if (senhaCorreta) {
    mensagem2.innerHTML = '<h1 style="color:red">Escondida!</h1>';
    document.getElementById('btn_logout').style.display='inline';

    document.getElementById('btn_logout').onclick = () => {
        window.location.href='index.html'
    }

} else {

};


