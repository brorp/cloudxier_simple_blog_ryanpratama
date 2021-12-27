import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
export default function Form(){
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
                            <h5 className='lefttext'>Insert title</h5>
                            <form method="post">
                            <input 
                            type="text" 
                            id="login-email" 
                            className="form-control mb-3" 
                            placeholder="Title for your blog" required=""/>
                            <h5 className='lefttext'>Author Name</h5>
                            <input 
                            type="text"
                            id="login-password" 
                            className="form-control mb-3" 
                            placeholder="Author of your blog" required=""/>
                            <h5 className='lefttext'>Insert Blog Content</h5>
                            <textarea 
                            type="text"
                            id="exampleTextarea" 
                            className="form-control"
                            placeholder="Put description of your article" required=""/>
                            <div className="checkbox mb-3">
                            </div>
                            <div className="row">
                                <div className="col-6">
                                <Link to="/">
                                    <button className="btn-cancel btn-secondary btn-block mt-4 mb-2" type="submit"><h5 className="text-light">Cancel</h5></button>
                                </Link>
                                </div>
                                <div className="col-6">
                                    <button className="btn-org btn-warning mt-4 mb-2 mx-0" type="submit"><h5 className="text-light">Save and Publish</h5></button>
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