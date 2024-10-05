import React from 'react'

const  Contact = () =>{ 
  return (
  <>
 


<div className='container'>
 <div className='contact-form'>
 <h1>Contact Me</h1>

 <form action='https://formspree.io/f/mpwavgvq' method='POST' classNameName='contact-inputs'>
 
 <label for="fname">User Name</label>
 <input  type='text' placeholder='username' name='username' required autoComplete='off'/><br/><br/>
 
 <label for="fname">Email</label>
 <input  type='email' placeholder='email' name='email' required  autoComplete='off'/><br/><br/>
 
 <label for="fname">Country</label>
 <select id="country" name="country">         
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">PAKISTAN</option>
          <option value="usa">USA</option>
  </select>
        <br/><br/>
        <div className='row'>
<div className='subject'>
 <label for="fname">Subject</label>
 </div>                    
 <textarea name='Message' cols="30" autoComplete='off' required placeholder='Enter your message'></textarea><br/><br/>
 </div>
<button>SUBMIT</button>
 </form>
 </div>
</div>



</>


)
}
export default Contact