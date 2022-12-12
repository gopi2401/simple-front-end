import { useForm } from "react-hook-form";
function Newpassword() {
    const url = window.location;
    // console.log(url);
    const access_token = new URLSearchParams(url.search).get('token');
    // console.log(access_token);
    const { register, handleSubmit } = useForm({});

    const onSubmit = (val) => {
        console.log("data+++>", val);
        const postData = { password: val.password }
        fetch(`http://localhost:3000/users/changePassword`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${access_token}`,
                'Authorization': 'Bearer ' + access_token,
            },
        })
        // .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        // .then(res => setAuth(res.result))
        // console.log("res==>", res)
        //   .then(data => console.log(auth));
    }
    return (
        <div><h1>new password</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="password">password</label>
                        <input {...register("password")} className="form-control w-25 mx-auto mb-3 mt-1" type="password" name="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto">save password</button>
                </form>
            </div>
        </div>
    )
} export default Newpassword;