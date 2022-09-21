const submit = document.querySelector(".submit-btn")
const card = document.querySelector(".card")
const thanksCard = document.querySelector(".thank-you-card")
const score = document.querySelectorAll(".score")

submit.addEventListener('click', () => {
    card.style.display ="none"
    thanksCard.style.display = "flex"
})

//upon clicking on a score, add active class

//if any other score is already active, remove active 

score.forEach(element => {
    console.log(element)
});