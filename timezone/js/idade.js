function velhaIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    
    let idadeFutura = parseInt(idade) + 40;
   
    
    return document.getElementById('idadeFutura').value = idadeFutura;
}

function novaIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadePassada = parseInt(idade) - 10;
    
   
    return document.getElementById('idadePassada').value = idadePassada;
    
}

function carregaJovem() {
    let url = 'images/Rafael_Bebê.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('novo').appendChild(img);
}

function carregaAgora() {
    let url = 'images/Rafael.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('hoje').appendChild(img);
}

function carregaIdoso() {
    let url = 'images/Rafael_Idoso.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

function carregaMenina() {
    let url = 'images/Rafaela.png';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('ela').appendChild(img);
}