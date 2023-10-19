
import Swal from 'sweetalert2'



const AddCoffee = () => {


    const handleAddCoffee=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo_url=form.photo_url.value;
      
        const newCoffee={
            name,quantity,supplier,taste,category,details,photo_url
        }
        console.log(newCoffee);


        fetch('https://coffee-store-server-fh1kt9p4g-nismahossain41982-gmailcom.vercel.app/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })



    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-extrabold">Add a  Coffee</h2>
            <form onSubmit={handleAddCoffee}>
            {/* form name and qauntity row */}
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Coffee Name</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Coffee Name" 
        name="name"
        className="input input-bordered w-full" />
            </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
            <span className="label-text">Quantity </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Quantity" 
        name="quantity"
        className="input input-bordered w-full" />
            </label>
            </div>


            </div>
            {/* form row supplier taste*/}
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Supplier </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Supplier Name" 
        name="supplier"
        className="input input-bordered w-full" />
            </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
            <span className="label-text">Taste </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Taste" 
        name="taste"
        className="input input-bordered w-full" />
            </label>
            </div>


            </div>
            {/* form row category and details*/}
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Category</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Category" 
        name="category"
        className="input input-bordered w-full" />
            </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
            <span className="label-text">Details </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Details" 
        name="details"
        className="input input-bordered w-full" />
            </label>
            </div>


            </div>
            {/* form row photo url*/}
            <div className="mb-8">

            <div className="form-control w-full">
                <label className="label">
            <span className="label-text">Photo Url</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Photo Url" 
        name="photo_url"
        className="input input-bordered w-full" />
            </label>
            </div>

            

            </div>

            

        <input className="btn
         btn-block bg-black text-white"
         type="submit" value="Add Coffee"/>




        </form>
        </div>
    );
};

export default AddCoffee;