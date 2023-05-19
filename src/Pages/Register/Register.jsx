
import { Link } from 'react-router-dom';

const Register = () => {

const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password,photo);    
}

    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body p-16 ">
                    <h2 className="text-center text-3xl font-bold">Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                     
                        <input type="submit" className='btn btn-primary' value="Register" />
                        
                    </div>
                    </form>
                    
                    <p>Already have an account? <Link to='/login'><span className="text-red-500">Please Login</span></Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;