

const renderProblem = (title,text) => {
    const challengesSection = document.getElementById("challenges-section")
    const problem = document.createElement(`<div>
    <h2 id="challenges-title">${title}</h2>
        <p class="challenges-content">
        ${text}
        </p>
    </div>`)

    challengesSection.appendChild(problem)
}

const  titleOne = "1. Limited Job Opportunities"
const descriptionOne = ""

/**
 1. Limited Job Opportunities
Tech ecosystems are still developing in many African countries.
High demand exists in some cities (e.g. Lagos, Nairobi, Cape Town), but opportunities are scarce in rural or less-developed areas.
Oversupply of junior-level developers with few mid/senior mentorship positions.
🔹 Example: A skilled web developer in Malawi or Lesotho may struggle to find local tech jobs despite high competence.
2. Low Pay and Exploitation
Salaries are often far below global averages for similar roles.
Freelancers face unfair payment practices on platforms like Upwork or Fiverr.
Local employers may underpay, claiming lack of budget or offering "experience" instead of fair compensation.
🔹 A React Native developer with 3 years of experience in Kenya might earn less than a beginner in Europe.
3. Unreliable Internet and Power Supply
Many countries suffer from frequent power cuts (load shedding) and slow or unstable internet.
Hinders remote work, online learning, deployments, and video calls.
🔹 In places like Nigeria and Zimbabwe, developers often rely on mobile data or generators.
4. Limited Access to Modern Tech and Tools
Lack of credit cards or local currency support makes it hard to buy premium tools (e.g., GitHub Copilot, Figma Pro).
Outdated hardware and software still common in some offices or schools.
Cloud services (AWS, GCP, Azure) may be too expensive or hard to bill locally.
5. Skills Gap and Quality Education
Many universities teach theory-heavy, outdated content.
Few institutions emphasize practical, real-world projects or soft skills.
Self-taught devs struggle to find mentors or structured learning paths.
🔹 Bootcamps like ALX or Andela help, but not everyone gets in or finishes.
6. Lack of Mentorship and Career Growth
Many work in small teams or as solo devs with no senior guidance.
Hard to level up into architecture, DevOps, or leadership roles.
Few local tech events, meetups, or communities outside big cities.
7. Visa and Global Work Restrictions
Even with remote jobs, African IT pros often face visa rejections, slow payments, or restrictions on platforms like PayPal or Stripe.
Difficult to attend international tech conferences or get global exposure.
8. Language and Communication Barriers
Many global jobs require strong English communication and soft skills.
In francophone and lusophone countries, language limits access to English-based resources and opportunities.
9. Gender Inequality and Discrimination
Women in tech face extra barriers — lack of role models, discrimination, and fewer networking opportunities.
Stereotypes still persist in some work cultures.
🔹 Women make up less than 30% of tech professionals in most African countries.
10. Cybersecurity Risks and Outdated Policies
Many work in companies with poor cybersecurity practices.
Governments often lag behind in tech regulations or data privacy enforcement.
IT pros are left to “figure it out” in risky environments.
 */