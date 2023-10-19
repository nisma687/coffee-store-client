import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignIn = () => {

    const{signin}=useContext(AuthContext);

    const handleSignIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signin(email,password)
        .then(result=>{
            console.log('successfull',result.user);
            const user={
                email,
                lastLoggedAt:result?.user?.metadata?.lastSignInTime
            }
            // update last logged in the database
            fetch('https://coffee-store-server-fh1kt9p4g-nismahossain41982-gmailcom.vercel.app/users'
            ,
            {
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn}
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
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;