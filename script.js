

const renderProblem = (title,text) => {
    const challengesSection = document.getElementById("challenges-section")
    const problem = document.createElement("div")
    problem.innerHTML = `<div>
    <h3 id="challenge-title">${title}</h3>
        <p class="challenge-content">
        ${text}
        </p>
    </div>`
    problem.classList.add("challenge")
    challengesSection.appendChild(problem)
}

function logout(){
    alert("This would normally log you out")
}

//first challenge
const  titleOne = "1. Limited Job Opportunities"
const descriptionOne = "Tech ecosystems are still developing in many African countries.High demand exists in some cities (e.g. Lagos, Nairobi, Cape Town), but opportunities are scarce in rural or less-developed areas.Oversupply of junior-level developers with few mid/senior mentorship positions."
renderProblem(titleOne,descriptionOne)

//first challenge
const  titleTwo = "2. Limited Job Opportunities 2"
const descriptiontwo = "Tech ecosystems are still developing in many African countries.High demand exists in some cities (e.g. Lagos, Nairobi, Cape Town), but opportunities are scarce in rural or less-developed areas.Oversupply of junior-level developers with few mid/senior mentorship positions."
renderProblem(titleTwo,descriptiontwo)

//first challenge
const  titleThree = "3. Limited Job Opportunities 3"
const descriptionThree = "Tech ecosystems are still developing in many African countries.High demand exists in some cities (e.g. Lagos, Nairobi, Cape Town), but opportunities are scarce in rural or less-developed areas.Oversupply of junior-level developers with few mid/senior mentorship positions."
renderProblem(titleThree,descriptionThree)