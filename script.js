function testarSorte() {
var numero = parseFloat(document.getElementById('numero').value);

if (isNaN(numero)) {
        alert('Por favor, insira um valor numérico válido.');
        return;
 }

 var numeroSecreto = Math.floor(Math.random() * 1000) + 1;

if (numeroSecreto === numero) {
       document.getElementById('sorte').innerText = 'Acertou!' + 'O número secreto é : ' + numeroSecreto;
       document.getElementById("imagem").innerHTML = "<img src='https://acertounamosca.files.wordpress.com/2013/01/blog-sc3admbolo-copy.jpg' width='250'>";
    } else if (numeroSecreto > numero) {
       document.getElementById('sorte').innerText = 'Número Secreto é maior!' + 'O número secreto é : ' + numeroSecreto;
       document.getElementById("imagem").innerHTML = "<img src='https://cdn.pensador.com/img/frase/al/be/albert_einstein_quem_nunca_errou_nunca_tentou_lwe4zzq.jpg' width='250'>";
    } else if (numeroSecreto < numero) {
        document.getElementById('sorte').innerText = 'Número Secreto é menor!' + 'O número secreto é : ' + numeroSecreto;
        document.getElementById("imagem").innerHTML = "<img src='https://cdn.pensador.com/img/frase/al/be/albert_einstein_quem_nunca_errou_nunca_tentou_lwe4zzq.jpg' width='250'>";
    }

    limpar();
}

function limpar() {
    document.getElementById('numero').value = '';
}