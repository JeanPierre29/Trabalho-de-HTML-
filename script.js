function validar_form() {
    if (document.getElementById("Nome").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("Nome").focus();
        return false
    }
    if (document.getElementById("Email").value == "") {
        alert('Por favor, preencha o campo email');
        document.getElementById("Email").focus();
        return false
    }
    if (document.getElementById("home").value != "") {
        nome = document.getElementById("Nome").value;
        alert("Seja Bem Vindo. Boa Sorte!" + nome + "!")
    }

}


var checked = ""
var certo = 0
var errado = 0

function Quest1() {
    checked = document.getElementById("a1").checked;

    if (checked == false){
        pergunta1 = "A";
        certo = certo +1;
    }

    if (checked == true) {
        checked = document.getElementById("b1").checked;
        if (checked == true) {
            questao1 = "B"
            errado + errado +1;
        }
    }
    function mostrar_acertos() {
    var certo = certo+ certo;
    alert("Acertou: " + certo + " de 1");
    {

        
}}}


