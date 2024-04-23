// Isso é um comentário
let nome = "João";
let idade = 25;
let listaDeCompras = ["Maçã", "Banana", "Laranja"];

function verificarMaiorIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

function adicionarItem(lista, item) {
  lista.push(item);
  return lista;
}

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Status de maioridade:", verificarMaiorIdade(idade));

console.log("Lista de compras antes de adicionar um item:", listaDeCompras);
console.log("Adicionando um item à lista de compras...");
listaDeCompras = adicionarItem(listaDeCompras, "Pêra");
console.log("Lista de compras depois de adicionar um item:", listaDeCompras);