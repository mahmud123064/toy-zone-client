import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {

    const Provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, Provider)

        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body p-16 ">
                        <h2 className="text-center text-3xl font-bold">Please Login</h2>
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

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
                        <Link onClick={handleGoogleSignIn} className="mx-auto"><button className="btn btn-primary">< FaGoogle></FaGoogle></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;