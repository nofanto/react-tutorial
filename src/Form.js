import React from 'react';

function Form(props) {
    const data = { 
        name: '',
        job: ''
    };
    
    const nameRef = React.createRef();
    const jobRef = React.createRef();

    const handleChange = event => {
        const { name, value } = event.target;
        data[name] = value;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        props.handleSubmit({...data});
        nameRef.current.value = '';
        jobRef.current.value = '';
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name"
                ref={nameRef} 
                onChange={handleChange} />
            <label htmlFor="job">Job</label>
            <input 
                type="text" 
                name="job" 
                id="job"
                ref={jobRef} 
                onChange={handleChange} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default Form;
