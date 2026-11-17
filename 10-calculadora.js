// Com base no conteúdo abordado,
// elabore uma aplicação para calcular as operações matemáticas básicas (adição, subtração, multiplicação e divisão).
function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 'adição':
            return num1 + num2;
        case 'subtração':
            return num1 - num2;
        case 'multiplicação':
            return num1 * num2;
        case 'divisão':
            if (num2 === 0) {
                return 'Não é possível dividir por zero';
            }
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
}

// Exemplos de uso (rode com: node 10-calculadora.js)
console.log('10 + 5 =', calcular('adição', 10, 5));          // 15
console.log('10 - 5 =', calcular('subtração', 10, 5));       // 5
console.log('10 * 5 =', calcular('multiplicação', 10, 5));   // 50
console.log('10 / 5 =', calcular('divisão', 10, 5));         // 2
console.log('10 / 0 =', calcular('divisão', 10, 0));         // Não é possível dividir por zero
console.log('potência:', calcular('potência', 2, 3));        // Operação inválida
