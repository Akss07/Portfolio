import './contact.css';
import ContactImage from './img/contact.png';
import {useState} from 'react';

function Contact({setPage, setStates}){
    
const [state, setState] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    message: "",
    subscribed: false
  })

const handleClick = (e) => {
    e.preventDefault();
    setStates(state);
    setPage('Message');
};

const handleChange = evt => {
    const name = evt.target.name;
    const value = 
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value
    })
  }

    return (
        <div className="contact" id="contact">
            <h3 className="tittle">Contact Me</h3>
            <div className="contact__container">
                <div className="left__container">
                    <div className="image__container">
                        <img  className = "contact__image" src ={ContactImage} alt = "" />
                    </div>
                    <div className="contact__details">
                        <div className="address__left">
                            <p>South Lake Union</p>
                            <p>Seattle</p>
                            <p>Washington - 98109</p>
                        </div>
                        <div className="address__right">
                            <p>Call Me: +123456789</p>
                            <p>E-Mail : akanksha0207gupta@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="right__container">
                    <form action="#" method="post" className="main-form" onSubmit={handleClick}>
                        <label className="form__label"><span>First Name:</span><input name="fname" className= "input-label" type="text" value={state.fname} required onChange={handleChange} /></label>
                        <label className="form__label"><span>Last Name:</span><input name="lname" className= "input-label" type="text" value={state.lname} onChange={handleChange}/></label>
                        <label className="form__label"><span>Phone Number:</span><input name="phoneNumber" className= "input-label" type="tel"  pattern="[0-9]{10}" value={state.phoneNumber} onChange={handleChange}/></label>
                        <label className="form__label"><span>E-mail:</span><input name="email" className= "input-label" type="email" required  value={state.email} onChange={handleChange}/></label>
                        <textarea name="message" placeholder="Message" required value={state.message} onChange={handleChange}></textarea>
                        <label className="form__label"><span>Do you want to subscribe to my daily News Letter:</span><input name="subscribed" type="checkbox" value={state.subscribed} onChange={handleChange}/></label>
                        <button  className="form__label form-label-btn" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;