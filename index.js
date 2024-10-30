mostrarInformacoes('Daniel', 21);
mostrarInformacoes('Adriel', 19, 'Portoriquenho');
mostrarInformacoes('Carine', 27, 'Francesa');

boasVindas('Nayara','f')
boasVindas('Joel','m')


function boasVindas(nome, genero){
    document.write(`<h1>Seja bem-vind${genero == 'm' ? 'o': 'a'} ${nome}</h1>`);
}

function mostrarInformacoes(nome, idade, naturalidade = 'Brasileiro(a)'){
    document.write(`
        <ul>
            <li>Nome: ${nome}</li>
            <li>Idade: ${idade}</li>
            <li>Naturalidade: ${naturalidade}</li>
        </ul>
    `);
    // document.write(
    //     '<ul>'+
    //         '<li>Nome: '+nome+'</li>'+
    //         '<li>Idade: ---</li>'+
    //         '<li>Genêro: ---</li>'+
    //     '</ul>'
    // );
}

/**
 * Esta função soma numeros
 * @param {number} numero1 
 * @param {number} numero2
 * @returns {number} 
 */
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

const somarAntigo = (numero1, numero2) => {
    document.write(`<h1>O resultado é: ${numero1 + numero2}</h1>`);
}

document.write(`<h1>O resultado é: ${somar(somar(2,2), somar(2,2))}</h1>`);
document.write(`<h1>frase diferente: ${somar(somar(2,2), somar(2,2))}</h1>`);
document.write(`<h1>outra frase: ${somar(somar(2,2), somar(2,2))}</h1>`);
somarAntigo(2, 2)

// let a = 3;
// let b = 5;
// somar(a, b);
// somar(2, 2);


