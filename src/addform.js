import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'




function Add() {
    const navigate = useNavigate('/update')
    const schema = yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        age: yup.string().required(),
        dob: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(12).required(),
        mobileNo: yup.string().matches(/^[0-9 ]+$/, 'only digits').min(10, 'exactly 10 digits').max(10, 'exactly 10 digits')

    });
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (val) => {
        // val.preventDefault()
        const postData = { id: val.id, username: val.name, age: val.age, dob: val.dob, email: val.email, password: val.password, mobileNo: val.mobileNo }

        fetch('http://localhost:3000/someRoute', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json' },
        })


        navigate("/")
        window.alert("User added successfully")

        console.log(val)
        // localStorage.setItem('testObject', JSON.stringify(val));
        // window.location.href = "/list"
        // reset();
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <h1 className="text-center my-5">Add User</h1>
                <div className="">
                    <input {...register("id")} type="number" className="form-control w-25 mx-auto mb-3" placeholder="ID" />
                    {errors.id && <p className="w-25 mx-auto text-danger">please enter your id</p>}
                </div>

                <div> <input {...register("name")} type="text" className="form-control w-25 mx-auto mb-3" placeholder="Name" />
                    {errors.name && <p className="w-25 mx-auto text-danger">please enter Name</p>}
                </div>
                <div className="">
                    <input {...register("age")} type="number" className="form-control w-25 mx-auto mb-3" placeholder="Age" />
                    {errors.age && <p className="w-25 mx-auto text-danger">please enter age</p>}
                </div>
                <div>
                    <div>
                        <input {...register("dob")} className="form-control w-25 mx-auto mb-3" placeholder="MM/DD/YYY" type="date" />
                        {errors.dob && <p className="w-25 mx-auto text-danger">please enter DOB</p>}

                    </div>
                    <div>
                        <input {...register("email")} type="email" className="form-control w-25 mx-auto mb-3" placeholder="email" />
                        {errors.email && <p className="w-25 mx-auto text-danger">please enter email</p>}
                    </div>
                </div>
                <div>
                    <div>
                        <input {...register("password")} type="password" className="form-control w-25 mx-auto mb-3" placeholder="Password" />
                        {errors.password && <p className="w-25 mx-auto text-danger">please enter password</p>}

                    </div>
                </div>
                <div>
                    <div>
                        <input {...register("mobileNo")} type="tel" className="form-control w-25 mx-auto mb-3" placeholder="Contact number"></input>
                        {errors.mobileNo && <p className="w-25 mx-auto text-danger">please enter Mobile No</p>}
                    </div>
                </div>
                <div className="row mb-5 ">
                    <button type="submit" className="btn btn-primary w-25 mx-auto">Add</button>

                </div>
            </div>
        </form >
    );
}
export default Add;