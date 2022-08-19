import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './Register.css'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../../actions/auth";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {


    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(name, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };


    return (
        <div className="flex-auth">
            <div className="img-auth">
                <h1>Second Hand.</h1>
            </div>
            <div className="form-auth">
                <Form className="form-register" onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <h1 className='title-register'>Daftar</h1>
                            <label className='label-auth' htmlFor="nama">
                                Nama
                                <Input
                                    className='input-nama'
                                    type="text"
                                    id="nama"
                                    placeholder="Nama Lengkap"
                                    value={name}
                                    onChange={onChangeName}
                                    validations={[required, vname]}
                                />
                            </label>
                            <label className='label-auth' htmlFor="email">
                                Email
                                <Input
                                    className='input-email'
                                    type="email"
                                    id="email"
                                    placeholder="Contoh: johndee@gmail.com"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                />
                            </label>
                            <label className='label-auth' htmlFor="password">
                                Password
                                <Input
                                    className='input-password'
                                    type="password"
                                    id="password"
                                    placeholder="Masukkan password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </label>
                            <button className="signin-btn">Daftar</button>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                <p className='message'>Sudah punya akun? <Link to='/login'>Masuk di sini</Link></p>
            </div>
        </div>
    )
}

export default Register