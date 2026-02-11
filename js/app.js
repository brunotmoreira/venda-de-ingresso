let inferior = 400;
let superior = 200;
let pista = 100;

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = document.getElementById('qtd').value;
    
 switch (tipoIngresso){
    
    case "pista":
        pista -= quantidadeCompra;
        if(pista < 0 ){
            alert("Não temos ingressos o suficiente");
            pista += quantidadeCompra;
        }else{
            document.getElementById('qtd-pista').textContent = pista;
            alert("Parabéns pela compra!")
        }
    break;

    case "superior":
        superior -= quantidadeCompra;
        if(superior < 0 ){
            alert("Não temos ingressos o suficiente");
            superior += quantidadeCompra;
        }else{
            document.getElementById('qtd-superior').textContent = superior;
            alert("Parabéns pela compra!");
        }
    break;

    case "inferior":
        inferior -= quantidadeCompra;
        if(inferior < 0 ){
            alert("Não temos ingressos o suficiente");
            inferior += quantidadeCompra;
        }else{
            document.getElementById('qtd-inferior').textContent = inferior;
            alert("Parabéns pela compra!");
        }
    break;
 }
   
}