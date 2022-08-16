import './App.css';
import { useState } from 'react';
import Countries from './Countries';

function App() {

  const initialValue = { 
   address1: "",
   city: "",
   country:"", 
   line2 : "", 
   postcode : "", 
   residentialAddress : "", 
   state : "", 
   taxCategory : null, 
   taxNumber : "", 
    
  }

  const [formValues, setFormValues] = useState(initialValue)
  const [taxShow, setTaxShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }



  const converttoDefEventPara = (name, value) => ({
    target: {
      name, value
    }
    
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)

  }

  const handleCheck = (e) => {
    handleChange(converttoDefEventPara(e.target.name, e.target.checked))
    setTaxShow(e.target.checked)
  }


  return (
    <div className="mainContainer"  >

      <form
        className='FormContainer'
        onSubmit={handleSubmit} >
        
        <label>Residential Address</label>
        <input  className="inputContainer" type="text" onChange={handleChange} value={formValues.address1} name="address1" />
        <label>Line 2 (Optional)</label>
        <input  className="inputContainer" type="text" onChange={handleChange} value={formValues.line2} name="line2" />
        <label>City or Town</label>
        <input  className="inputContainer" type="text" onChange={handleChange} value={formValues.city} name="city" />
        <label>ZIP or Post code</label>
        <input  className="inputContainer" onChange={handleChange} value={formValues.postcode} name="postcode" />
        <label>State or Province</label>
        <input  className="inputContainer" type="text" onChange={handleChange} value={formValues.state} name="state" />
        
        <Countries value={formValues.country} name="country" onChange={handleChange}/>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handleCheck} />
          <label class="form-check-label" for="exampleCheck1">Do you have tax number</label>
         </div>

        { taxShow === true ? <div className="tax-container">

          <h5>My Tax Number</h5>
          <input placeholder="Tax Number" className="inputContainer" type="text" onChange={handleChange} name="taxNumber" value={formValues.taxNumber} />
       
        </div> : false}

        <button type='submit'  className="btn-container">Submit</button>
      </form>
    </div >
  );
}

export default App;