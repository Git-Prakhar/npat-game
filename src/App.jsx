import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages and Css
import Homepage from './pages/Homepage.jsx'
import Practice from './pages/Practice.jsx'
import Name from './pages/Name.jsx'
import Place from './pages/Place.jsx'
import Animal from './pages/Animal.jsx'
import Thing from './pages/Thing.jsx'
import './App.css'

// Images and Components
import boy1 from './images/boy-1.svg'
import girl1 from './images/girl-1.svg'
import boy2 from './images/boy-2.svg'
import girl2 from './images/girl-2.svg'
import boy3 from './images/boy-3.svg'
import girl3 from './images/girl-3.svg'

// Supabase
import supabase from './config/SupabaseClient.jsx'
import Leaderboard from './pages/Leaderboard.jsx'



export default function App() {

  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(0);
  const [members, setMember] = useState([
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [round, setRound] = useState(null);
  const [letterData, setLetterData] = useState(null);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(null);

  // constants
  const avatarImages = [boy1, girl1, boy2, girl2, boy3, girl3]

  // Functions

  const fetchLetterData = async () => {
    const { data, error } = await supabase
      .from('npat')
      .select('*')
    if (error) {
      console.log('Error fetching data:', error.message)
      return;
    }
    setLetterData(data);
    console.log(data);
  }

  // UseEffect

  useEffect(() => {
    fetchLetterData();
  },[]);

  return (
    <Routes>
      <Route path='/' element={
        <Homepage
          username={username}
          setUsername={setUsername}
          avatar={avatar}
          setAvatar={setAvatar}
          setCurrentUser={setCurrentUser}
          avatarImages={avatarImages}
          setGameMode={setGameMode}
        />}
      />
      <Route path='/practice' element={
        <Practice
          setRound={setRound}
          data={letterData}
          setMember={setMember}
          currentUser={currentUser}
          setScore={setScore}
        />
      }
      />
      <Route path='/game/name' element={<Name score={score} setScore={setScore} round={round} />} />
      <Route path='/game/place' element={<Place score={score} setScore={setScore} round={round} />} />
      <Route path='/game/animal' element={<Animal score={score} setScore={setScore} round={round} />} />
      <Route path='/game/thing' element={<Thing score={score} setScore={setScore} round={round} />} />
      <Route path='/game/leaderboard' element={<Leaderboard gameMode={gameMode} members={members} score={score} avatarImages={avatarImages} />} />
    </Routes>
  )
}
