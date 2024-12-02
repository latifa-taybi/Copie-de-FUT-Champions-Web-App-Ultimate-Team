const add = document.getElementById("add");
const position = document.getElementById("position");

//-------------------------Formulaire de staatistiques des joueurs--------------------------------------//

function toggleStatistique() {
    const statistiqueGK = document.querySelector(".statistiqueGK")
    const statistique = document.querySelector(".statistique")
    if (position.value === "GK") {
        statistique.style.display = 'none';
        statistiqueGK.style.display = 'grid';
    } else {
        statistiqueGK.style.display = 'none';
        statistique.style.display = 'grid';
    }
}
position.addEventListener('change', toggleStatistique)



const counter = {
    "GK": 0,
    "CMR": 0,
    "CML": 0,
    "CM": 0,
    "CBL": 0,
    "CBR": 0,
    "LB": 0,
    "RB": 0,
    "LW": 0,
    "RW": 0,
    "ST": 0,
}

// --------------------------------------les inputs-------------------------------------------------------//
const photo = document.getElementById("photo");
const Nationalite = document.getElementById("Nationalite");
const flag = document.getElementById("flag");
const logo = document.getElementById("logo");
const rating = document.getElementById("rating");



const diving = document.getElementById("diving");
const handling = document.getElementById("handling");
const kicking = document.getElementById("kicking");
const reflexes = document.getElementById("reflexes");
const speed = document.getElementById("speed");
const positioning = document.getElementById("positioning");

const pace = document.getElementById("pace");
const shooting = document.getElementById("shooting");
const passing = document.getElementById("passing");
const dribbling = document.getElementById("dribbling");
const defending = document.getElementById("defending");
const physical = document.getElementById("physical");

function validationForm() {
    if (position==='GK'){
        const statsGK = [diving, handling, kicking, reflexes, speed, positioning];
        for (let i = 0; i < statsGK.length; i++)  {
            if (statsGK[i].value < 1 || statsGK[i].value > 99) {
                alert("Toutes les valeurs doivent être entre 1 et 99 !");
                return false;
            }
        } 
    }else{
        const stats = [pace, shooting, passing, dribbling, defending, physical];
        for (let i = 0; i < stats.length; i++)  {
            if (stats[i].value < 1 || stats[i].value > 99) {
                alert("Toutes les valeurs doivent être entre 1 et 99 !");
                return false;
            }
        }
    }
    return true; 

}


//-----------------------------Fonction d'ajout des joureurs---------------------------------------------//

function ajout(){
    const name = document.getElementById("name");
    const nomExiste = document.querySelectorAll('.nomJoueur');
    for (let i = 0; i < nomExiste.length; i++) {
        if (nomExiste[i].textContent === name) {
            alert("le nom existe deja, saisir un autre nom");
            return;
        }
    }

    counter[position.value]++;
    if (counter[position.value] > 1) {
        const carteReserve = document.querySelectorAll(".carteReserve")
        for (let i = 0; i < carteReserve.length; i++) {
            const card = carteReserve[i];
            const infos = card.querySelector(".infos")
            const ratingJoueur = infos.querySelector('.ratingJoueur')
            const positionJoueur = infos.querySelector('.positionJoueur')
            const flagImg = infos.querySelector('.flagImg')
            const logoImg = infos.querySelector('.logoImg')

            const img = card.querySelector(".img")
            const photoImg = img.querySelector('.photoImg')

            const nomStat = card.querySelector(".nomStat")
            const nomJoueur = nomStat.querySelector('.nomJoueur')

            const button=card.querySelector(".button")
            const modifier=button.querySelector(".edit")
            const supprimer=button.querySelector(".supprimer")

            if (ratingJoueur.textContent === '' &&
                positionJoueur.textContent === '' &&
                nomJoueur.textContent === '' ){
                modifier.src = './images/pen.png'
                supprimer.src = './images/supprimer (1).png'
                ratingJoueur.textContent = rating.value
                positionJoueur.textContent = position.value
                flagImg.src = flag.value
                logoImg.src = logo.value
                photoImg.src = photo.value
                nomJoueur.textContent = name.value

                if (position.value === "GK") {
                    const stats2 = card.querySelector(".stats2")
                    const divingJoueur = stats2.querySelector('.divingJoueur')
                    const handlingJoueur = stats2.querySelector('.handlingJoueur')
                    const kickingJoueur = stats2.querySelector('.kickingJoueur')
                    const reflexesJoueur = stats2.querySelector('.reflexesJoueur')
                    const speedJoueur = stats2.querySelector('.speedJoueur')
                    const positioningJoueur = stats2.querySelector('.positioningJoueur')

                    divingJoueur.textContent = diving.value;
                    handlingJoueur.textContent = handling.value;
                    kickingJoueur.textContent = kicking.value;
                    reflexesJoueur.textContent = reflexes.value;
                    speedJoueur.textContent = speed.value;
                    positioningJoueur.textContent = positioning.value;
                
                } else {
                    const stats1 = card.querySelector(".stats1")
                    const paceJoueur = stats1.querySelector('.paceJoueur')
                    const shootingJoueur = stats1.querySelector('.shootingJoueur')
                    const passingJoueur = stats1.querySelector('.passingJoueur')
                    const dribblingJoueur = stats1.querySelector('.dribblingJoueur')
                    const defendingJoueur = stats1.querySelector('.defendingJoueur')
                    const physicalJoueur = stats1.querySelector('.physicalJoueur')

                    paceJoueur.textContent = pace.value;
                    shootingJoueur.textContent = shooting.value;
                    passingJoueur.textContent = passing.value;
                    dribblingJoueur.textContent = dribbling.value;
                    defendingJoueur.textContent = defending.value;
                    physicalJoueur.textContent = physical.value;
                    
                    
                }
                document.querySelector(".form").reset();
                return;
            }
        }
    } else {

        const carte = document.getElementById("carte" + position.value)
        const infos = carte.querySelector(".infos")
        const ratingJoueur = infos.querySelector('.ratingJoueur')
        const positionJoueur = infos.querySelector('.positionJoueur')
        const flagImg = infos.querySelector('.flagImg')
        const logoImg = infos.querySelector('.logoImg')

        const img = carte.querySelector(".img")
        const photoImg = img.querySelector('.photoImg')

        const nomStat = carte.querySelector(".nomStat")
        const nomJoueur = nomStat.querySelector('.nomJoueur')

        const stats = carte.querySelector(".stats")
        const button=carte.querySelector(".button")
        const modifier=button.querySelector(".edit")
        const supprimer=button.querySelector(".supprimer")

        ratingJoueur.textContent = rating.value;
        positionJoueur.textContent = position.value
        flagImg.src = flag.value;
        logoImg.src = logo.value;
        photoImg.src = photo.value;
        nomJoueur.textContent = name.value;
        modifier.src = './images/pen.png'
        supprimer.src = './images/supprimer (1).png'

        if (position.value === "GK") {
            const divingJoueur = stats.querySelector('.divingJoueur')
            const handlingJoueur = stats.querySelector('.handlingJoueur')
            const kickingJoueur = stats.querySelector('.kickingJoueur')
            const reflexesJoueur = stats.querySelector('.reflexesJoueur')
            const speedJoueur = stats.querySelector('.speedJoueur')
            const positioningJoueur = stats.querySelector('.positioningJoueur')

            divingJoueur.textContent = diving.value;
            handlingJoueur.textContent = handling.value;
            kickingJoueur.textContent = kicking.value;
            reflexesJoueur.textContent = reflexes.value;
            speedJoueur.textContent = speed.value;
            positioningJoueur.textContent = positioning.value;
        } else {
            const paceJoueur = stats.querySelector('.paceJoueur')
            const shootingJoueur = stats.querySelector('.shootingJoueur')
            const passingJoueur = stats.querySelector('.passingJoueur')
            const dribblingJoueur = stats.querySelector('.dribblingJoueur')
            const defendingJoueur = stats.querySelector('.defendingJoueur')
            const physicalJoueur = stats.querySelector('.physicalJoueur')

            paceJoueur.textContent = pace.value;
            shootingJoueur.textContent = shooting.value;
            passingJoueur.textContent = passing.value;
            dribblingJoueur.textContent = dribbling.value;
            defendingJoueur.textContent = defending.value;
            physicalJoueur.textContent = physical.value;
        }
        document.querySelector(".form").reset();
    }
};


add.addEventListener('click',(event)=>{
    event.preventDefault();
    if(add.textContent === "modifier"){
        add.textContent = "ajouter"
    }
    if (!validationForm()) {
        return;
    }
    ajout();
})

// -----------------------Fontion de suppression d'un joueur----------------------------------------------//

function suppression(event){
    const joueur=event.target.parentElement.parentElement.parentElement;
    const name = document.getElementById("name");
    const nameJoueur= joueur.querySelector('.nomJoueur');
    const photoJoueur = joueur.querySelector('.photoImg');
    const flagJoueur= joueur.querySelector('.flagImg');
    const logoJoueur  = joueur.querySelector('.logoImg');
    const ratingJoueur  = joueur.querySelector('.ratingJoueur');
    const positionJoueur=joueur.querySelector('.positionJoueur');
    const button=joueur.querySelector(".button");
    const modifier=button.querySelector(".edit");
    const supprimer=button.querySelector(".supprimer");

    counter[positionJoueur.textContent]--;

    nameJoueur.textContent='';
    photoJoueur.src='';
    flagJoueur.src='';
    logoJoueur.src='';
    ratingJoueur.textContent='';
    modifier.src='';
    supprimer.src=''

    if (positionJoueur.textContent === "GK") {
        const divingJoueur = joueur.querySelector(".divingJoueur");
        const handlingJoueur = joueur.querySelector(".handlingJoueur");
        const kickingJoueur = joueur.querySelector(".kickingJoueur");
        const reflexesJoueur = joueur.querySelector(".reflexesJoueur");
        const speedJoueur = joueur.querySelector(".speedJoueur");
        const positioningJoueur = joueur.querySelector(".positioningJoueur");

        divingJoueur.textContent='';
        handlingJoueur.textContent='';
        kickingJoueur.textContent='';
        reflexesJoueur.textContent='';
        speedJoueur.textContent='';
        positioningJoueur.textContent='';
        positionJoueur.textContent='';

    } else {
        const paceJoueur = joueur.querySelector(".paceJoueur");
        const shootingJoueur = joueur.querySelector(".shootingJoueur");
        const passingJoueur = joueur.querySelector(".passingJoueur");
        const dribblingJoueur = joueur.querySelector(".dribblingJoueur");
        const defendingJoueur = joueur.querySelector(".defendingJoueur");
        const physicalJoueur = joueur.querySelector(".physicalJoueur");

        paceJoueur.textContent='';
        shootingJoueur.textContent='';
        passingJoueur.textContent='';
        dribblingJoueur.textContent='';
        defendingJoueur.textContent='';
        physicalJoueur.textContent='';
        positionJoueur.textContent='';
    }
}

const delets=document.querySelectorAll('.supprimer')
delets.forEach(supprimer=>{
    supprimer.addEventListener('click',(event)=>{
        event.preventDefault();
        suppression(event);
    })
})

// -----------------------------Fonction de modification d'un joueur----------------------------------// 

const edits=document.querySelectorAll(".edit");
edits.forEach(edit=>{
    edit.addEventListener('click',(event)=>{
        event.preventDefault();
        const joueur = event.target.parentElement.parentElement.parentElement;
        const name = document.getElementById("name");
        const nameJoueur= joueur.querySelector('.nomJoueur').textContent;
        const photoJoueur = joueur.querySelector('.photoImg').src;
        const flagJoueur= joueur.querySelector('.flagImg').src;
        const logoJoueur  = joueur.querySelector('.logoImg').src;
        const ratingJoueur  = joueur.querySelector('.ratingJoueur').textContent;
        const positionJoueur=joueur.querySelector('.positionJoueur').textContent

        name.value = nameJoueur;
        photo.value = photoJoueur;
        flag.value = flagJoueur;
        logo.value = logoJoueur;
        rating.value = ratingJoueur;
        position.value = positionJoueur;
        
        toggleStatistique() 
        if (positionJoueur === "GK") {
            const divingJoueur = joueur.querySelector(".divingJoueur").textContent;
            const handlingJoueur = joueur.querySelector(".handlingJoueur").textContent;
            const kickingJoueur = joueur.querySelector(".kickingJoueur").textContent;
            const reflexesJoueur = joueur.querySelector(".reflexesJoueur").textContent;
            const speedJoueur = joueur.querySelector(".speedJoueur").textContent;
            const positioningJoueur = joueur.querySelector(".positioningJoueur").textContent;

            diving.value=divingJoueur;
            handling.value=handlingJoueur;
            kicking.value=kickingJoueur;
            reflexes.value=reflexesJoueur;
            speed.value=speedJoueur;
            positioning.value=positioningJoueur;
        } else {
            const paceJoueur = joueur.querySelector(".paceJoueur").textContent;
            const shootingJoueur = joueur.querySelector(".shootingJoueur").textContent;
            const passingJoueur = joueur.querySelector(".passingJoueur").textContent;
            const dribblingJoueur = joueur.querySelector(".dribblingJoueur").textContent;
            const defendingJoueur = joueur.querySelector(".defendingJoueur").textContent;
            const physicalJoueur = joueur.querySelector(".physicalJoueur").textContent;

            pace.value=paceJoueur;
            shooting.value=shootingJoueur;
            passing.value=passingJoueur;
            dribbling.value=dribblingJoueur;
            defending.value=defendingJoueur;
            physical.value=physicalJoueur;
        }
        add.textContent = "modifier"
        suppression(event);
    })
})













