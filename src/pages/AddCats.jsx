
const AddCats = () => {
    const [formFields, setFormFields] = useState('');
    const { name, date, sex, adj, colour, status, father, mother, cattery, location } = formFields;
    
    const resetFormFields = () => {
        setFormFields('');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {

    }

    return (
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
    );
}

export default AddCats;