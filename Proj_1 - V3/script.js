let headclosed = true; //Deixa marcado que nenhuma aba foi aberta//

const container = document.querySelector(".container"); //Identificação das divs//
const head1 = document.querySelector(".head-1");
const head2 = document.querySelector(".head-2");
const head3 = document.querySelector(".head-3");
const head4 = document.querySelector(".head-4");
const head5 = document.querySelector(".head-5");
const closebutton = document.getElementById("closebutton")

head1.addEventListener('click', function () {
    const name = document.querySelector(".name");
    const photo = document.querySelector(".photo");
    const photoSpace = document.querySelector(".photo_space");
    if (headclosed) {
        //Verifica se alguma aba foi aberta anteriormente//
        //Transição para saída do conteúdo//
        photo.style.opacity = 0;
        photo.style.transition = "opacity 0.5s";
        photoSpace.style.opacity = 0;
        photoSpace.style.transition = "opacity 0.5s";
        name.style.opacity = 0;
        name.style.transition = "opacity 0.5s";

        //Atribuição da classe hide para ocultar a div do conteúdo//
        setTimeout(function () {
            photo.classList.add("hide");
            photoSpace.classList.add("hide");
            name.classList.add("hide");

        //Expansão da .container//
        setTimeout(function () {
            container.classList.add('exp');
            }, 120);
            }, 400);

        //Mostra o conteúdo da content-1 após o aumento da .container//
        setTimeout(function () {
            const content1 = document.getElementById("content-1");
            content1.style.opacity = 0;
            content1.style.transition = "opacity 0.5s";
            content1.style.display = "block";

        setTimeout(function () {
            content1.style.opacity = 1;
            }, 800);
            }, 400);

        headclosed = false;
    }

    else { //Caso outra aba já esteja aberta//
        setTimeout(function () {
            const content2 = document.getElementById("content-2");
            const content3 = document.getElementById("content-3");
            const content4 = document.getElementById("content-4");
            content2.style.opacity = 0;
            content2.style.transition = "opacity 0.5s";
            content3.style.opacity = 0;
            content3.style.transition = "opacity 0.5s";
            content4.style.opacity = 0;
            content4.style.transition = "opacity 0.5s";

        setTimeout(function () {
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "none";

        setTimeout(function () {
            const content1 = document.getElementById("content-1");
            content1.style.opacity = 0;
            content1.style.transition = "opacity 0.5s";
            content1.style.display = "block";
            
        setTimeout(function () {
            content1.style.opacity = 1;
        }, 600);
        }, 500);
        }, 300);
        }, 150);
    }
}); //Fim da função da content-1

head2.addEventListener('click', function () { //Funções para o clique na segunda aba//
    const name = document.querySelector(".name");
    const photo = document.querySelector(".photo");
    const photoSpace = document.querySelector(".photo_space");
    //Verifica se alguma aba foi aberta anteriormente//
    if (headclosed) {
        //Transição para saída do conteúdo//
        photo.style.opacity = 0;
        photo.style.transition = "opacity 0.5s";
        photoSpace.style.opacity = 0;
        photoSpace.style.transition = "opacity 0.5s";
        name.style.opacity = 0;
        name.style.transition = "opacity 0.5s";

        //Atribuição da classe hide para ocultar a div do conteúdo//
        setTimeout(function () {
            photo.classList.add("hide");
            photoSpace.classList.add("hide");
            name.classList.add("hide");

            //Expansão da .container//
            setTimeout(function () {
                container.classList.add('exp');
            }, 120);
        }, 400);

        //Mostra o conteúdo da content-2 após o aumento da .container
        setTimeout(function () {
            const content2 = document.getElementById("content-2");
            content2.style.opacity = 0;
            content2.style.transition = "opacity 0.5s";
            content2.style.display = "block";

            setTimeout(function () {
                content2.style.opacity = 1;
            }, 800);
        }, 400);

        headclosed = false;
    }

    else { //Caso outra aba já esteja aberta//
        setTimeout(function () {
            const content1 = document.getElementById("content-1");
            const content3 = document.getElementById("content-3");
            const content4 = document.getElementById("content-4");
            content1.style.opacity = 0;
            content1.style.transition = "opacity 0.5s";
            content3.style.opacity = 0;
            content3.style.transition = "opacity 0.5s";
            content4.style.opacity = 0;
            content4.style.transition = "opacity 0.5s";

            setTimeout(function () {
                content1.style.display = "none";
                content3.style.display = "none";
                content4.style.display = "none";

                setTimeout(function () {
                    const content2 = document.getElementById("content-2");
                    content2.style.opacity = 0;
                    content2.style.transition = "opacity 0.5s";
                    content2.style.display = "block";

                    setTimeout(function () {
                        content2.style.opacity = 1;
                    }, 500);
                }, 600);
            }, 300);
        }, 150);
    }
});

head3.addEventListener('click', function () { //Funções para o clique na terceira aba//
    const name = document.querySelector(".name");
    const photo = document.querySelector(".photo");
    const photoSpace = document.querySelector(".photo_space");
    //Verifica se alguma aba foi aberta anteriormente//
    if (headclosed) {
        //Transição para saída do conteúdo//
        photo.style.opacity = 0;
        photo.style.transition = "opacity 0.5s";
        photoSpace.style.opacity = 0;
        photoSpace.style.transition = "opacity 0.5s";
        name.style.opacity = 0;
        name.style.transition = "opacity 0.5s";

        //Atribuição da classe hide para ocultar a div do conteúdo//
        setTimeout(function () {
            photo.classList.add("hide");
            photoSpace.classList.add("hide");
            name.classList.add("hide");

            //Expansão da .container//
            setTimeout(function () {
                container.classList.add('exp');
            }, 120);
        }, 400);

        //Mostra o conteúdo da content-3 após o aumento da .container
        setTimeout(function () {
            const content3 = document.getElementById("content-3");
            content3.style.opacity = 0;
            content3.style.transition = "opacity 0.5s";
            content3.style.display = "block";

            setTimeout(function () {
                content3.style.opacity = 1;
            }, 800);
        }, 400);

        headclosed = false;
    }

    else { //Caso outra aba já esteja aberta//
        setTimeout(function () {
            const content1 = document.getElementById("content-1");
            const content2 = document.getElementById("content-2");
            const content4 = document.getElementById("content-4");
            content1.style.opacity = 0;
            content1.style.transition = "opacity 0.5s";
            content2.style.opacity = 0;
            content2.style.transition = "opacity 0.5s";
            content4.style.opacity = 0;
            content4.style.transition = "opacity 0.5s";

        setTimeout(function () {
            content1.style.display = "none";
            content2.style.display = "none";
            content4.style.display = "none";

        setTimeout(function () {
            const content3 = document.getElementById("content-3");
            content3.style.opacity = 0;
            content3.style.transition = "opacity 0.5s";
            content3.style.display = "block";

        setTimeout(function () {
            content3.style.opacity = 1;
        }, 600);
        }, 500);
        }, 300);
        }, 150);
    }
});

head4.addEventListener('click', function () { //Funções para o clique na quarta aba//
    const name = document.querySelector(".name");
    const photo = document.querySelector(".photo");
    const photoSpace = document.querySelector(".photo_space");
    //Verifica se alguma aba foi aberta anteriormente//
    if (headclosed) {
        //Transição para saída do conteúdo//
        photo.style.opacity = 0;
        photo.style.transition = "opacity 0.5s";
        photoSpace.style.opacity = 0;
        photoSpace.style.transition = "opacity 0.5s";
        name.style.opacity = 0;
        name.style.transition = "opacity 0.5s";

        //Atribuição da classe hide para ocultar a div do conteúdo//
        setTimeout(function () {
            photo.classList.add("hide");
            photoSpace.classList.add("hide");
            name.classList.add("hide");

            //Expansão da .container//
            setTimeout(function () {
                container.classList.add('exp');
            }, 120);
        }, 400);

        //Mostra o conteúdo da content-4 após o aumento da .container
        setTimeout(function () {
            const content4 = document.getElementById("content-4");
            content4.style.opacity = 0;
            content4.style.transition = "opacity 0.5s";
            content4.style.display = "block";

            setTimeout(function () {
                content4.style.opacity = 1;
            }, 800);
        }, 400);

        headclosed = false; //Deixa marcado que uma aba já foi aberta//
    }

    else { //Caso outra aba já esteja aberta//
        setTimeout(function () {
            const content1 = document.getElementById("content-1");
            const content2 = document.getElementById("content-2");
            const content3 = document.getElementById("content-3");
            content1.style.opacity = 0;
            content1.style.transition = "opacity 0.5s";
            content2.style.opacity = 0;
            content2.style.transition = "opacity 0.5s";
            content3.style.opacity = 0;
            content3.style.transition = "opacity 0.5s";

        setTimeout(function () { //Desativa qulaquer conteúdo que de outras abas//
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";

        setTimeout(function () { //Faz a transição de display de none para block, habilitando o conteúdo//
            const content4 = document.getElementById("content-4");
            content4.style.opacity = 0;
            content4.style.transition = "opacity 0.5s";
            content4.style.display = "block";

        setTimeout(function () { //Mostra o conteúdo//
            content4.style.opacity = 1;
        }, 600); //Tempos de intervalos de ação, ordem inversamente relacionada às etapas acima//
        }, 500);
        }, 300);
        }, 150);
    }
});

head5.addEventListener('click', function () { //Protótipo de aba gaveta para disposição dos meios de contato e mídias sociais//
    const drawer = document.querySelector(".contacts");
    const titledrawer = document.querySelector(".head-5 h2");
    const effecthover = document.querySelector(".head-5:hover")
    titledrawer.style.opacity = 0;
    titledrawer.style.transition = "opacity 0.5s";
    effecthover.style.visibility = "hidden";

    setTimeout(function () {
        drawer.classList.add('exp');
    }, 200);
}, 400);

closebutton.addEventListener('click', function () { //Protótipo de aba gaveta para disposição dos meios de contato e mídias sociais//
    const drawer = document.querySelector(".contacts");
    const titledrawer = document.querySelector(".head-5 h2");
    const effecthover = document.querySelector(".head-5:hover")
    titledrawer.style.opacity = 1;
    titledrawer.style.transition = "opacity 0.5s";
    effecthover.style.visibility = "visible";

    setTimeout(function () {
        drawer.classList.remove('exp');
    }, 200);
}, 400);

let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

window.addEventListener('keydown', (event) => {
  konamiCode.push(event.key);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join('') === konamiSequence.join('')) {
    // Ação que você deseja realizar ao detectar a sequência
    // Neste exemplo, vamos mostrar um alerta
    alert('Konami Code Detected!');
    // Substitua o alerta pela ação de abrir o google.com
    // window.location.href = 'https://www.google.com';
    setTimeout(function() {
        window.location.href = 'https://www.google.com'
    }, 200)
  }
});



