function exemplificandoLet(){
    let array = [1,2,3,4,5];
    console.log("Tamanho do array:",array.length);
    console.log("Elemento 3 do Array:",array[2]);
    
    array[4] = "7";
    console.log("Novo array de quinta posição:",array[4]);
    
    array.push(11);
    console.log(array);

    array.pop();
    console.log("Último elemento removido: ", array);

    array.shift();
    console.log("Primeiro elemento retirado: ", array);

    array.unshift(20);
    console.log("Número 20 adicionado no início:", array);

}

function exemplificandoVar(){
    var b = 5;

    if(true){
        let b = 6;
        console.log(b);
    }
}

function exemplificandoConst(){
    const c = 6;
    console.log(c);
}

exemplificandoLet();
exemplificandoVar();
exemplificandoConst();