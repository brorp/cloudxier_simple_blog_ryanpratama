import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Form(){
    const [formInput, setFormInput] = useState({
        title: '',
        author: '',
        description: '',
    })
    const changeFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setFormInput({
            ...formInput,
            [field]: value
        })
    }
    const {id} = useParams()
    const [error, setError] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate()
    const onSubmit = async e => {
        setButtonClicked(true)
        e.preventDefault()
        try {
            await axios({
                method: "POST",
                url: `http://localhost:3000/edit/${id}`,
                data: formInput
            })
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message)
            setButtonClicked(false)
        }
    }
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3000/blogs/${id}`
        })
        .then(res => {
            setFormInput({
                title: res.data.title,
                author: res.data.author,
                description: res.data.description,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
    <>
    <Navbar/>
    <div className="container">
        <div className="row justify-content-center my-5">  
            <div className="col-sm-10 col-md-8 col-lg-6 mt-3">
                <div className="shadow-lg rounded">
                    <div className="card">
                    <h1 className="mt-3 p-3">Create New Blog Post</h1>
                        <div className="card-body p-5">
                        {error?.length !== 0 ? (
                        <div className="alert alert-danger alert-dismissible" role="alert">
                        <strong>Ups!</strong> {error}
                        </div>
                        ): (null)}
                            <form method="post" onSubmit={onSubmit}>
                            <h5 className='lefttext'>Insert title</h5>
                            <input 
                            type="text" 
                            className="form-control mb-3" 
                            name="title"
                            value={formInput.title}
                            onChange={changeFormInput} />
                            <h5 className='lefttext'>Author Name</h5>
                            <input 
                            type="text" 
                            className="form-control mb-3" 
                            name="author"
                            value={formInput.author}
                            onChange={changeFormInput}/>
                            <h5 className='lefttext'>Insert Blog Content</h5>
                            <textarea 
                            type="text"
                            className="form-control"
                            id="exampleTextarea"
                            name="description"
                            value={formInput.description}
                            onChange={changeFormInput}/>
                            <div className="checkbox mb-3">
                            </div>
                            <div className="row">
                                <div className="col-6">
                                <Link to="/">
                                    <button className="btn-cancel btn-secondary btn-block mt-4 mb-2"><h5 className="text-light">Cancel</h5></button>
                                </Link>
                                </div>
                                <div className="col-6">
                                    <button className={!buttonClicked || error ? "btn-org btn-warning mt-4 mb-2 mx-0" : "btn-org btn-warning mt-4 mb-2 mx-0 d-none"}
                                    type="submit"><h5 className="text-light">Save and Publish</h5></button>
                                    <button className={buttonClicked && !error ? "btn-org btn-warning mt-4 mb-2 mx-0" : "btn-org btn-warning mt-4 mb-2 mx-0 d-none"}
                                    type="submit" disabled>
                                    <span className="spinner-border spinner-border-sm text-white mb-2 mt-1" role="status"></span>
                                    </button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}