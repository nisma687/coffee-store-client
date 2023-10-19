import { useLoaderData } from "react-router-dom";


const Users = () => {
    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <h3 className="text-4xl">All the users</h3>
        {
            user.map(user=><div key={user._id}><h3>{user.email}</h3></div>
                )
        }
        </div>
    );
};

export default Users;