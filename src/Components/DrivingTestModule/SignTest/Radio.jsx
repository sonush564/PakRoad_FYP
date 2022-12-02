import React, { useState } from 'react';
import Hump from '../../Signs/Hump.jpg'
import noright from '../../Signs/noright.jpg'
import Radio from '@mui/material/Radio';
export default function QuizFinal() {
	const questions = [
		{
			questionId: 1,
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionId: 2,
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{  
			questionId: 3,
			questionText: [<img className="img-responsive" src={Hump}  alt="logo" width={"50px"} height={"50px"} />,'     Is the sign of ?'],
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{ 
			questionId: 4,
			questionText: 'Who is founder of Iphones?',
			answerOptions: [
				{  answerText: <img className="img-responsive" src={Hump}  alt="logo" width={"100px"} height={"100px"}  />, isCorrect: false },
				{  answerText: <img className="img-responsive" src={Hump}  alt="logo" width={"100px"} height={"100px"}  />, isCorrect: false },
				{  answerText: <img className="img-responsive" src={Hump}  alt="logo" width={"100px"} height={"100px"}  />, isCorrect: false },
				{  answerText: <img className="img-responsive" src={Hump}  alt="logo" width={"100px"} height={"100px"}  />, isCorrect: true },
			],
		},
		{ 
			questionId: 5,
			questionText: [<img className="img-responsive" src={noright}  alt="logo" width={"50px"} height={"50px"} />,'     this sign means ?'],
			answerOptions: [
				{ answerText: 'RIGHT TURN IS ALLOWED', isCorrect: true },
				{ answerText: 'CHANGING TO THE RIGHT LANE IS PROHIBITE', isCorrect: false },
				{ answerText: 'U TURN IS PROHIBITED', isCorrect: false },
				{ answerText: 'RIGHT TURN IS PROHIBITED', isCorrect: false },
			],
		},
	];
	const [newQuestions, setnewQuestions] = useState(questions);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleRemoveItem = (e) => {
		const id = e
		console.log(id)
		 setnewQuestions(newQuestions.filter(item => item.questionId!== id));
	   };

	const handleAnswerOptionClick = (isCorrect) => {
	
	   

		if (isCorrect) {
			setScore(score + 1);
		}

		if(newQuestions.length===1){
			setShowScore(true)
		}
	};
	function shuffleArray(array) {
		let curId = array.length;
		// There remain elements to shuffle
		while (0 !== curId) {
		  // Pick a remaining element
		  let randId = Math.floor(Math.random() * curId);
		  curId -= 1;
		  // Swap it with the current element.
		  let tmp = array[curId];
		  array[curId] = array[randId];
		  array[randId] = tmp;
		}
		return array;
	  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of 4
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questions Remaining {newQuestions.length}/4</span>
						</div>
						<div className='question-text'>{shuffleArray(newQuestions)[currentQuestion].questionText} </div>
					</div>
					
					<div className='answer-section'> 	
                   			{shuffleArray(newQuestions[currentQuestion].answerOptions).map((answerOption) => ( 
							<button className='option'  value={answerOption.answerText || '' } onClick={() => {{handleAnswerOptionClick(answerOption.isCorrect)}{handleRemoveItem(newQuestions[currentQuestion].questionId)}}}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
	
}
