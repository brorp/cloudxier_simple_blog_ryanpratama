export default function Form(){
    return (
    <div class="container">
        <div class="row justify-content-center my-5">  
            <div class="col-sm-10 col-md-8 col-lg-6 mt-5">
                <div class="shadow-lg rounded">
                    <div class="card text-center">
                        <div class="card-body">
                            <form class="form-signin" method="post">
                            <input 
                            type="text" 
                            id="login-email" 
                            class="form-control mb-3" 
                            placeholder="Title for your blog" required=""/>
                            <input 
                            type="text"
                            id="login-password" 
                            class="form-control" 
                            placeholder="Author of your blog" required=""/>
                            <textbox 
                            type="text"
                            id="login-password" 
                            class="form-control"
                            row="3"
                            placeholder="Describe your blog" required=""/>
                            <div class="checkbox mb-3">
                            </div>
                            <button class="btn btn-sm btn-light btn-block mt-5 mb-2" type="submit"><h3 class="text-dark">Create</h3></button>
                            </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}