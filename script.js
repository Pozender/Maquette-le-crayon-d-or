const send = document.getElementById('envoyer');
const form = document.querySelector('.formulaire');
const burgerbutton = document.getElementById('burgerbutton');
const burgermeunu = document.querySelector('.burgermeunu');
const burgeroverlay = document.querySelector('.burgeroverlay');
const bouttons = document.querySelectorAll('.bouton_a_burgerer')
const burgeredbuttons = document.querySelector('.burgeredbuttons')
const body = document.querySelector('body');


send.addEventListener('submit', () =>{
    alert("Votre message nous a bien été envoyé");
})

if (body.offsetWidth < 1000) {
    
    bouttons.forEach((bouton)=>{
        burgeredbuttons.appendChild(bouton)
        bouton.style.display = 'block';
        console.log('does');

        bouton.addEventListener('click', () =>{
            burgermeunu.classList.remove('burgered');
            document.querySelector('.burgeroverlay').style.display = 'none';
        })
    })
    console.log('do');
}


burgerbutton.addEventListener('click', () => {
    // document.querySelector('.burgermeunu').classList.add('burgeredmeunu');
    burgermeunu.classList.add('burgered');
    // burgeroverlay.classList.add('burgeredmeunu');
    document.querySelector('.burgeroverlay').style.display = 'block';
})

burgeroverlay.addEventListener('click', (e) =>{
    burgermeunu.classList.remove('burgered');
    document.querySelector('.burgeroverlay').style.display = 'none';
})

