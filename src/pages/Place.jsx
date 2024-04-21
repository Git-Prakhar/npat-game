import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Place({ round, score, setScore }) {

    const [options, setOptions] = useState([]);
    const navigate = useNavigate();
    const [tempScore, setTempScore] = useState(1000);
    const timerRef = useRef(null);

    // Functions
    function generateOptions() {
        let placeOptions = [];
        placeOptions[round[0].correctOption] = round[0].correctURL.place;
        let count = 0;
        if (round[0].correctOption === 0) {
            count = 1;
        }
        round[0].options.place.forEach((option) => {
            if (count !== round[0].correctOption) {
                placeOptions[count] = option;
            }
            if ((count + 1) === round[0].correctOption) {
                count += 2;
            } else {
                count++;
            }
        });
        setOptions(placeOptions);
    }

    const handleOptionSelected = (index) => {
        clearInterval(timerRef.current);
        let temp = score;
        if(index === round[0].correctOption){
            temp += tempScore;
            setScore(temp);
        }
        navigate('/game/animal');
    }

    const startTimer = () => {
        let temp = 1000;
        timerRef.current = setInterval(() => {
            console.log('Passing');
            temp -= 35;
            setTempScore(temp);
            if (temp <= 0) {
                clearInterval(timerRef.current);
                navigate('/game/animal');
            }
        }, 100);
    }

    // UseEffect

    useEffect(() => {
        if (!round) return navigate('/');
        generateOptions();
        startTimer();
    }, [])

    return (
        <>
            {
                round &&
                <div id='game-page' className='df-col aic'>
                    <div className='df jcc aic' id='nav'>
                        <div id='game-name'>Place</div>
                        <div id='timing'>{tempScore}</div>
                        <div id='letter'>{round[0].roundLetter}</div>
                    </div>
                    <div className="choiceHolder df jcc aic" >
                        {
                            options && options.map((option, index) => {
                                return (
                                    <button onClick={() => { handleOptionSelected(index) }} key={index} className='choice df jcc aic'>
                                        <img src={option} alt={option} />
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}