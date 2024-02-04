import React, { useId, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const QuizComponent = ({ name, answers = [], correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState('');
  const id = useId()

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      setResult('回答正确！🎉');
    } else {
      setResult('回答错误，请再试一次。');
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 m-12 border rounded-md shadow-md">
      <h2 className="py-2 text-2xl font-bold mb-4 flex items-center justify-center">
        <span role="img" aria-label="question mark" className="mr-2">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 h-7 w-7" />
        </span>
        <span>是时候做个测验了！</span>
      </h2>
      <legend class="text-sm font-semibold leading-6 text-gray-900">{name}</legend>
      <div class="mt-6 space-y-4">
        {
          answers.map((answer, index) => <div key={index} class="flex items-center gap-x-3">
            <input
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
              id={index}
              name={`push-notifications${id}`}
              type="radio"
              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label for={index} class="block text-sm font-medium leading-6 text-gray-900">{answer}</label>
          </div>)
        }
      </div>
      <div className="mt-4 text-right">
        <button onClick={checkAnswer} className="px-3 py-1.5 bg-blue-500 text-white rounded-md">
          检查答案
        </button>
      </div>
      {result && (
        <div className={`mt-4 text-lg font-semibold ${result.includes('正确') ? 'text-green-500' : 'text-red-500'}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
