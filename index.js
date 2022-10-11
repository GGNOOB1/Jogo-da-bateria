//  Atráves da manipulação da árvore DOM armazenamos em uma variável a quantidade de 
//  itens/buttons que tem na classe .drum
var numbersOfDrumButtons = document.querySelectorAll(".drum").length;

// Utilizamos o loop for para selecionar individualmente cada item e adicionar este 
// ao EventListener que utiliza o evento de click para executar a função anônima
for (let i = 0; i < numbersOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // Nesta variável armazenamos o conteúdo do item clicado
        var letraSom = this.innerHTML;

        // Nesta função colocamos como parâmetro a variavel letraSom
        makeSound(letraSom);

    });
}

// Aqui determinamos que no documento inteiro que ao clicar em qualquer tecla do teclado 
// ativará a função com o paramêtro de event
document.addEventListener("keydown", function (event) {

    // Nesta função utilizamos como parâmetro o evento mais a chave/letra especifíca do 
    // teclado que será determinada ao executar o switch case.
    makeSound(event.key);
})

// Função que determina qual som será tocado a partir de tal letra clicável ou a cada imagem
// no documento html
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'l':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case 'j':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log(letraSom);
    }
}













