import React, { useState } from 'react';

const questions = [
  {
    question: "What is your skin type?",
    options: ["Oily", "Dry", "Combination", "Normal", "Sensitive"],
  },
  {
    question: "What are your main skincare goals?",
    options: ["Hydration", "Acne Control", "Anti-Aging", "Brightening", "Soothing"],
  },
  {
    question: "How would you describe your lifestyle?",
    options: ["Active", "Busy/On-the-go", "Relaxed", "Night Owl", "Minimalist"],
  },
  {
    question: "What is your monthly skincare budget?",
    options: ["<$25", "$25-$50", "$50-$100", "$100+"],
  },
];

export default function SkinQuiz({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, option];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div>
      <h2>Step {step + 1} of {questions.length}</h2>
      <p>{questions[step].question}</p>
      {questions[step].options.map((option) => (
        <button key={option} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}