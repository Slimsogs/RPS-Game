import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import Body from './Body'
import InGame from './InGame';
import Rules from './Rules';


function App() {

  const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
  const [inGame, setInGame] = useState (false)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 12)
  const [inRules, setInRules] = useState(false)


  const checkRules = () =>{
    setInRules(true)
  }
  const closeRules = () =>{
    setInRules(false)
  }

  const generateCompChoices = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
    checkResult()
    
  }

  useEffect(() =>{
    checkResult()
  },[computerChoice, userChoice])

  useEffect(() =>{
   restartGame()
  },[score])

  useEffect(() => {

    window.localStorage.setItem('score', JSON.stringify(score));

  }, [score]);


  const scoreIncre = (amt) =>{
    setScore(currentCount => {
      return currentCount += amt
    })
  }

  const scoreDecre = (amt) =>{
    setScore(currentCount => {
      return currentCount -= amt
    })
  }

  const checkScore = () =>{
    if (result === 'YOU WIN'){
      scoreIncre(1)
    }else if (result === 'YOU LOSE') {
      scoreDecre(1)
    }else{
      scoreIncre(0)
    }
  }

  const checkResult = () =>{
    switch(userChoice + computerChoice){
      case 'scissorspaper':
      case 'paperrock':
      case 'rocklizard':
      case 'lizardspock':
      case 'spockscissors':
      case 'scissorslizard':
      case 'paperspock':
      case 'rockscissors':
      case 'liazrdpaper':
      case 'spockrock':
        setResult('YOU WIN')
        break
      case 'paperscissors':
      case 'rockpaper':
      case 'lizardrock':
      case 'spocklizard':
      case 'scissorsspock':
      case 'lizardscissors':
      case 'spockpaper':
      case 'scissorsrock':
      case 'paperlizard':
      case 'rockspock':
        setResult('YOU LOSE')
        break
      case 'scissorsscissors':
      case 'paperpaper':
      case 'rockrock':
      case 'lizardlizard':
      case 'spockspock':
        setResult("IT'S A TIE")
        break
    }
  }

  const handleMychoice = (value) =>{
    setUserChoice(value)
    setInGame(true)
    generateCompChoices()
    
  }

   const restartGame = () =>{
    if(score < 1){
      setResult("GAME OVER")
      scoreIncre(12)
    }else if (score === 20){
      setResult("HURRAY!! YOU WIN.")
      scoreDecre(8)
    }
   }


  // const openGameMode = () => {
  //   setInGame(true)
  // }
  const closeGameMode = () => {
    setInGame(false)
    checkScore()
    restartGame()
  }

  return (
    <div>
      <InGame inGame = {inGame} closeGameMode={closeGameMode}
        userChoice={userChoice}
        computerChoice={computerChoice}
        result={result}
      />
      <Rules closeRules={closeRules}
      inRules = {inRules}
      />
      <Body handleMychoice={handleMychoice}
        inGame={inGame}
        score ={score}
        checkRules={checkRules}
      />
    </div>
  );
}

export default App;
