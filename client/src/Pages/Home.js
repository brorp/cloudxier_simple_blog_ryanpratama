import {Container} from "react-bootstrap"
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
export default function Home(){
    const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/blogs'
        })
        .then(res => {
            setBlog(res.data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const deleteBlog = async (id) => {
        try {
            await axios({
                method: 'DELETE',
                url: `http://localhost:3000/delete/${id}`
            })
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    return(
    <>
    <Navbar/>
    <Container>
    <div className="row">
        <div className="col-6">
            <h1 className="mt-5 mb-4 lefttext">Recent Articles</h1>
        </div>
        <div className="col-6 righttext">
            <button className="btn-org btn-warning mt-5 mb-4"
            onClick={() => {navigate('/add')}}><h5 className="text-light">+ Create Blog</h5></button>
        </div>
    </div>
    
    {isLoading ? (<img src="https://ik.imagekit.io/fjaskqdnu0xp/W9XBuNV_Y7oQo1ewT.gif?updatedAt=1638167700299"/>):(
        <>
        {blog?.map((el) => {
        return(
            <div className="mb-3">
            <div className="card" key={el.id} style={{borderRadius: "25px"}}>
            <a className="img-link" href={`/${el.id}`}><img className="card-img-top" src={el.img} /></a>
            <div className="card-body">
            <div className="row justify-content-center">
                <div className="col-8">
                <h4 className="mb-1 mt-2 lefttext"><a className="icon" href={`/${el.id}`}>{el.title}</a></h4>
                <h6 className="mb-5 lefttext"><i>posted by: {el.author}</i></h6>
                </div>
                <div className="col-4 righttext">
                    <a className="mx-4 icon" onClick={() => navigate(`/edit/${el.id}`)}>✎</a>
                    <a className="mx-4 icon" onClick={() => deleteBlog(el.id)}>✖</a>
                </div>
            </div>
            </div>
            </div>
            </div>
            )
        })}
        </>
    )} 
    </Container>
    </>
    )
}