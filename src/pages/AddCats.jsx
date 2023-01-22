
const AddCats = () => {
    <div className='sign-up-container'>
        <h2>Add new cat to database:</h2>
        <form onSubmit={handleSubmit}>
            <FormInput label='Name' required onChange={handleChange} name='name' value={name}/>
            <FormInput label='Date' required onChange={handleChange} name='date' value={date}/>
            
                
            <div className='buttons-container'>
                <Button type='submit'>Submit</Button>
            </div>
        </form>
    </div>
}

export default AddCats;