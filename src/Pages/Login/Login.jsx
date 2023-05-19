import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <h2 className="text-center text-3xl font-bold">Please Login</h2>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <input type="btn" value="Login" />
                        </div>
                        <p>Are you new? <Link to='/register'><span className="text-red-500">Please Register</span></Link></p>

                        <div className="flex">
                            <div className="w-[70px]">
                                < hr />
                            </div>

                            <p className="text-center">Or</p>

                            <div className="w-[70px]">
                                <hr />
                            </div>
                        </div>
                        <Link className="mx-auto">< FaGoogle></FaGoogle></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;