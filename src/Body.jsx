import React from 'react'
import './Body.css'
import logoBonus from './images/logoBonus.svg'
import pentagon from './images/pentagon.svg'
import scissors from './images/scissors.svg'
import spock from './images/spock.svg'
import rock from './images/rock.svg'
import paper from './images/paper.svg'
import lizard from './images/lizard.svg'


export default function Body({handleMychoice,inGame,score, checkRules}) {
  return (
    <div className='oga'>
        <div className='con'>
            <div className='main'>
                <div className='div-top'>
                    <div className='logos'>
                        <img src={logoBonus} alt="" id='logo'/>
                    </div>
                    <div className='score'>
                        <span id='src'>
                            <h6>SCORE</h6>
                            <h1>{score}</h1>
                        </span>
                    </div>
                </div>
                <div className={`pic-div ${inGame ? 'picdiv-active' : ''}`}>
                    <div id='pent'>
                        <img src={pentagon} alt=""  id='penta'/>
                    </div>
                    
                </div>
        
            </div>
            <div className={`picks ${inGame ? checkRules ? 'picks-active' : 'picks-active':''}`}>
                <div className='pic-box'>
                        <div className='top'>
                            <div className='pics sci' onClick={() => handleMychoice('scissors')}>
                                <span className='pic-sp'>
                                  <img src={scissors} alt=""  id='pic'/>
                                </span>
                            </div>
                        </div>
                        <div className='middle'>
                            <div className='pics spock' onClick={() => handleMychoice('spock')} >
                                <span className='pic-sp'>
                                    <img src={spock} alt="" id='pic' />
                                </span>
                            </div>
                            <div className='pics paper'  onClick={() => handleMychoice('paper')}>
                                <span className='pic-sp'>
                                    <img src={paper} alt="" id='pic'/>
                                </span>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='pics lizard' onClick={() => handleMychoice('lizard')}>
                                <span className='pic-sp'>
                                    <img src={lizard} alt="" id='pic' />
                                </span>    
                            </div>
                            <div className='pics rock' onClick={() => handleMychoice('rock')}>
                                <span className='pic-sp'>
                                    <img src={rock} alt="" id='pic'/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='rules' onClick={checkRules}>RULES</button>
    </div>
  )
}
