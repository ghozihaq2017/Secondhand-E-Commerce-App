import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
// import { FiEye } from 'react-icons/fi'

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { login } from '../../../actions/auth';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {

    const navigate = useNavigate();

    // const [passwordShown, setPasswordShown] = useState(false)
    // const togglePasswordVisibility = () => {
    //     setPasswordShown(passwordShown ? false : true)
    // }

    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(name, password))
                .then(() => {
                    props.history.push('/');
                    window.location.reload();
                    navigate('/');
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        navigate('/');
    }

    return (
        <div className="flex-auth">
            {loading}
            <div className="img-auth">
                <h1>Second Hand.</h1>
            </div>
            <div className="form-auth">
                <Form className="form-login" onSubmit={handleLogin} ref={form}>
                    <h1 className="title-login">Masuk</h1>
                    <label className="label-auth" htmlFor="email">
                        Email
                        <Input
                            className="input-email"
                            type="email"
                            id="email"
                            placeholder="Contoh: johndee@gmail.com"
                            value={name}
                            onChange={onChangeName}
                            validations={[required]}
                        />
                    </label>
                    <label className="label-auth" htmlFor="password">
                        Password
                        <Input
                            className="input-password"
                            type="password"
                            id="password"
                            placeholder="Masukkan password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </label>
                    <button className="signin-btn">Masuk</button>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                </Form>
                <p className="message">
                    Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
