import React, { useState } from 'react'

const UploadPatientInput = ({ name, type, placeholder }) => {

    const [inputValue, setInputValue] = useState("");


    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className='flex flex-col w-2/3'>
            <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="name">Name</label>
            <input className="border-2 border-primary-200 rounded-md p-3" type="text" placeholder='James Gun' value={inputValue} onChange={handleInput} required />
        </div>
    )
}

export default UploadPatientInput



{/* <div className='flex flex-col w-2/3'>
<label className="text-lg font-onest text-primary-200 font-bold" htmlFor="name">Name</label>
<input className="border-2 border-primary-200 rounded-md p-3" type="text" placeholder='James Gun' required />
</div>

<div className='flex flex-col w-1/3'>
<label className="text-lg font-onest text-primary-200 font-bold" htmlFor="age">Age</label>
<input className="border-2 border-primary-200 rounded-md p-3" type="number" placeholder='37' required />
</div> */}