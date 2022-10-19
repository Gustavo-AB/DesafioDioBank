var soma = function (a, b) {
    console.log(a + b);
};
soma(4, 5);
var a = 20;
var b;
var pessoa = {
    nome: "Gustavo",
    idade: 20
};
var pessoa2 = {
    nome: "Guilherme",
    idade: 20,
    profissao: "dev"
};
var arr = [
    pessoa,
    pessoa2
];
var arrNum = [
    2, 3, 5
];
var userType = {
    admin: "Seja bem vindo admin",
    student: "Você é um estudante",
    viewer: "Você pode visualizar"
};
function validateUser(user) {
    console.log(userType[user]);
}
var usuario = "admin";
validateUser(usuario);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
