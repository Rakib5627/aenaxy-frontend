import math1 from "../assets/math1.png"
import math2 from "../assets/math2.png"
import math3 from "../assets/math3.png"
import math4 from "../assets/math4.png"

export const data = [
    {
        question: "Which describe you best?",
        additional: "This will help us personalize your experience.",
        options:[ " 🧑‍🎓  Student", " 👨‍💻  Professional", " 👨🏻‍💼  Parent", " 🙎🏼  Lifelong Learner", " 👩🏼‍🏫  Teacher", " 🧑🏻‍💼  Other"],
       
    },
    {
        question: "Which are you most interested in?",
        additional: "Choose just one. This will help us get you started (But won't limit your experience).",
        options:[" 📈 Learning specific skills to advance my career", " 🌎 Exploring new topics I am interested in", " 📚 Refreshing my math foundations", " 🎯 Exercising my brain to stay sharp" , " 👀 Something else"],
       
    },
    
];

export const mathLevel = [
    {
        question: "What is your math comfort level?",
        additional: "Choose the highest level you feel comfort in - you can always adjust later",
        options: [math1, math2, math3, math4],
        Category: [ "Arithmetic", "Basic Algebra" , "Intermediate Algebra", "Calculus"],
        level : ["Introductory" , "Fundamental" , "Intermediate" , "Advance"]
    },
]