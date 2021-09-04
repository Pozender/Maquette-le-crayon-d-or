const send = document.getElementById('envoyer');
const form = document.querySelector('.formulaire');


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(this)



    fetch('https://lecrayondorcontact.herokuapp.com/', {
        method: 'POST',
        body: formData
    }).catch((error)=>{
        console.error(error);
    })
})





    send.addEventListener('submit', () =>{
        alert("Votre message nous a bien été envoyé");
    })