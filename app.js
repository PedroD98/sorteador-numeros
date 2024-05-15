function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de >= ate) {
        alert ('O número mínimo deve ser menor do que o número máximo');
        reiniciar();
        return;
    } else if (quantidade > (ate - de + 1)){
        alert ('Quantidade de números sorteados inválida.');
        reiniciar();
        return;
    }
    let numerosSorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numero);
    }
    let fraseNumeroSorteado = quantidade == 1 ? 'Número Sorteado' : 'Números Sorteados';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${fraseNumeroSorteado}:  ${numerosSorteados}</label>`;
    
    document.getElementById('btn-reiniciar').className = "container__botao";
    console.log(numerosSorteados);
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//-------------------------------------------------------------------------
// Função não utilizada no código atual;
//function alterarBotao() {
    //let botao = document.getElementById('btn-reiniciar');
    //if (botao.classList.contains("container__botao-desabilitado")){
       // botao.classList.remove("container__botao-desabilitado");
       // botao.classList.add("container__botao");
   // } else {
   //     botao.classList.remove("container__botao");
   //     botao.classList.add("container__botao-desabilitado");
   // }
//}
//-------------------------------------------------------------------------

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}
function reiniciar(){
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    limparCampos();
    document.getElementById('btn-reiniciar').className = "container__botao-desabilitado";
}