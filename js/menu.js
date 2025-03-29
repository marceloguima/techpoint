const btnAbrirMenu = document.querySelector('.btn-menu');
const btnFecharMenu = document.querySelector('.fechar-menu');
let menu = document.querySelector('.links-nav-menu');

function mostrarMenu() {
  if (menu.style.display === 'flex') {
    fechaMenu();
  }
  else {
    menu.style.display = 'flex';
    btnAbrirMenu.style.display = 'none';
    btnFecharMenu.style.display = 'flex';
    
  }
}

function fechaMenu() {
  menu.style.display = 'none';
  btnAbrirMenu.style.display = 'flex';
  btnFecharMenu.style.display = 'none';

}





// const menu = document.querySelector(".menu-hamburger");
// const botaoAbrirMenu = document.querySelector(".btn-menu");
// const botaoFecharMenu = document.querySelector(".fechar-menu");
// const navTelasGrandes = document.querySelector(".nav-telas-g");

// function mostraMenu() {
//     if (menu.style.display === "block") {
//         fechaMenu();
//     } else {
//         menu.style.display = "block";
 

//     }
// }

// function fechaMenu() {
//     menu.style.display = "none";
// }
