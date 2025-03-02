// Script biar responsive hamburger-menu
const menu = document.querySelector ('.menu-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    menu.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu'); 
document.addEventListener('click', function (hapus) {
    if(!hamburger.contains(hapus.target) && !menu.contains(hapus.target)) {
        menu.classList.remove('active');
    }
});

// Script biar responsive medsos
const medsos = document.querySelector ('.medsos');
document.querySelector('#medsos-nav').onclick = () => {
    medsos.classList.toggle('active');
};

const mediaSosial = document.querySelector('#medsos-nav');
document.addEventListener('click', function (hapus) {
    if(!mediaSosial.contains(hapus.target)) {
        medsos.classList.remove('active');
    }
});

//script type di hero section
var typed = new Typed('#auto-hero', {
    strings: ['Tekan tombol di bawah ini', 'Untuk lanjut kehalaman selanjutnya'],
    typeSpeed: 30,
    loop: true
})


// Script Type biar loop dan jalan
//     var typed = new Typed('.auto-type', {
//     strings: ['SELAMAT DATANG', 'BAGAIMANA KABARMU?', 'LUPAKAH KALIAN?','GRUP SEPI KALI BRAY', 'SEMOGA SEHAT SEMUA',
//          ''],
//       typeSpeed: 50,
//       loop:true
//  });

