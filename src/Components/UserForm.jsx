import React from 'react';
import { useForm } from 'react-hook-form';
import useStore from "../store"


export default function UserForm({ addData, data }) {

    const { bears, increasePopulation } = useStore()
    console.log(bears, "-----controls----")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>User Form</h1>
            <button onClick={increasePopulation} >Increase Bears</button>
            <form className="mx-4 p-4" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-row ">
                    <div className="form-group col-md-6 my-2">
                        <label >First Name : </label>
                        <input
                            {...register('firstName', {
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
                        <select {...register('country')}>
                            <option value="INDIA">INDIA</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label >Additional Information : </label>
                        <input
                            {...register('information', {
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
                            {...register('file', {
                                required: true,
                            })}
                            type="file"
                            name="picture"
                            accept=".pdf"
                        />
                        {errors?.information?.type === 'required' && (
                            <p style={{ color: "red" }}>This field is required</p>
                        )}
                        {errors?.information?.type === 'accept' && <p style={{ color: "red" }}>only pdf</p>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary my-2">
                    Submit
                </button>
            </form>
        </div>
    );
}