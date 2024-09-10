const formulario = document.querySelector("form");
const nome = document.querySelector(".nome");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const telefone = document.querySelector(".telefone");


function cadastrar() {

    fetch("http://localhost:8080/users",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: nome.value,
                email: email.value,
                senha: senha.value,
                telefone: telefone.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

};

function limpar() {
    nome.value = "",
        email.value = "",
        senha.value = "",
        telefone.value = ""

};


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});