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
			questionText: 'ذیل میں سے آگے سڑک بند ہے کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O21}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O22}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O23}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O24}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{  
			questionId: 2,
			questionText: 'ذیل میں سے داخلہ بند ہے کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O1}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O2}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O3}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O4}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 3,
			questionText: 'ذیل میں سے آہستہ چلنے کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O31}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O32}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O33}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O34}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{
			questionId: 4,
			questionText: 'ذیل میں سے ساڑھے آٹھ فٹ سے زیادہ چوڑی گاڑیوں کا داخل ممنوع ہے کا اشارہ کونسا ہے؟',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O41}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O42}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O43}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O44}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 5,
			questionText: [<img className="img-responsive" src={noright}  alt="logo" width={"50px"} height={"50px"} />,'    اس نشان کا مطلب ہے؟'],
			answerOptions: [
				{ answerText: 'دائیں مڑنے کی اجازت ہے۔', isCorrect: false },
				{ answerText: 'دائیں لین کو تبدیل کرنا ممنوع ہے۔', isCorrect: false },
				{ answerText: 'یو ٹرن ممنوع ہے۔', isCorrect: false },
				{ answerText: 'دائیں مڑنا منع ہے۔', isCorrect: true },
			],
		},
		{ 
			questionId: 6,
			questionText: 'ذیل میں سے چھوٹی سڑک بائیں جانب سے آ کر بڑی سڑک کھول رہی ہے کا اشاہ کونسا ہے؟  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O51}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O52}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O53}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O54}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 7,
			questionText: 'ذیل میں سے دوطرفہ ٹر یفک ہے کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O61}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O62}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O63}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O64}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 8,
			questionText: 'ذیل میں سے لا زمی گول چکر کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O71}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O72}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O73}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O74}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 9,
			questionText: 'ذیل میں سے دیگر خطرات ہیں کا اشارہ کونسا ہے؟ ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O81}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O82}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O83}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O84}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 10,
			questionText: '"ہنر بجانے کی ممانعت" کا نشان منتخب کریں ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O81}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O82}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O84}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O83}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },

			],
		},
		{ 
			questionId: 11,
			questionText: '"سلپری روڈ" کا نشان منتخب کریں ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O91}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O92}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O93}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O94}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
			],
		},
		{ 
			questionId: 12,
			questionText: '"ناہموار سڑک" کا نشان منتخب کریں  ',
			answerOptions: [
				{ answerText: <img className="img-responsive" src={O91}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O94}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: true },
				{ answerText: <img className="img-responsive" src={O92}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				{ answerText: <img className="img-responsive" src={O93}  alt="logo" width={"70px"} height={"70px"} />, isCorrect: false },
				
			],
		},
		{ 
			questionId: 14,
			questionText: ['اگر آپ اپنے سامنے والی گاڑی کو اوور ٹیک کرنے کی کوشش کر رہے ہیں اور سامنے والی گاڑی راستہ نہیں دے رہی ہے تو آپ؟'],
			answerOptions: [
				{ answerText: 'مسلسل ہارن کا استعمال کریں', isCorrect: false },
				{ answerText: 'سامنے والی گاڑی سے ایک فٹ کا فاصلہ رکھیں اور ہارن کا استعمال کریں', isCorrect: false },
				{ answerText: 'اوور ٹیکنگ کے لیے صحیح وقت کا انتظار کریں', isCorrect: true },
				{ answerText: 'انڈیگیٹرز استعمال کریں۔', isCorrect: false },
			],
		},
		{ 
			questionId: 15,
			questionText: ['دو طرفہ سڑک پر آنے والی گاڑی کو کس طرف سے گزرنا چاہئے؟'],
			answerOptions: [
				{ answerText: 'دائیں', isCorrect: false },
				{ answerText: 'کسی بھی طرف', isCorrect: false },
				{ answerText: 'بائیں', isCorrect: true },
				{ answerText: 'ان میں سے کوئی نہیں', isCorrect: false },
			],
		},
		{ 
			questionId: 16,
			questionText: ['موٹر سائیکل سوار کو سڑک کی کون سی لین استعمال کرنی چاہیے؟'],
			answerOptions: [
				{ answerText: 'دائیں لین', isCorrect: false },
				{ answerText: 'درمیان والی لین', isCorrect: false },
				{ answerText: 'بائیں لین', isCorrect: true },
				{ answerText: 'کوئی بھی نہیں', isCorrect: false },
			],
		},
		{ 
			questionId: 17,
			questionText: ['موٹر وہیکل آرڈیننس کے کس سیکشن کے تحت موٹر سائیکل سوار کو ہیلمٹ پہننا ضروری ہے؟'],
			answerOptions: [
				{ answerText: '89-A', isCorrect: true },
				{ answerText: '89-B', isCorrect: false },
				{ answerText: '89-C', isCorrect: false },
				{ answerText: '90-A', isCorrect: false },
			],
		},
		{ 
			questionId: 18,
			questionText: ['سٹاپ لائن سے کیا مراد ہے؟'],
			answerOptions: [
				{ answerText: 'پیدل چلنے والوں کے کراسنگ کی جگہ', isCorrect: false },
				{ answerText: 'موٹرسائیکل کو گزرنے کے لیے', isCorrect: false },
				{ answerText: 'ٹریفک سگنل پر رکنا', isCorrect: true },
				{ answerText: 'کچھ نہیں', isCorrect: false },
			],
		},
		{ 
			questionId: 19,
			questionText: ['ٹریفک سگنل کی لال بتی جل رہی ہو تو گاڑی کہاں کھڑی کی جائے؟'],
			answerOptions: [
				{ answerText: 'اسٹاپ لائن کے ایک فٹ پر', isCorrect: false },
				{ answerText: 'زیبرا کراسنگ پر', isCorrect: false },
				{ answerText: 'سٹاپ لائن کے پیچھے', isCorrect: true },
				{ answerText: 'کہیں بھی', isCorrect: false },
			],
		},
		{ 
			questionId: 20,
			questionText: '"یو ٹرن ممنوع ہے" کا نشان منتخب کریں۔  ',
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
					آپ نے 10 میں سے {score} اسکور کیے ہیں۔
					<Button onClick={handlePlayAgain} variant="contained" color="primary">دوبارہ کھیلو</Button>
				</div>
			) : (
				<>
				
					<div className='question-section'>
					<div className='question-count'>
				    <span>بقیہ وقت {min? "0"+min: min}:{sec}</span>
					</div>
						<div className='question-count'>
							<span>سوال {currentQuestion + 1}</span>/10
						</div>
					
						<div className='question-text'>{list[currentQuestion].questionText}</div>
						
					</div>
					<div className='answer-section'>
						{list[currentQuestion].answerOptions.map((answerOption, i) => {
							return <Button key={i} sx={{fontSize: 18}} className={clicked === answerOption.answerText ? "btn" : "option"} onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</Button>
                     })}
					</div>
					<div className='nextBtn'>
						<Button className='nextBtn'variant="contained" color="success" disabled={!clicked} onClick={()=>{{handleShuffle()}{handleNextOption()}{handleRemoveItem(list[currentQuestion].questionId)}}}> اگلا </Button>
					</div>
					
				</>
			)}
		</div>
	);
}
