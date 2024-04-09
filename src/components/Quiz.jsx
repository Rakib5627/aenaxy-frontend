import { useState } from "react";
import { data } from '../assets/data';
import { mathLevel } from "../assets/data";
import right from "../assets/images/right-place.png";
import way from "../assets/images/way.png"

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [answeredDataQuestions, setAnsweredDataQuestions] = useState(false);
    const [showMathLevelQuestions, setShowMathLevelQuestions] = useState(false);
    const [showCompletionText, setShowCompletionText] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const changeQuestion = () => {
        if (!answeredDataQuestions) {
            if (currentQuestion === data.length - 1) {
                setAnsweredDataQuestions(true);
            }
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            if (!showMathLevelQuestions) {
                setShowMathLevelQuestions(true);
            } else if (currentQuestion === data.length + mathLevel.length - 1) {
                setShowCompletionText(true);
                setShowLoader(true);
                setTimeout(() => {
                    setShowLoader(false);
                    setCurrentQuestion(currentQuestion + 1);
                }, 2000); // Simulating loading for 2 seconds
            } else {
                setCurrentQuestion(currentQuestion + 1);
                setClickedOption(0);
            }
        }
    }

    return (
        <div>
            <div className="">
                {!answeredDataQuestions ? (
                    <div className="max-w-screen-md mx-auto flex flex-col">
                        <div className="question text-center rounded mt-10 p-4 mb-4">

                            <p id="question-txt" className="text-2xl font-semibold text-gray-800">{data[currentQuestion].question}</p>
                            <p className="text-sm text-gray-700">{data[currentQuestion].additional}</p>
                        </div>
                        <div className="flex flex-col space-y-4 mx-2">
                            {data[currentQuestion].options.map((option, i) => (
                                <button
                                    className={`text-left px-4 py-2 my-2 border border-gray-200 rounded-md ${clickedOption == i + 1 ? "shadow-lg inset-8" : "text-gray-800 hover:shadow-md"}`}
                                    key={i}
                                    onClick={() => setClickedOption(i + 1)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <input className={`px-3 py-1 rounded mx-auto mt-6 text-white ${(!answeredDataQuestions && clickedOption === 0) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`} type="button" value="Continue" onClick={changeQuestion} disabled={!answeredDataQuestions && clickedOption === 0} />
                    </div>
                ) : !showMathLevelQuestions ? (
                    <div className="max-w-screen-lg mx-auto flex flex-col">
                        <div className="md:flex items-center mx-2 md:mx-4">
                            <img src={right} alt="" className="md:w-72 lg:w-full" />
                            <div className="">
                                <p className=" text-gray-800 font-bold text-2xl mb-4">You are in the right place</p>
                                <p className="text-sm text-gray-700">Brilliant gets you hands-onto help improve your professional skills and knowledge. You will interact concepts and solve fun problems in math, science, and computer science.</p>
                            </div>
                        </div>
                        <input className="bg-black text-white px-3 py-1 rounded mx-auto mt-6" type="button" value="Continue" onClick={changeQuestion} />
                    </div>
                ) : !showCompletionText ? (
                    <div className="max-w-screen-lg mx-auto flex flex-col">
                        <div className="question text-center mt-10 rounded p-4 mb-4">

                            <div>
                                <p className="text-2xl font-semibold text-gray-800">{mathLevel[currentQuestion - data.length].question}</p>
                            </div>
                            <p className="text-sm text-gray-700">{mathLevel[currentQuestion - data.length].additional}</p>

                        </div>
                        <div className="grid grid-cols-2 md:gap-4 lg:grid-cols-4 mx-2 md:mx-16 lg:mx-0">
                            {mathLevel[currentQuestion - data.length].options.map((image, i) => (
                                <button
                                    key={i}
                                    onClick={() => setClickedOption(i + 1)}
                                    className={`flex justify-between items-center px-4 py-2 my-2 border border-gray-200 rounded-md ${clickedOption === i + 1 ? "shadow-lg border-yellow-300 border-2" : "text-gray-800 hover:shadow-md"}`}
                                >
                                    <div className="flex flex-col items-center w-40">
                                        <img src={image} alt={`Math Level ${i + 1}`} className="w-24 " />
                                        <p className="text-center font-medium mt-2 text-gray-700">{mathLevel[currentQuestion - data.length].Category[i]}</p>
                                        <p className="text-center font-medium  mt-1 text-gray-500">{mathLevel[currentQuestion - data.length].level[i]}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {currentQuestion === data.length + mathLevel.length - 1 && (
                            <input className={`px-3 py-1 rounded mx-auto mt-6 text-white ${((!answeredDataQuestions && !showMathLevelQuestions) || (showMathLevelQuestions && clickedOption === 0)) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`} type="button" value="Continue" onClick={changeQuestion}
                                disabled={(!answeredDataQuestions && !showMathLevelQuestions) || (showMathLevelQuestions && clickedOption === 0)}
                            />
                        )}
                    </div>
                ) : (
                    <div className="max-w-screen-lg mx-auto flex flex-col">
                        {showLoader ? (
                            <div className="text-center text-lg mt-20 lg:mt-40">
                                <span className="loading loading-spinner text-warning loading-lg"></span>
                                <p className="mt-6 text-lg font-bold">Finding best path recommendations for you based on <br /> your responses.</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mt-16">
                                    <p className="text-2xl font-semibold text-gray-800">Learning paths based on your answer.</p>
                                    <p className="text-sm font-medium text-gray-500 mt-4"> Choose one to get stared. You can switch anytime. </p>
                                    <div className="flex items-center text-xs md:text-sm gap-2 md:gap-4 mt-12">
                                        <div className="flex  flex-col-reverse md:flex-row items-center indicator border-2 border-gray-200 p-3 gap-4">
                                            <span className="indicator-item indicator-center badge badge-warning font-medium">Most Popular</span>
                                            <p className="font-medium"><span className="font-bold">Foundational maths</span> build your functional skills on algebra, geometry, and probability</p>
                                            <img src={way} alt="" className=" w-20 md:w-40" />
                                        </div>
                                        <div className="flex flex-col-reverse md:flex-row items-center border-2 border-gray-200 p-3 gap-4">
                                            <p className="font-medium"><span className="font-bold">Mathematical thinking </span>build your functional skills on algebra, geometry, and probability</p>
                                            <img src={way} alt="" className=" w-20 md:w-40" />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
