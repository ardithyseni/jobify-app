import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    // global state and useNavigate

    const handleChange = (e) => {
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={handleSubmit}>
                <Logo />
                <h3>Login</h3>
                {/* <div className='form-row'> 
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input 
                        type='text' 
                        value={values.name} 
                        name='name' 
                        onChange={handleChange} 
                        className='form-input' 
                    />            
                </div> */}

                <FormRow 
                    type='text' 
                    name='name' 
                    value={values.name} 
                    handleChange={handleChange}
                />
                <button type='submit' className='btn btn-block '>Submit</button>
            </form>
        </Wrapper>
    )
}

export default Register