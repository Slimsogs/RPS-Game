import React from 'react'
import rules from './images/rules.svg';
import './Rules.css'
import close from './images/close.svg';

export default function Rules({inRules,closeRules}) {
    if (!inRules) return null
  return (
    <div className='overlay1'>
        <div className='modalCon'>
            <div className='rules-top'>
                <h3>RULES</h3>
                <button onClick={closeRules} id='close'>
                    <img src={close} alt=""  id='close-btn' />
                </button>
            </div>
            <img src={rules} alt="" className='rule'/>
            <button onClick={closeRules} className='close-bot'>
                <img src={close} alt="" />
            </button>
        </div>

        
    </div>
  )
}
