import React, { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import NewLogo from '../../Images/NewLogo.png';
import noright from '../../Signs/noright.jpg';
import O1 from '../../../QuestionsSigns/Q1/O1.png'
import O2 from '../../../QuestionsSigns/Q1/O2.png'
import O3 from '../../../QuestionsSigns/Q1/O3.png'
import O4 from '../../../QuestionsSigns/Q1/O4.png'
import O21 from '../../../QuestionsSigns/Q2/O21.png'
import O22 from '../../../QuestionsSigns/Q2/O22.png'
import O23 from '../../../QuestionsSigns/Q2/O23.png'
import O24 from '../../../QuestionsSigns/Q2/O24.png'
import O31 from '../../../QuestionsSigns/Q3/O31.png'
import O32 from '../../../QuestionsSigns/Q3/O32.png'
import O33 from '../../../QuestionsSigns/Q3/O33.png'
import O34 from '../../../QuestionsSigns/Q3/O34.png'
import O41 from '../../../QuestionsSigns/Q4/O41.png'
import O42 from '../../../QuestionsSigns/Q4/O42.png'
import O43 from '../../../QuestionsSigns/Q4/O43.png'
import O44 from '../../../QuestionsSigns/Q4/O44.png'
import O51 from '../../../QuestionsSigns/Q5/O51.png'
import O52 from '../../../QuestionsSigns/Q5/O52.png'
import O53 from '../../../QuestionsSigns/Q5/O53.png'
import O54 from '../../../QuestionsSigns/Q5/O54.png'
import O61 from '../../../QuestionsSigns/Q6/O61.png'
import O62 from '../../../QuestionsSigns/Q6/O62.png'
import O63 from '../../../QuestionsSigns/Q6/O63.png'
import O64 from '../../../QuestionsSigns/Q6/O64.png'
import O71 from '../../../QuestionsSigns/Q7/O71.png'
import O72 from '../../../QuestionsSigns/Q7/O72.png'
import O73 from '../../../QuestionsSigns/Q7/O73.png'
import O74 from '../../../QuestionsSigns/Q7/O74.png'
import O81 from '../../../QuestionsSigns/Q8/O81.png'
import O82 from '../../../QuestionsSigns/Q8/O82.png'
import O83 from '../../../QuestionsSigns/Q8/O83.png'
import O84 from '../../../QuestionsSigns/Q8/O84.png'
import O91 from '../../../QuestionsSigns/Q9/O91.png'
import O92 from '../../../QuestionsSigns/Q9/O92.png'
import O93 from '../../../QuestionsSigns/Q9/O93.png'
import O94 from '../../../QuestionsSigns/Q9/O94.png'
import O101 from '../../../QuestionsSigns/Q10/O101.png'
import O102 from '../../../QuestionsSigns/Q10/O102.png'
import O103 from '../../../QuestionsSigns/Q10/O103.png'
import O104 from '../../../QuestionsSigns/Q10/O104.png'
import { set, setSeconds } from 'date-fns';
export default function App() {
	const questions = [
		{   
			questionId: 1,
			questionText: 'Select the sign of “Road is closed ahead” ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O21}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O22}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O23}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O24}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{  
			questionId: 2,
			questionText: 'Select the sign of “No entry”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O1}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O2}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O3}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O4}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 3,
			questionText: 'Select the sign of “Slowdown” ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O31}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O32}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O33}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O34}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{
			questionId: 4,
			questionText: 'Select the sign of “No entry for vehicles exceeding width more than 8’-6” ” ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O41}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O42}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O43}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O44}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 5,
			questionText: [<img className="img-responsive" src={noright}  alt="logo" width={"50px"} height={"50px"} />,'     this sign means ?'],
			answerOptions: [
				{ answerText: 'RIGHT TURN IS ALLOWED', isCorrect: false },
				{ answerText: 'CHANGING TO THE RIGHT LANE IS PROHIBITE', isCorrect: false },
				{ answerText: 'U TURN IS PROHIBITED', isCorrect: false },
				{ answerText: 'RIGHT TURN IS PROHIBITED', isCorrect: true },
			],
		},
		{ 
			questionId: 6,
			questionText: 'Select the sign of “Minor cross road from left” ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O51}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O52}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O53}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O54}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 7,
			questionText: 'Select the sign of “Two-way traffic”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O61}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O62}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O63}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O64}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 8,
			questionText: 'Select the sign of “Compulsory roundabout”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O71}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O72}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O73}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O74}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 9,
			questionText: 'Select the sign of “other dangers”   ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O81}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O82}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O83}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O84}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 10,
			questionText: 'Select the sign of “Honking horn prohibited” ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O81}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O82}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O84}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O83}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },

			],
		},
		{ 
			questionId: 11,
			questionText: 'Select the sign of “Slippery road”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O91}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O92}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O93}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O94}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 12,
			questionText: 'Select the sign of “Uneven road”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O91}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O94}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O92}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O93}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				
			],
		},
		{ 
			questionId: 14,
			questionText: ['If you are trying to overtake the vehicle in front of you and the vehicle in front is not giving way, then you?'],
			answerOptions: [
				{ answerText: 'Always use the horn', isCorrect: false },
				{ answerText: 'Keep a foot distance from the vehicle in front and use the horn', isCorrect: false },
				{ answerText: 'Wait for the right time to overtake', isCorrect: true },
				{ answerText: 'Use indigators', isCorrect: false },
			],
		},
		{ 
			questionId: 15,
			questionText: ['On which side should an oncoming vehicle pass on a two-way street?'],
			answerOptions: [
				{ answerText: 'Right side', isCorrect: false },
				{ answerText: 'Any side', isCorrect: false },
				{ answerText: 'Left side', isCorrect: true },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{ 
			questionId: 16,
			questionText: ['Which lane of the road should a motorcyclist use?'],
			answerOptions: [
				{ answerText: 'Right Lane', isCorrect: false },
				{ answerText: 'Any Lane', isCorrect: false },
				{ answerText: 'Left Lane', isCorrect: true },
				{ answerText: 'Center Lane', isCorrect: false },
			],
		},
		{ 
			questionId: 17,
			questionText: ['Under which section of the Motor Vehicle Ordinance a motorcyclist is required to wear a helmet?'],
			answerOptions: [
				{ answerText: '89-A', isCorrect: true },
				{ answerText: '89-B', isCorrect: false },
				{ answerText: '89-C', isCorrect: false },
				{ answerText: '90-A', isCorrect: false },
			],
		},
		{ 
			questionId: 18,
			questionText: ['What is meant by stop line?'],
			answerOptions: [
				{ answerText: 'Pedestrian crossing space', isCorrect: false },
				{ answerText: 'To pass a motorcycle', isCorrect: false },
				{ answerText: 'Stopping at a traffic signal', isCorrect: true },
				{ answerText: 'Nothing', isCorrect: false },
			],
		},
		{ 
			questionId: 19,
			questionText: ['If the red light of the traffic signal is burning, where should the car be parked?'],
			answerOptions: [
				{ answerText: 'One foot from the stop line', isCorrect: false },
				{ answerText: 'At the zebra crossing', isCorrect: false },
				{ answerText: 'Behind the stop line', isCorrect: true },
				{ answerText: 'Anywhere', isCorrect: false },
			],
		},
		{ 
			questionId: 20,
			questionText: 'Select the sign of “U Turn is prohibited”  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O101}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O102}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O103}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O104}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [scoree, setScoree] = useState(0);
	const [value, setValue] = useState(false);
	const [list, setList] = useState(questions);
	const [clicked, setClikced] = useState('');
	const [sec, setSec] = useState(59);
    const [min, setMin] = useState(0);
	const [m, setM] = useState(0);
	
	var timer;
	useEffect(()=>{
		timer=setInterval(()=>{
			setSec(sec-1)
			if(sec===0){
				setMin(min-1)
				setSec(60);
			}
			if(min===0& sec===0){
				setShowScore(true)
			}
		},1000)
		return()=>clearInterval(timer);
	})
	const handleNextOption = () => {
		const nextQuestion=currentQuestion+1
		setCurrentQuestion(nextQuestion)
		setClikced('')
		setM(0);
		setScoree(scoree+1)
		console.log(value)
	}
	const handleRemoveItem = (e) => {
		const id = e
		console.log(id)
		 setList(list.filter(item => item.questionId!== id));
		 console.log("len"+list.length)
		 if(list.length===10){
			setShowScore(true)
		}
	   };
	const handleAnswerOptionClick = (isCorrect, e) => {
		if(!m){
		if (isCorrect) {
			setM(m + 1);
			setScore(score+1)
		}
	}
       setClikced(e)
		console.log(isCorrect)
		console.log(clicked)	
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
	  useEffect(()=>{
	  },[scoree])
  useEffect(() => {
    const mountArray = shuffleArray(questions);
    setList(mountArray);
	shuffleArray(questions[currentQuestion].answerOptions);
	setValue('true')
	setClikced('')
  },[value, showScore]);
  function handleShuffle() {
    const changes = shuffleArray([...list]);
    setList(changes);
    console.log("Shuffle", list);
  }
  const handlePlayAgain = () => {
	setScore(0);
	setSec(59)
	setMin(0)
	setCurrentQuestion(0)
	setList(questions)
	setShowScore(false)
}

	return (
		<div className='app'>
			
      <img width="90px"
        height="90px"
        style={{ float: "left", marginTop: "15px" }}
        className="img-responsive"
        src={NewLogo}
        
        alt="logo" />
    
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of 10
					<Button onClick={handlePlayAgain} variant="contained" color="primary">Play Again</Button>
				</div>
			) : (
				<>
				
					<div className='question-section'>
					<div className='question-count'>
				    <span>Time remaining {min? "0"+min: min}:{sec}</span>
					</div>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/10
						</div>
					
						<div className='question-text'>{list[currentQuestion].questionText}</div>
						
					</div>
					<div className='answer-section'>
						{list[currentQuestion].answerOptions.map((answerOption, i) => {
							return <Button key={i} className={clicked === answerOption.answerText ? "btn" : "option"} onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</Button>
                     })}
					</div>
					<div className='nextBtn'>
						<Button className='nextBtn'variant="contained" color="success" disabled={!clicked} onClick={()=>{{handleShuffle()}{handleNextOption()}{handleRemoveItem(list[currentQuestion].questionId)}}}> next </Button>
					</div>
					
				</>
			)}
		</div>
	);
}
