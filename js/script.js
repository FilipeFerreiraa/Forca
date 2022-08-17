let tentativas = 6;
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = []

const palavras = [
    palavra001 = {
        nome: "JAVASCRIPT",
        categoria: "PROGRAMAÇÃO"
    },

    palavra002 = {
        nome: "PYTHON",
        categoria: "PROGRAMAÇÃO"
    },

    palavra003 = {
        nome: "ASSEMBLY",
        categoria: "PROGRAMAÇÃO"
    },

    palavra004 = {
        nome: "PHP",
        categoria: "PROGRAMAÇÃO"
    },

    palavra005 = {
        nome: "JAVA",
        categoria: "PROGRAMAÇÃO"
    },

    palavra006 = {
        nome: "PERL",
        categoria: "PROGRAMAÇÃO"
    },

    palavra007 = {
        nome: "RUBY",
        categoria: "PROGRAMAÇÃO"
    },

    palavra008 = {
        nome: "SWIFT",
        categoria: "PROGRAMAÇÃO"
    },

    palavra009 = {
        nome: "NET",
        categoria: "FRAMEWORK"
    },

    palavra010 = {
        nome: "EXPRESS",
        categoria: "FRAMEWORK"
    },

    palavra011 = {
        nome: "REACT",
        categoria: "FRAMEWORK"
    },

    palavra012 = {
        nome: "ANGULAR",
        categoria: "FRAMEWORK"
    },

    palavra013 = {
        nome: "VUE",
        categoria: "FRAMEWORK"
    },

    palavra014 = {
        nome: "BOOTSTRAP",
        categoria: "FRAMEWORK"
    },

    palavra015 = {
        nome: "LARAVEL",
        categoria: "FRAMEWORK"
    },

    palavra016 = {
        nome: "RAILS",
        categoria: "FRAMEWORK"
    },

    palavra017 = {
        nome: "DJANGO",
        categoria: "FRAMEWORK"
    },

    palavra018 = {
        nome: "IONIC",
        categoria: "FRAMEWORK"
    }
]

criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaCategoria);
    console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra__secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = " ";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;

    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#6464648c";
    document.getElementById(tecla).style.color = "#FFF";
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    
    let letraErrada = document.querySelector('#erros__computados');

    if (pos < 0) {
        tentativas--;
        carregaImagemForca();
        letraErrada.innerHTML = letraErrada.innerHTML + "<div class='erros'>" + letra + "</div>";

        if (tentativas == 0) {
            abreModal("Ops!", "Você errou... A palavra secreta era <br> " + palavraSecretaSorteada);
        }

    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("Parabéns", "Você venceu!");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;

        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;

        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;

        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;

        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;

        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let reiniciar = document.querySelector(".btn");
reiniciar.addEventListener("click", function () {
    location.reload();
});

let btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", function () {
    location.reload();
});