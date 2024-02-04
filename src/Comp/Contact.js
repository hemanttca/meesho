import React from 'react'
import './Contact.css'

const Contact = () => {
    const send = (e) => 
    {
            alert("Message Send Succesfully")
            e.preventDefault()
            
    }
  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>#contact us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div  className='lable'>
                            <h4>Name</h4>
                        </div>
                        <div  className='input'>
                            <input type='text' placeholder='Name' />
                        </div>
                    </div>
                    <div className='box'>
                        <div  className='lable'>
                            <h4>E-Mail</h4>
                        </div>
                        <div  className='input'>
                            <input type='email' placeholder='E-Mail' />
                        </div>
                    </div>
                    <div className='box'>
                        <div  className='lable'>
                            <h4>Subject</h4>
                        </div>
                        <div  className='input'>
                            <input type='text' placeholder='Subject' />
                        </div>
                    </div>
                    <div className='box'>
                        <div  className='lable'>
                            <h4>Message</h4>
                        </div>
                        <div  className='input'>
                            <input type='text' placeholder='Message !' />
                        </div>
                    </div>
                    <button onClick={send}>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact