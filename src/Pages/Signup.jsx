import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

 
     const [previewImage, setPreviewImage] = useState("");

     const [signupData, setSignupData] = useState({
        fullName : "",
        email :"",
        password : "",
        avatar: ""
     });

     function handleUserInput(e){
        const {name , value} = e.target;
        setSignupData({
            ...signupData,
            [name] : value
        })
     }

        function getImage(event) {
            event.preventDefault();
            // getting the image
            const uploadedImage = event.target.files[0];
    
            if(uploadedImage) {
                setSignupData({
                    ...signupData,
                    avatar: uploadedImage
                });
                const fileReader = new FileReader();
                fileReader.readAsDataURL(uploadedImage);
                fileReader.addEventListener("load", function () {
                    setPreviewImage(this.result);
                })
        }

     }
     
     function createNewAccount(event) {
        event.preventDefault();
        if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar){
            toast.error("please fill all the details");
            return;
        }

        // checking name field length
        if(signupData.fullName.length < 5) {
            toast.error("Name should be atleast of 5 characters")
            return;
        }
        // checking valid email
        if(!isEmail(signupData.email)) {
            toast.error("Invalid email id");
            return;
        }
        // checking password validation
        if(!isValidPassword(signupData.password)) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData = new FormData();
        formData.append("full name", signupData.fullName);
        formData.append("email",signupData.email);
        formData.append("password",signupData.password);
        formData.append("avatar",signupData.avatar);

        // dipatch create account action 
        const response =  dispatch(createNewAccount(formData));
        console.log(response)
        if(response?.payload?.success)

        navigate("/");

        setSignupData({
            fullName : "",
            email :"",
            password : "",
            avatar: ""
});
   setPreviewImage("");
 }

   return  (
       <HomeLayout>
        <div className="flex item-center justify-center h-[190vh]" >
         <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-whit w-80 h-70 shadow-[0_0_10px_black]">
            <h1 className="text-center text-2xl font-bold ">Registration Page</h1>

            <label htmlFor="image_uploads" className="cursor-pointer">
                {previewImage ? (
                    <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />)
                : (
                    <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                )}
            </label>
            <input 
               onChange={getImage}
               className="hidden"
               type="file"
               name="imagw_uploads"
               id="image_uploads"
               accept=".jpg, .jpeg, .png, .svg"
             />
               <div className="flex flex-col gap-1">
                <label htmlFor="fullName" className="fon-semibold">Name</label>
               <input 
                type="fullName"
                required
                name="fullName"
                id="fullName"
                placeholder="Enter your fullName.."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={signupData.fullName}
               />
               </div>

             <div className="flex flex-col gap-1">
                <label htmlFor="email" className="fon-semibold">Email</label>
               <input 
                type="email"
                required
                name="email"
                id="email"
                placeholder="Enter your email.."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={signupData.email}
               />
               </div>
               <div className="flex flex-col gap-1">
                <label htmlFor="password" className="fon-semibold">Password</label>
               <input 
                type="password"
                required
                name="password"
                id="password"
                placeholder="Enter your password.."
                className="bg-transparent px-2 py-1 border"
                onChange={handleUserInput}
                value={signupData.password}
               />
             </div>
             <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold text-lg cursor-pointer">
                Create Account
             </button>
             <p className="text-center">
                  Already have an account ? <Link to ="/Login" className="link text-accent cursor-pointer">Login</Link>
             </p>
         </form>
        </div>
       </HomeLayout>
    );

}


export default Signup;