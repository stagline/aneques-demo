import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useStore from "../store"


export default function UserForm() {

    const { usersData, addUser } = useStore()
    const [input, setInput] = useState({
        firstName: "",
        email: "",
        number: "",
        country: "",
        information: "",
        fileupload: ""
    });

    const {
        register,
        formState: { errors },
    } = useForm();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        addUser(input);
    };

    console.log(usersData, "-----usersData----")

    return (
        <div>
            <h1>User Form</h1>
            <form className="mx-4 p-4" >
                <div className="form-row ">
                    <div className="form-group col-md-6 my-2">
                        <label >First Name : </label>
                        <input
                            {...register('firstName', {
                                value: input.firstName,
                                name: "firstName",
                                onChange: handleChange,
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i,
                            })}
                        />
                        {errors?.firstName?.type === 'required' && (
                            <p style={{ color: "red" }}>This field is required</p>
                        )}
                        {errors?.firstName?.type === 'pattern' && (
                            <p style={{ color: "red" }}>Alphabetical characters only</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label >Email : </label>
                        <input
                            {...register('email', {
                                value: input.email,
                                name: "email",
                                onChange: handleChange,
                                required: true,
                                pattern: /\S+@\S+\.\S+/,
                            })}
                        />
                        {errors?.email?.type === 'required' && <p style={{ color: "red" }}>This field is required</p>}
                        {errors?.email?.type === 'pattern' && (
                            <p style={{ color: "red" }}>Please Enter a valid Email</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label >Phone Number : </label>
                        <input
                            {...register('phone', {
                                value: input.phone,
                                name: "phone",
                                onChange: handleChange,
                                required: true,
                                pattern: /^[0-9]+$/i,
                            })}
                        />
                        {errors?.phone?.type === 'required' && <p style={{ color: "red" }}>This field is required</p>}
                        {errors?.phone?.type === 'pattern' && (
                            <p style={{ color: "red" }}>Please Enter a valid Phone Number</p>
                        )}
                    </div>
                    <div className="form-group col-md-4 my-2">
                        <label >Country : </label>
                        <select
                            {...register('country', {
                                value: input.country,
                                name: "country",
                                onChange: handleChange,
                            })}>
                            <option value="INDIA">INDIA</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label >Additional Information : </label>
                        <input
                            {...register('information', {
                                value: input.information,
                                name: "information",
                                onChange: handleChange,
                                required: true,
                            })}
                        />
                        {errors?.information?.type === 'required' && (
                            <p style={{ color: "red" }}>This field is required</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label >File Upload : </label>
                        <input
                            {...register('fileupload', {
                                value: input.fileupload,
                                name: "fileupload",
                                onChange: handleChange,
                            })}
                            type="file"
                            accept=".pdf"
                        />
                    </div>
                </div>
                <button onClick={addUserHandler} className="btn btn-primary my-2">
                    Submit
                </button>
            </form>
        </div>
    );
}