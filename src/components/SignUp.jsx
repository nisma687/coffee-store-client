import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const SignUp = () => {
    const {user,createUser}=useContext(AuthContext);
    const handleSignUp=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result=>
            {
                console.log(result.user);
                const createdAt=result.user?.metadata?.creationTime;
                // new User has been created in the database
                const user={email,createdAt};
                fetch('https://coffee-store-server-fh1kt9p4g-nismahossain41982-gmailcom.vercel.app/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)

                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.insertedId)
                    {
                        console.log('user inserted successfully in database');
                    }

                })
            })
        .catch(error=>{
            console.log(error);
        })
      
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl mb-4 font-bold">SignUp now!!!!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name="email"
                 placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name="password"
                placeholder="password" className="input input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;