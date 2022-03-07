const nomeDoProduto = ['Coca-Cola', "Lay's", 'PlayStation', 'Toyota Corolla', 'iPad', 'Angry Birds', 'Álbum Thriller', 'Harry Potter', 'iPhone', 'Cubo mágico'];

const quantidadeDoProduto = ["1,8 bi", "633 mi", "344 mi", "40,7 mi", "211 mi", "2 bi", "70 mi", "450 mi", "516 mi", "350 mi"]

const valorDoProduto = ["R$ 3,29", "R$ 5,99", "R$ 7.000,00", "R$ 150.000,00", "R$ 9.000,00", "R$ 0,00", "R$ 100,00", "R$ 200,00", "R$ 9.000,00", "R$ 30,00"];

const produto = [nomeDoProduto, quantidadeDoProduto, valorDoProduto];

for (let indice = 0; indice < nomeDoProduto.length; indice++) {
    setTimeout(() => {
        console.log(indice + 1 < 10 ? `Código: 00${indice + 1}` : `Código: 0${indice + 1}`);
        console.log(`Nome: ${produto[0][indice]}`);
        console.log(`Quantidade Vendida: ${produto[1][indice]}`);
        console.log(`Preço Médio: ${produto[2][indice]}\n`);
    }, indice * 2000)
}
