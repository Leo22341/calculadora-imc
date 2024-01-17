const form = document.getElementById('form'); 
// essa linha serve para pegar o formulário.

form.addEventListener('submit', function(event) {
    // Aqui adiciona um evento de submissão ao form.
    event.preventDefault();
    // Esse comando serve para não atualizar a página quando enviar os dados(submitar kkk).

    const weight = document.getElementById('weight').value; //aqui pega o valor do input peso.
    const height = document.getElementById('height').value; //aqui pega o valor do input altura.
    
    const bmi = (weight / (height * height)).toFixed(2); // aqui faz o calculo - peso dividido por altura vezes altura e o toFixed, com peso 2 serve para aparecer no máximo 2 núm depois da vírgula.

    const value = document.getElementById('value'); // aqui busca o value no html que é onde dá o resultado.
    let description = ''; // variável de descrição, que receberá os valores a baixo.

    value.classList.add('attention'); // aqui defini a cor pra vermelho em todas as condições.

    document.getElementById('infos').classList.remove('hidden'); // aqui remove a classe hidden(para aparecer o resultado somente depois do pull button.)

    if (bmi < 18.5) {
        description = "Você está a baixo do seu peso ideal!"
    } else if ( bmi >= 18.5 && bmi <= 25 ) {
        description = "Você está no seu peso ideal!";
        value.classList.remove('attention'); // aqui remove a cor vermelha definida pra todos   
        value.classList.add('normal'); // aqui troca o vermelho pelo verde obs.: essas classes foram definidas no css.
    } else if ( bmi > 25 && bmi <= 30 ) {
        description = "Cuidado! Você está com sobrepeso!"
    } else if ( bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada"
    } else if ( bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa"
    } else {
        description = "Muito Cuidado !!! Você está com obesidade mórbida"
    }


    value.textContent = bmi.replace('.', ','); // aqui mostra o resultado na tela a parte da soma e o replace troca ponto por vírgula no resultado.
    document.getElementById('description').textContent = description; // aqui pra mostrar o texto das description.
})
