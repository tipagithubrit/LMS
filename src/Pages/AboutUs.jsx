import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import { celeberities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";


function AboutUs() {

   

    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            our goal is to provide affordable and quality education to the world.
                            we are providing the platform for the aspiring techers and students to share 
                            their skills, creativity and knowldge to each other to empower and contribute
                            in the growth and  wellness of mankund.
                        </p>

                    </section>
                    <div className="w-1/2">
                        <img 
                        id="test1"
                        style={{
                            filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                        }}
                        alt="about main image"
                         className="drop-shadow-2xl"
                        src={aboutMainImage}
                         />
                    </div>

                </div>
<div className="carousel w-1/2 my-16 m-auto">
    {celeberities && celeberities.map(celebrity=> ( <CarouselSlide  
                                                       {...celebrity} 
                                                       key={celebrity.slideNumber} 
                                                       totalSlides={celeberities.length}/>))}
    <CarouselSlide />
 
</div>
     
               
            </div> 
        </HomeLayout>
    )

}

export default AboutUs;