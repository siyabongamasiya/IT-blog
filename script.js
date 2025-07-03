

const renderProblem = (title,text) => {
    const challengesSection = document.getElementById("challenges-section")
    const problem = document.createElement("div")
    problem.innerHTML = `<h3 id="challenge-title">${title}</h3>
        <p class="challenge-content">${text}</p>`
    problem.classList.add("challenge")
    challengesSection.appendChild(problem)
}

function logout(){
    alert("This would normally log you out")
}

/// Challenge 1
const titleOne = "1. Workload"
const descriptionOne = "IT staff are overworked and lack time for training, which keeps them stuck with outdated skills. Automation and better management can help."
renderProblem(titleOne, descriptionOne)

// Challenge 2
const titleTwo = "2. Cybersecurity"
const descriptionTwo = "Cyberattacks are rising, but there’s a huge shortage of skilled cybersecurity professionals. Companies must train existing staff to build strong internal teams."
renderProblem(titleTwo, descriptionTwo)

// Challenge 3
const titleThree = "3. Skills Gaps"
const descriptionThree = "Most IT teams are missing important skills. This causes delays, stress, and extra costs. Yet many companies still don’t offer enough training. Solution: Invest in staff development."
renderProblem(titleThree, descriptionThree)

// Challenge 4
const titleFour = "4. Digital Transformation"
const descriptionFour = "Technology changes fast. IT teams can’t keep up. Formal, focused training is more effective than casual learning."
renderProblem(titleFour, descriptionFour)

// Challenge 5
const titleFive = "5. Cloud Computing"
const descriptionFive = "Everyone’s moving to the cloud (AWS, Azure, GCP), but not enough experts are available. Cloud skills are in very high demand."
renderProblem(titleFive, descriptionFive)

// Challenge 6
const titleSix = "6. Hiring"
const descriptionSix = "Hiring skilled IT people (especially in cloud and cybersecurity) is hard. Companies should focus on skills, not degrees."
renderProblem(titleSix, descriptionSix)

// Challenge 7
const titleSeven = "7. Budget"
const descriptionSeven = "Training and hiring are often blocked by tight budgets. IT leaders must show how training improves revenue, product delivery, and employee retention."
renderProblem(titleSeven, descriptionSeven)

// Challenge 8
const titleEight = "8. Leadership Support"
const descriptionEight = "Many managers don’t support training—even when the budget allows it. Poor leadership causes low morale and high turnover."
renderProblem(titleEight, descriptionEight)

// Challenge 9
const titleNine = "9. Analytics and Data"
const descriptionNine = "Data is growing fast. Companies need people who can manage and analyze data, not just store it. Cloud platforms help, but skills are essential."
renderProblem(titleNine, descriptionNine)

// Challenge 10
const titleTen = "10. Automation"
const descriptionTen = "Automating repetitive tasks can reduce workload and improve speed (e.g., in cybersecurity or cloud setup). But you need the right tools and training."
renderProblem(titleTen, descriptionTen)

// Challenge 11
const titleEleven = "11. Project Management"
const descriptionEleven = "Without skilled project managers, projects fail or go over budget. PMP certification is highly valued."
renderProblem(titleEleven, descriptionEleven)

// Challenge 12
const titleTwelve = "12. Career Growth"
const descriptionTwelve = "People leave jobs when they don’t see growth. Offer training, clear career paths, and better leadership to retain staff."
renderProblem(titleTwelve, descriptionTwelve)
