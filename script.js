// ---------- APTITUDE ----------

function getAptitude(){
const aptQuestions = [
{q:"What is 25% of 200?", a:"200×25/100 = 50"},
{q:"If x + 5 = 10, find x.", a:"x=10−5=5"},
{q:"Find speed if distance = 100km and time = 2hr.", a:"S=D/T=100/2=50 km/hr"},
{q:"What is the square of 12?", a:"12²=144"},
{q:"Simplify: 15 + 5 × 2.", a:"15+10=25"},
{q:"What is 10% of 500?", a:"500×10/100=50"},
{q:"If 3x = 21, find x.", a:"x=21/3=7"},
{q:"Find average of 10, 20, 30.", a:"(10+20+30)/3=20"},
{q:"What is 7 × 8?", a:"7×8=56"},
{q:"If a train travels 60km in 1 hour, what is speed?", a:"S=60/1=60 km/hr"}
];

const random = aptQuestions[Math.floor(Math.random()*aptQuestions.length)];

document.getElementById("aptQ").innerHTML =
random.q +
'<br><button onclick="showSolution(\''+random.a+'\')">Show Solution</button>' +
'<p id="solution" style="display:none;"></p>';
}

function showSolution(ans){
const sol = document.getElementById("solution");
sol.style.display = "block";
sol.innerText = "Answer: " + ans;
}


// ---------- HR ----------

function getQuestion(){
const hrQuestions = [
{q:"Tell me about yourself", a:"Brief intro: education + skills + goal"},
{q:"Why should we hire you?", a:"Skills + value to company"},
{q:"What are your strengths?", a:"2–3 strengths with examples"},
{q:"What are your weaknesses?", a:"One weakness + improvement"},
{q:"Describe a challenge you faced", a:"Problem → action → result"},
{q:"Where do you see yourself in 5 years?", a:"Career growth + goals"},
{q:"Why do you want to work here?", a:"Company + your interest"},
{q:"Tell me about teamwork experience", a:"Role + contribution"},
{q:"How do you handle pressure?", a:"Stay calm + prioritize"},
{q:"What motivates you?", a:"Learning + achievement"}
];

const random = hrQuestions[Math.floor(Math.random()*hrQuestions.length)];

document.getElementById("randomQ").innerHTML =
random.q +
'<br><button onclick="showHR(\''+random.a+'\')">Show Solution</button>' +
'<p id="hrSolution" style="display:none;"></p>';
}

function showHR(ans){
const sol = document.getElementById("hrSolution");
sol.style.display = "block";
sol.innerText = ans;
}