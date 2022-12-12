import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Login(props) {
    const navigate = useNavigate('/workspace')
    const [auth, setAuth] = useState();
    // const v= auth.access_token
    console.log("Auth==>", auth);
    const { register, handleSubmit } = useForm({});
    // const Component = (props) => {


    const onSubmit1 = (val) => {
        console.log("data+++>", val);
        const postData = { username: val.email, password: val.password }
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
            .then(res => setAuth(res.result))
        // .then(res => { variable = res.result })
        // .then

        //
        // .then(res => console.log("data===", (res.result)))
        // .then(res => localStorage.setItem(res, res.result))
        // .then(data => console.log(data));
    }
    // console.log("data===",variable);

    // }
    // const Component = (props) =>{
    //    

    //     Agent.API.get(props.id)
    //     .then((response)=>{
    //       variable = response.data })


    function work() {
        // const access_token = localStorage.getItem();
        navigate(`/workspace?token=${auth.access_token}`)

    }
    const onSubmit2 = (value) => {
        // console.log("data+++>", val);
        const postData = { email: value.forgotemail }
        fetch('http://localhost:3000/users/forgotPassword', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json' },
        })
        // .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        // .then(res => setAuth(res.result))
        // console.log("res==>", res)
        // //   .then(data => console.log(auth));
    }

    return (
        <div>
            <h1>login</h1>
            <div>
                {/* {
                    auth.map(item => (
                        <tbody>
                            <tr>
                                <td>{item.access_token}</td>
                            </tr>
                        </tbody>
                    ))
                } */}
                <form onSubmit={handleSubmit(onSubmit1)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} className="form-control w-25 mx-auto mb-3 mt-1" type="email" name="email" placeholder="email" />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input {...register("password")} className="form-control w-25 mx-auto mb-3 mt-1" type="password" name="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto">Login</button>
                    <button type="button" onClick={work} className="btn btn-outline-primary m-3">Create Workspace</button>
                </form>
            </div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-outline-warning m-3">Forgot Password</button>

            {/* <!-- The Modal --> */}
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Forgot Password</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">

                            <form onSubmit={handleSubmit(onSubmit2)} >
                                <div>
                                    <input {...register("forgotemail")} type="email" className="form-control w-75 mx-auto mb-3" placeholder="email" />
                                </div>
                                <div className="row mb-5 ">
                                    <button type="submit" className="btn btn-primary w-25 mx-auto">Send link</button>

                                </div>

                            </form >
                        </div>
                        {/* <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div> */}
                    </div>
                </div>
            </div>
        </div >

    );
} export default Login;