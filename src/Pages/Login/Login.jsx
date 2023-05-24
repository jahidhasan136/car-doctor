import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const { login, user } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleSignin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const newUser = { email, password }
        console.log(newUser)

        login(email, password)
            .then(result => {
                const loginUser = result.user
                
                const loggedUser = {
                    email: result.user.email
                }
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'applicaiton/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('car-access-token', data.token)
                    navigate(from, {replace: true })
                })
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
                    <h1 className='text-center font-bold text-3xl'>Login</h1>
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign in" className="btn btn-red" />
                        </div>
                    </form>
                    <div className='pb-5'>
                        <p className='text-sm text-center font-medium'>Or Sign in With</p>
                        <div className='flex justify-center mt-3 gap-4 text-2xl'>
                            <FaFacebookF className='text-indigo-700 border rounded-full w-10 p-2 h-10' ></FaFacebookF>
                            <FaLinkedinIn className='text-sky-600 border rounded-full w-10 p-2 h-10'></FaLinkedinIn>
                            <FaGoogle className='text-indigo-500 border rounded-full w-10 p-2 h-10'></FaGoogle>
                        </div>
                        <h3 className=' font-bold text-center mt-3 text-sm'><span className='text-gray-500'>Have an account?</span> <Link to="/signup"><span className='text-red-500'>Sing Up</span></Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;