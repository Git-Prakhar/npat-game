import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Leaderboard({ avatarImages, gameMode, members, score }) {

    const [leaderboard, setLeaderboard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(members.length === 0) return navigate('/');
        if (gameMode === "practice") return handlePracticeLeaderboard();
    })

    const handlePracticeLeaderboard = () => {
        let temp = members;
        let user = temp.findIndex((member) => member.role === 'Host');
        temp[user].score = score;
        temp.sort((a, b) => b.score - a.score);
        setLeaderboard(temp);
    }

    const handleNextRound = () => {
        navigate('/practice');
    }

    const handleLeaveGame = () => {
        window.location.reload();
    }

    return (
        <>
            {
                leaderboard && <div id='leaderboard-page' className='df-col jcc aic'>
                    <div id='main' className='df-col jcc aic'>
                        <div className='df-col jcc aic'>
                            <div id="winner" className='df-col jcc aic'>
                                <img src={avatarImages[leaderboard[0].avatar]} alt="" />
                                <div className='username'>{leaderboard[0].username}</div>
                                <div className='points'>{leaderboard[0].score}</div>
                            </div>
                            <div className='df jcc aic' id='bottom-board'>
                                <div className='player-card df-col jcc aic'>
                                    <div className='player-position'>2</div>
                                    <div className='df-col jcc aic'>
                                        <img src={avatarImages[leaderboard[1].avatar]} alt="" />
                                        <div className='username'>{leaderboard[1].username}</div>
                                        <div className='points'>{leaderboard[1].score}</div>
                                    </div>
                                </div>
                                <div className='player-card df-col jcc aic'>
                                    <div className='player-position'>3</div>
                                    <div className='df-col jcc aic'>
                                        <img src={avatarImages[leaderboard[2].avatar]} alt="" />
                                        <div className='username'>{leaderboard[2].username}</div>
                                        <div className='points'>{leaderboard[2].score}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table className='df-col jcc aic'>
                                <tbody>
                                    <tr className='df jcc aic'>
                                        <td>
                                            <div className='df jcc aic'>
                                                <img src={avatarImages[leaderboard[3].avatar]} alt="" />
                                                <div className='username'>{leaderboard[3].username}</div>
                                            </div>
                                        </td>
                                        <td className='points'>{leaderboard[3].score}</td>
                                    </tr>
                                    <tr className='df jcc aic'>
                                        <td>
                                            <div className='df jcc aic'>
                                                <img src={avatarImages[leaderboard[4].avatar]} alt="" />
                                                <div className='username'>{leaderboard[4].username}</div>
                                            </div>
                                        </td>
                                        <td className='points'>{leaderboard[4].score}</td>
                                    </tr>
                                    <tr className='df jcc aic'>
                                        <td>
                                            <div className='df jcc aic'>
                                                <img src={avatarImages[leaderboard[5].avatar]} alt="" />
                                                <div className='username'>{leaderboard[5].username}</div>
                                            </div>
                                        </td>
                                        <td className='points'>{leaderboard[5].score}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="buttonholder" className='df jcc aic'>
                        <button onClick={handleLeaveGame}>Leave Game</button>
                        <button onClick={handleNextRound}>New Round</button>
                    </div>
                </div>
            }
        </>
    )
}
