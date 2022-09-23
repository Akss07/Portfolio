import './contact.css';
import MessageImage from './img/messageSents.png';
import {useState, useEffect} from 'react';

function Message({state}){
    const [isLoading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    useEffect(
        () => { 
        setLoading(true);
    
        setTimeout(() =>{
            setLoading(false);
        }, 2000);

        if(isLoading === false){
          setIsActive(true);
        }
    },[]
);

    return(
        <div className='messages'>
            <h3 className="tittle">Contact Me</h3>
       {isLoading && <div className = "spin"><div className='gg-spinner'></div> </div>}
            {!isLoading && isActive && 
            <div className='message__container'>
                        <div className='message'>Thanks <span className='name__value'>{state.fname} {state.lname}</span> for reaching out to me {state.subscribed ? <span>and subscribing to my daily news letter. </span> : ""}
                        <div className="display__email">I have received your email:<span className='name__value'> {state.email} </span>{state.phoneNumber ? <div>Phone Number : <span className='name__value'>{state.phoneNumber}</span></div> : ""}</div>
                        <div className="display__message"> Message : <span className='name__value'> {state.message} </span></div>
                        <div>I'll get back to you shortly. </div>
                        </div>
                        <div className="image__container">
                        <img  className = "sent__image" src ={MessageImage} alt = "message sent " />
                    </div>
                    </div>
                    }
                </div>
    );

}

export default Message;