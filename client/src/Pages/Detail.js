import Navbar from '../Components/Navbar'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Detail(){
    const [blog, setBlogs] = useState({
        author: '',
        title: '',
        description: '',
        img: '',
        url: '',
        publishedAt: ''
    })
    const {id} = useParams()
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:3000/blogs/${id}`
        })
        .then(res => {
            console.log(res.data)
            setBlogs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <>
        <Navbar/>
        <div className="container">
            <p className="my-3 lefttext"><a href="/" className="icon">back</a></p>
                <div className="my-5">
                    <img src={blog?.img} alt="pic2" className="mx-5"/>
                </div>
                <h3 className="mb-1 mt-2 lefttext">{blog?.title}<span><a className="mx-4 icon" href=''>♡</a></span></h3>
                <h6 className="mb-3 lefttext"><i>posted by: {blog?.author} on {blog?.publishedAt}</i></h6>
                <h6 className="lefttext">{blog?.description}</h6>
                <h6 className="lefttext"><i>Ref: <a className="icon-url" href={blog?.url}>{blog?.url}</a></i></h6>
        </div>
        </>
    )
}