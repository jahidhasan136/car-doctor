import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const newUser = { name, email, password }
        console.log(newUser)

        createUser(email, password)
        .then(result => {
            const signUp = result.user 
            console.log(signUp)
        })
        .catch(error => {
            console.error(error.message)
        })
    }


    return (
        <div className="hero my-28">
            <div className="hero-content flex flex-col lg:flex-row justify-around w-full items-center">
                <div className="text-center lg:h-96 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-red" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='pb-5'>
                        <p className='text-sm text-center font-medium'>Or Sign in With</p>
                        <div className='flex justify-center mt-3 gap-4 text-2xl'>
                            <FaFacebookF className='text-indigo-700 border rounded-full w-10 p-2 h-10' ></FaFacebookF>
                            <FaLinkedinIn className='text-sky-600 border rounded-full w-10 p-2 h-10'></FaLinkedinIn>
                            <FaGoogle className='text-indigo-500 border rounded-full w-10 p-2 h-10'></FaGoogle>
                        </div>
                        <h3 className=' font-bold text-center mt-3 text-sm'><span className='text-gray-500'>Have an account?</span> <Link to="/login"><span className='text-red-500'>Login</span></Link></h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;