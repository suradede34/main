import { useState } from "react"


export default function Mail() {
    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });
    
    const [confirmationMessage2, setConfirmationMessage2] = useState(""); 
    const [confirmationMessage, setConfirmationMessage] = useState(""); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    
    function handleSubmit(event){
        event.preventDefault();
    
        setConfirmationMessage(<h3>{'Thanks for subscribing!'}</h3>);
        setConfirmationMessage2(<p>{`A confirmation email has been sent to ${formData.email}. 
        Please open it and click the button inside to confirm your subscription.`}</p>);
        setIsSubmitted(true);
    }
    
    function handleChange(e){
        const {value, name} = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    } 
    return (
        <>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className='body'>
                <img className="image" src="src/assets/logo.png"/>
                <div className="content">
                    <h2>Stay updated!</h2>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <p><input type="radio"/>Product discovery and building what matters</p>
                    <p><input type="radio"/>Measuring to ensure updates are a success</p>
                    <p><input type="radio"/>And much more!</p>
                    <input className="input" type="text" placeholder="email@company.com" name="email" onChange={handleChange} value={formData.email}/>
                    <button className="btn" type="submit">Subscribe to monthly newsletter</button>
                </div>
              </div>
            </form>
          ) : null}
    
          {confirmationMessage && (
            <>
              <h3 className='h3'>{confirmationMessage}</h3>
              <p className='p'>{confirmationMessage2}</p>
            </>
          )}
        </> 
    );
}