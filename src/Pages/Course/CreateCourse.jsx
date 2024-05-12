import { useState } from "react";
import toast from "react-hot-toast";
import  { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput , setUSerInput] = useState({
        title : "",
        category: "",
        createdBy : "",
        description : "",
        thumbnail : null,
        previewImage : ""
 });
   
    function handleImageUpload(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0]
        if(uploadImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function() {
                setUSerInput({
                    ...userInput,
                    previewImage:this.result,
                    thumbnail: uploadImage
                })
            })
        }
    }

    function handleUSerInput(e) {
        const { name, value } = e.target;
        setUSerInput({
            ...userInput,
            [name] : value
        })
    }

     async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy){
           toast.error("All fields are mandatory");
            retrun;
    }

    const response = await dispatch(createNewCourse(userInput));
     if(response?.paylod?.sucess){
        setUSerInput({
            title : "",
        category: "",
        createdBy : "",
        description : "",
        thumbnail : null,
        previewImage : ""
       })
       navigate("/courses");
     }
  


}
    return (
        <HomeLayout>
           <div className="flex items-center justify-center h-[100vh]">
           <form
             onSubmit={onFormSubmit}
             className="flex flex-col justify-center gap-5 rounded:lg text-white w-[700px] my-10 shadow-[0_0_0_10px_black] relative" 
            >

               <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
               <AiOutlineArrowLeft />
               </Link>

                <h1 className="text-center text-2xl font-bold">
                    Create new Course
                </h1>

                <main className="grid grid-cols-2 gap-x-10">
                    <div className="gap-y-6">
                    <div>
                        <label htmlFor="image_uploads" className="cursor-pointer" >
                            {userInput.previewImage ? (
                                <img
                                   className="w-full h-44 m-auto border"
                                   src={userInput.previewImage}
                                /> 
                            ) : (
                                <div className="w-full h-44 m-auto flex items-center justify-center border">
                                   <h1 className="font-bol text-lg"> Upload your course thumbnail</h1>
                                </div>

                             )}
                        </label>
                        <input
                         className="hidden"
                         type="file"
                         id="image_uploads"
                         accept=".jpg, .jpeg, .png"
                          name="image_uploads"
                          onChange={handleImageUpload}
                        />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="text-lg font-semi-bold" htmlFor="title">
                            Course title
                        </label>
                        <input
                         required
                         type="text"
                         name="title"
                         id="title"
                         placeholder="enter course title"
                         className="bg-transparent px-2 py-1 border"
                         value={userInput.title}
                         onChange={handleUSerInput}
                         />
                    </div>
                    </div>

                    <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1 ">
                        <label className="text-lg font-semi-bold" htmlFor="createdBy">
                            Course Instructor
                        </label>
                        <input
                         required
                         type="text"
                         name="createdBy"
                         id="createdBy"
                         placeholder="Enter Course Instructor"
                         className="bg-transparent px-2 py-1 border"
                         value={userInput.createdBy}
                         onChange={handleUSerInput}
                         />
                    </div>
                    </div>

                    <div className="flex flex-col gap-1 ">
                        <label className="text-lg font-semi-bold" htmlFor=" category">
                            Course category
                        </label>
                        <input
                         required
                         type="text"
                         name=" category"
                         id=" category"
                         placeholder="Enter Course category"
                         className="bg-transparent px-2 py-1 border"
                         value={userInput.category}
                         onChange={handleUSerInput}
                         />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="text-lg font-semi-bold" htmlFor=" description">
                            Course description
                        </label>
                        <input
                         required
                         type="text"
                         name=" description"
                         id=" description"
                         placeholder="Enter Course description"
                         className="bg-transparent px-2 py-1 h- 24 overflow-y-scroll resize-none border"
                         value={userInput.description}
                         onChange={handleUSerInput}
                         />

                    </div>
                </main>

                <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm font-semibold text-lg cursor-pointer" >
                    Create course
                </button>






                
            </form>
           </div>

        </HomeLayout>
    )

}

export default CreateCourse;