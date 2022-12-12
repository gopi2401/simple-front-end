import { useForm } from "react-hook-form";
function Workspace() {
    const url = window.location;
    console.log(url);
    const access_token = new URLSearchParams(url.search).get('token');
    console.log(access_token);
    const { register, handleSubmit } = useForm({});
    const onSubmit1 = (val) => {
        console.log("data+++>", val);
        const postData = { subscriptionItemId: val.subscriptionItemId, name: val.name, slug: val.slug, teamCollaborators: val.teamCollaborators }
        fetch('http://localhost:3000/workspaces', {
            method: 'POST',
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
        <div>
            <h1>Workspace</h1>

            <form onSubmit={handleSubmit(onSubmit1)}>
                <div>
                    <label htmlFor="subscriptionItemId">Subscription Item Id</label>
                    <input {...register("subscriptionItemId")} className="form-control w-25 mx-auto mb-3 mt-1" type="number" name="subscriptionItemId" placeholder="ID" />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input {...register("name")} className="form-control w-25 mx-auto mb-3 mt-1" type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="slug">Slug</label>
                    <input {...register("slug")} className="form-control w-25 mx-auto mb-3 mt-1" type="text" name="slug" placeholder="Slug" />
                </div>
                <div>
                    <label htmlFor="teamCollaborators">Team Collaborators</label>
                    <input {...register("teamCollaborators")} className="form-control w-25 mx-auto mb-3 mt-1" type="text" name="teamCollaborators" placeholder="teamCollaborators" />
                </div>
                <button type="submit" className="btn btn-primary mx-auto">Create Workspace</button>
            </form>
        </div>

    )
} export default Workspace;