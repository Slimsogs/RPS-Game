import React from 'react'
import './InGame.css'

export default function InGame({closeGameMode, inGame, userChoice,computerChoice,result}) {
    if(!inGame) return null;

    const userView = () => {
      if (userChoice === 'scissors'){
        return(
            <div className='user-pic scissors'>
              <span className='pic-span'>
                <img src={`./images/${userChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (userChoice === 'spock'){
        return(
            <div className='user-pic spo '>
              <span className='pic-span'>
                <img src={`./images/${userChoice}.svg`} alt="" id='g-pic'  />
              </span>
            </div>
        );
      }
      if (userChoice === 'paper'){
        return(
            <div className='user-pic pap '>
              <span className='pic-span'>
                <img src={`./images/${userChoice}.svg`} alt="" id='g-pic'  />
              </span>
            </div>
        );
      }
      if (userChoice === 'lizard'){
        return(
            <div className='user-pic liz '>
              <span className='pic-span'>
                <img src={`./images/${userChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (userChoice === 'rock'){
        return(
            <div className='user-pic roc '>
              <span className='pic-span'>
                <img src={`./images/${userChoice}.svg`} alt="" id='g-pic'  />
              </span>
            </div>
        );
      }
    }

    const compView = () => {
      if (computerChoice === 'scissors'){
        return(
            <div className='user-pic scissors one animate fadeIn'>
              <span className='pic-span'>
                <img src={`./images/${computerChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (computerChoice === 'spock'){
        return(
            <div className='user-pic spo one animate fadeIn'>
              <span className='pic-span'>
                <img src={`./images/${computerChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (computerChoice === 'paper'){
        return(
            <div className='user-pic pap one animate fadeIn'>
              <span className='pic-span'>
                <img src={`./images/${computerChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (computerChoice === 'lizard'){
        return(
            <div className='user-pic liz one animate fadeIn'>
              <span className='pic-span'>
                <img src={`./images/${computerChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
      if (computerChoice === 'rock'){
        return(
            <div className='user-pic roc one animate fadeIn'>
              <span className='pic-span'>
                <img src={`./images/${computerChoice}.svg`} alt="" id='g-pic' />
              </span>
            </div>
        );
      }
    }
    
  return (
    <div className='overlay'>
        <div className='modalContainer'>
          <div className='picked'>
              <div className="mychoice">
                <h5 className='top-game'>YOU PICKED</h5>
                <div>
                  {userView()}
                </div>
                <h5 className='down'>YOU PICKED</h5>
              </div>
                <div className='winboard two animates fadeIn' >
                    <h3>{result}</h3>
                    <button onClick={closeGameMode} className='playagain' >PLAY AGAIN</button>
                </div>
              <div className="comp-choice">
                  <h5 className='top-game'>THE HOUSE PICKED</h5>
                  <div>
                    {compView()}
                  </div>
                  <h5 className='down'>THE HOUSE PICKED</h5>
              </div>
            </div>
            <div className='winboard two animates fadeIn win2' >
                  <h3>{result}</h3>
                  <button onClick={closeGameMode} className='playagain' >PLAY AGAIN</button>
            </div>
        </div>
       
    </div>
  )
}
