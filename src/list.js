import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
function List() {
  const navigate = useNavigate('/update')
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(res => setData(res.result))
    // .then(data => console.log(data));

  }, [])
  function handleClick(id) {
    fetch(`http://localhost:3000/users/${id}`, { method: "delete" })
    alert("id user details removed");
  }
  function Update(id) {
    navigate(`/update/${id}`)
  }

  // add form  validtion
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
    console.log(val)
    // val.preventDefault()
    const postData = { id: val.id, name: val.name, age: val.age, dob: val.dob, email: val.email, password: val.password, mobileNo: val.mobileNo }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return (
    <div>
      <div className="container">
        <h1 className='text-center p-3'>User list Table</h1>
        <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-outline-warning m-3 w-25">Add</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th></th>
            </tr>
          </thead>
          {data.map(item => (
            <tbody>
              <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>{item.mobileNo}</td>
                <td className='p-3'>
                  <button type="button" onClick={Update.bind(this, item.id)} className="btn btn-outline-primary m-3">Update</button>
                  <button id="1" type="button" onClick={handleClick.bind(this, item.id)} className="btn btn-outline-danger m-3">Delete</button></td>
              </tr>
            </tbody>
          ))
          }

        </table >
      </div>
      {/* <!-- The Modal --> */}
      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Add User Details</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">

              <form onSubmit={handleSubmit(onSubmit)} >


                <div className="">
                  <input {...register("id")} type="number" className="form-control w-75 mx-auto mb-3" placeholder="ID" />
                  {errors.id && <p className="w-75 mx-auto text-danger">please enter your id</p>}
                </div>

                <div> <input {...register("name")} type="text" className="form-control w-75 mx-auto mb-3" placeholder="Name" />
                  {errors.name && <p className="w-75 mx-auto text-danger">please enter Name</p>}
                </div>
                <div className="">
                  <input {...register("age")} type="number" className="form-control w-75 mx-auto mb-3" placeholder="Age" />
                  {errors.age && <p className="w-75 mx-auto text-danger">please enter age</p>}
                </div>
                <div>
                  <div>
                    <input {...register("dob")} className="form-control w-75 mx-auto mb-3" placeholder="MM/DD/YYY" type="date" />
                    {errors.dob && <p className="w-75 mx-auto text-danger">please enter DOB</p>}

                  </div>
                  <div>
                    <input {...register("email")} type="email" className="form-control w-75 mx-auto mb-3" placeholder="email" />
                    {errors.email && <p className="w-75 mx-auto text-danger">please enter email</p>}
                  </div>
                </div>
                <div>
                  <div>
                    <input {...register("password")} type="password" className="form-control w-75 mx-auto mb-3" placeholder="Password" />
                    {errors.password && <p className="w-75 mx-auto text-danger">please enter password</p>}

                  </div>
                </div>
                <div>
                  <div>
                    <input {...register("mobileNo")} type="tel" className="form-control w-75 mx-auto mb-3" placeholder="Contact number"></input>
                    {errors.mobileNo && <p className="w-75 mx-auto text-danger">please enter Mobile No</p>}
                  </div>
                </div>
                <div className="row mb-5 ">
                  <button type="submit" className="btn btn-primary w-25 mx-auto">Add</button>

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
}

export default List;