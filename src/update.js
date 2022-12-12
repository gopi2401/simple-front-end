import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


import React, { useState, useEffect } from 'react';

function Update() {
    const navigate = useNavigate('/')



    const { id } = useParams();
    const [val, setVal] = useState([]);
    const [userid, setIdUserid] = useState();
    const [vuserName, setVuserName] = useState();
    const [vuserage, setVuserAge] = useState();
    const [vuserdob, setVuserDob] = useState();
    const [vuseremail, setVuserEmail] = useState();
    const [vuserpassword, setVuserPassword] = useState();
    const [vusermobileno, setVuserMobileno] = useState();

    console.log(userid);
    console.log(val);




    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
            .then(res => setVal(res))
        // .then(data => console.log(data));
    }, [])

    const onSubmit = (e) => {
        // e.preventDefault()
        const postData = { id: userid, username: vuserName, age: vuserage, dob: vuserdob, email: vuseremail, password: vuserpassword, mobileNo: vusermobileno }

        fetch(`http://localhost:3000/student/${id}`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json' },
        })
        navigate("/")
    }

    return (
        <div>
            < form>
                <div>
                    <h1 className="text-center my-5">Update User Details</h1>
                    <div className="">
                        <input type="number" 
                            className="form-control w-25 mx-auto mb-3" placeholder="ID" />
                    </div>
                    <div> <input type="text" 
                        className="form-control w-25 mx-auto mb-3" placeholder="Name" />
                    </div>
                    <div className="">
                        <input type="number" 
                            className="form-control w-25 mx-auto mb-3" placeholder="Age" />
                    </div>
                    <div>
                        <div>
                            <input type="date" 
                                className="form-control w-25 mx-auto mb-3" placeholder="MM/DD/YYY" />
                        </div>
                        <div>
                            <input type="email"
                                className="form-control w-25 mx-auto mb-3" placeholder="email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input  type="password"
                                className="form-control w-25 mx-auto mb-3" placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="tel" 
                                className="form-control w-25 mx-auto mb-3" placeholder="Contact number"></input>
                        </div>
                    </div>
                    <div className="row mb-5 ">
                        <button type="submit" className="btn btn-primary w-25 mx-auto">Add</button>

                    </div>
                </div >
            </form >
        </div >
    );
} export default Update;