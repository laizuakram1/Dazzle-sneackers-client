import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { GiRunningShoe } from 'react-icons/gi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const { userLogin } = useContext(AuthContext);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/';

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = data => {
        userLogin(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success('Login successfully!')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-slate-50 py-20">
                <div className="hero-content text-center border-2 rounded px-16 py-5 shadow-xl w-md">
                    <div className="max-w-md">
                        <GiRunningShoe className='w-full mx-auto text-6xl mb-3' />
                        <h3 className='text-3xl font-bold mb-5'>LogIn</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid md:grid-cols-1 gap-y-5'>
                            <TextField {...register("email")} id="standard-basic" label="email" variant="standard" type='email' />
                            <FormControl sx={{ width: '320px' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    {...register("password")}
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <div className='flex justify-between'>
                                <span>Forget password?</span>
                                <Link className='link hover:link hover:text-red-500 ease out duration-500' to='/signup'>SignUp</Link>
                            </div>

                            <input className='btn btn-success hover:bg-red-500 ease-out duration-500 border-0' type="submit" value='Submit' />
                            <div className="divider">OR</div>
                            <div className='flex justify-between'>
                                <button className="btn btn-outline"><FcGoogle className='text-2xl' /></button>
                                <button className="btn btn-outline"><BsFacebook className='text-2xl' /></button>
                                <button className="btn btn-outline"><FaLinkedinIn className='text-2xl' /></button>
                                <button className="btn btn-outline"><BsInstagram className='text-2xl' /></button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;