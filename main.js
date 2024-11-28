

const add=document.getElementById("add");


const position=document.getElementById("position");

function goalkeeper() {

    const statistiqueGK=document.querySelector(".statistiqueGK")
    const statistique=document.querySelector(".statistique")
    if(position.value === "GK"){
        statistique.style.display='none';
        statistiqueGK.style.display='grid';
    }else{
        statistiqueGK.style.display='none';
        statistique.style.display='grid';
    }
}

position.addEventListener('change',goalkeeper)

goalkeeper();


add.addEventListener('click',(event)=>{
    event.preventDefault(); 

    const position=document.getElementById("position");

    const name=document.getElementById("name").value;
    const photo=document.getElementById("photo").value;
    const Nationalité=document.getElementById("Nationalité").value;
    const flag=document.getElementById("flag").value;
    const logo=document.getElementById("logo").value;

    const rating=document.getElementById("rating").value;
    const pace=document.getElementById("pace").value;
    const shooting=document.getElementById("shooting").value;
    const passing=document.getElementById("passing").value;
    const dribbling=document.getElementById("dribbling").value;
    const defending=document.getElementById("defending").value;
    const physical=document.getElementById("physical").value;



    const carte=document.getElementById("carte" + position.value)
    const infos=carte.querySelector(".infos")
    const ratingJoueur=infos.querySelector('.ratingJoueur')
    const positionJoueur=infos.querySelector('.positionJoueur')
    const flagImg=infos.querySelector('#flagImg')
    const logoImg=infos.querySelector('#logoImg')

    const img=carte.querySelector(".img")
    const photoImg=img.querySelector('#photoImg')

    const nomStat=carte.querySelector(".nomStat")
    const nomJoueur=nomStat.querySelector('.nomJoueur')

    const stats=carte.querySelector(".stats")
    const paceJoueur=stats.querySelector('.paceJoueur')
    const shootingJoueur=stats.querySelector('.shootingJoueur')
    const passingJoueur=stats.querySelector('.passingJoueur')
    const dribblingJoueur=stats.querySelector('.dribblingJoueur')
    const defendingJoueur=stats.querySelector('.defendingJoueur')
    const physicalJoueur=stats.querySelector('.physicalJoueur')

    const diving=document.getElementById("diving").value;
    const handling=document.getElementById("handling").value;
    const kicking=document.getElementById("kicking").value;
    const reflexes=document.getElementById("reflexes").value;
    const speed=document.getElementById("speed").value;
    const positioning=document.getElementById("positioning").value;

    const divingJoueur=stats.querySelector('.divingJoueur')
    const handlingJoueur=stats.querySelector('.handlingJoueur')
    const kickingJoueur=stats.querySelector('.kickingJoueur')
    const reflexesJoueur=stats.querySelector('.reflexesJoueur')
    const speedJoueur=stats.querySelector('.speedJoueur')
    const positioningJoueur=stats.querySelector('.positioningJoueur')

    divingJoueur.textContent=diving
    handlingJoueur.textContent=handling
    kickingJoueur.textContent=kicking
    reflexesJoueur.textContent=reflexes
    speedJoueur.textContent=speed
    positioningJoueur.textContent=positioning

    ratingJoueur.textContent=rating
    positionJoueur.textContent=position.value
    flagImg.src=flag
    logoImg.src=logo
    photoImg.src=photo
    nomJoueur.textContent=name
    paceJoueur.textContent=pace
    shootingJoueur.textContent=shooting
    passingJoueur.textContent=passing
    dribblingJoueur.textContent=dribbling
    defendingJoueur.textContent=defending
    physicalJoueur.textContent=physical

    document.querySelector(".form").reset();


    goalkeeper();
    
})
    


