var lista = [];

while(true){

    var escolha = prompt(` Cadastro de Produtos:
    
        1 - Adicionar
        2 - Editar
        3 - Excluir
        4 - Visualizar
        5 - Sair
    
    `);

    if(escolha == "1"){
        Add();
    }else if(escolha == "2"){
        Edit();
    }else if(escolha == "3"){
        Delet();
    }else if(escolha == "4"){
        View();
    }else if(escolha == "5"){
        break;
    }else{alert("Número Incorreto!");}

}

function Add(){

    var produto = {
        nome: prompt("Digite o nome do produto!"),
        setor: prompt("Digite o setor do produto!"),
        preco: prompt("Digite o preço do produto!"),
        quant: prompt("Digite a quantidade de produtos!")
    }

    if(produto.nome != "" && produto.setor != ""
    && produto.preco != "" && produto.quant != ""){
        var texto = `(${produto.nome.toUpperCase()})
        setor: ${produto.setor.toLowerCase()}
        preço: R$${produto.preco.toLowerCase()}
        quantidade: ${produto.quant.toLowerCase()}`;

        lista.push(texto);
        alert("Produto Adicionado!");
    }else{
        alert("Produto não Adicionado!");
    }

}

function Edit(){

    var t = prompt("Digite o índice do produto que deseja editar, de 0 à " + (lista.length - 1));

    if(lista[t] != null){
        var produtoEditar = {
            nome: prompt("Digite o nome do produto!"),
            setor: prompt("Digite o setor do produto!"),
            preco: prompt("Digite o preço do produto!"),
            quant: prompt("Digite a quantidade de produtos!")
        }

        var texto = `(${produtoEditar.nome.toUpperCase()})
        setor: ${produtoEditar.setor.toLowerCase()}
        preço: R$${produtoEditar.preco.toLowerCase()}
        quantidade: ${produtoEditar.quant.toLowerCase()}`;

        lista[t] = texto;
        alert("Produto Editado!");
    }else{
        alert("Produto não editado!");
    }

}

function Delet(){

    var i = prompt("Digite o índice do produto que deseja excluir, de 0 à " + (lista.length - 1));

    if(lista[i] != null){
        var sn = prompt("Deseja realmente excluir este item da lista \n" + lista[i]);
        if(sn.toUpperCase() == "SIM"){
            lista.splice(i,1);
            alert("Produto excluido!");
        }else{
            alert("Produto não excluido!");
        }
    }else{
        alert("Produto não existente!");
    }

}

function View(){
    alert(lista.join("\n"));
}
