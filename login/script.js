const alvo = 'e7d80ffeefa212b7c5c55700e4f7193e';
const sal = 'uma frase';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (hex_md5(entrada + sal) === alvo){
        mensagem.innerHTML = '<h1>Senha correta</h1>';
        localStorage.setItem('senha_correta', 'true');
    } else {
        mensagem.innerHTML = '<h1 style="color: red">Senha incorreta</h1>'
        localStorage.setItem('senha_correta', 'false')
    }

    window.location.href = 'index2.html'
}