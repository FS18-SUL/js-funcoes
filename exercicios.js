function boasVindas(){
    document.write('Seja bem vindo Thiago');
}
boasVindas()

function calcIdade(ano){
    document.write(`<h1>a idade do tiago é ${2024 - ano}</h1>`)
}
calcIdade(1917)
calcIdade(1968)

function frequenciaAlunos(presentes, total) {
    return (((total - presentes)*100)/total).toFixed(0);
}

document.write(`<h1>O percentual de faltantes é: ${frequenciaAlunos(11, 19)}%</h1>`)

function mediaNotas(teoria, pratica1, pratica2){
    return ((teoria * 2) + (pratica1 + pratica2)) / 4;
}

document.write(`<h1>A media do Frank é ${mediaNotas(10, 10, 10)}</h1>`)


function idntPeriodo(horario){
    const[hora, minutos] = horario.split(':')
        if (Number(hora) >= 5 && Number(hora) < 12) return 'manha'
        else if (Number(hora) >= 12 && Number(hora) < 18) return 'tarde'
        else return 'noite'
    
}
const horario1 = idntPeriodo ('12:30')
const horario2 = idntPeriodo ('10:30')
const horario3 = idntPeriodo ('04:45')
const horario4 = idntPeriodo ('20:00')
const horario5 = idntPeriodo ('21:30')
const horario6 = idntPeriodo ('08:00')
const horario7 = idntPeriodo ('09:00')
const horario8 = idntPeriodo ('03:22')
const horario9 = idntPeriodo ('05:12')
const horario10 = idntPeriodo ('12:30')

function contagemDePeriodo(horario){
    if(horario == 'manha') manha++
    else if(horario=='tarde') tarde++
    else noite++
}

let manha = 0
let tarde = 0
let noite = 0


contagemDePeriodo(horario1)
contagemDePeriodo(horario2)
contagemDePeriodo(horario3)
contagemDePeriodo(horario4)
contagemDePeriodo(horario5)
contagemDePeriodo(horario6)
contagemDePeriodo(horario7)
contagemDePeriodo(horario8)
contagemDePeriodo(horario9)
contagemDePeriodo(horario10)


document.write(`a quantidade de acessos por período foi: <br>
    <h2>manhã:${manha}</h2> 
    <h2>tarde:${tarde}</h2> 
    <h2>noite:${noite}</h2>
    `)


//Crie uma função que retorne a quantidade de itens de um array (não pode usar length)

function qtdItens(array){
    let tamanho = 0;
    // let run = true;
    // while (run){
    //     if(array[tamanho] != undefined){
    //         tamanho++;
    //     }else{
    //         run = false;
    //     }
    // }

    while(!!array[tamanho] == true){
        tamanho++;
    }
    return tamanho;
}
document.write(`<h1>O tamanho da palavra Jessica é ${qtdItens('jessica')}</h1>`);

// Crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]
// (não pode usar filter)

function soPares(array){
    let pares = [];
    for(let i = 0; i < qtdItens(array); i++){
        if(array[i] % 2 == 0){
            pares.push(array[i])
        }
    }
    return pares; 
}

document.write(`<h1>Os pares do array[1,2,3,4,5,6,7,8,9,10] sao: ${soPares([3, 14, 25, 17, 8, 22])}</h1>`)


// Crie uma função que transforme frases de snake_case para camelCase
// (não pode usar replace, split, join)

function camelCase(frase){
    let fraseNova = '';
    for(let i = 0; i < qtdItens(frase); i++){
        if(frase[i] == '_'){
            fraseNova += '';
        } else if(frase[i - 1] == '_'){
            fraseNova += frase[i].toUpperCase();
        }else{
            fraseNova += frase[i];
        }
    }
    return fraseNova;
}

document.write(`<h1>A frase Frank_bonitao fica assim "${camelCase('frank_bonitao_e_cheiroso')}" em camelCase</h1>`)

// Crie uma função que retorne "true" caso todos os itens de um array obedecerem a uma condição 
// (não pode usar map, every)

function todosVerdadeiros(array, condicao){
    let isTrue = true;
    for(let i = 0; i < qtdItens(array); i++){
        if(!eval(array[i] + condicao)){
            isTrue = false;
        }
    }
    return isTrue;
}

document.write(`<h1>Todos os itens do array[2,4,6,8,5] são pares? 
    ${todosVerdadeiros([2,4,6,8,5], ' % 2 == 0') ? 'Sim' : 'Não'}</h1>`);

