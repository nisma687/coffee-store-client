import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const user=useLoaderData();
    console.log(user);
    // delete user state set
    const [users,setUsers]=useState(user);
    const handleDeleteUser=id=>{
        console.log(id);
        fetch(`https://coffee-store-server-fh1kt9p4g-nismahossain41982-gmailcom.vercel.app/users/${id}`,
        {
            method:'DELETE'
        })
        .then(req=>req.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0)
            {
                const remaining=users.filter(u=>u._id!==id);
                setUsers(remaining);
                console.log('deleted');

            }
        })
    }
    return (
        <div>
            <h3 className="text-4xl">All the users</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(u=> <tr key={u._id}>
          <th>1</th>
          <td>{u.email}</td>
          <td>{u.createdAt}</td>
          <td>{u.lastLoggedAt}</td>
          <td>
              <button
              onClick={()=>handleDeleteUser(u._id)}
               className="btn">X</button>
          </td>
         
        </tr>)
     }


    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;