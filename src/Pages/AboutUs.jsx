import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import apj from "../Assets/Images/apj.png";
import billGates from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
import steveJobs from "../Assets/Images/steveJobs.png";


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
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400"/>
    <p className="text-2xl text-gray-200">
        {"Education is the most powerful tool you can use to change the world."}
     </p>
     <h3 className="text-2xl font-semibold">Nelson mandela</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-2xl text-gray-200">
        {"Let us sacrifice our today so that our children can have a better tomorrow"}
     </p>
     <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-2xl text-gray-200">
        {"The true sign of intelligence is not knowledge but imagination."}
     </p>
     <h3 className="text-2xl font-semibold"> Albert Einstein</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-2xl text-gray-200">
        {"The only reason for time is so that everything doesn't happen at once"}
     </p>
     <h3 className="text-2xl font-semibold">Steve Jobs</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-2xl text-gray-200">
        {"Success is a lousy teacher."}
     </p>
     <h3 className="text-2xl font-semibold">Bill Gates</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div>
</div>
     
               
            </div> 
        </HomeLayout>
    )

}

export default AboutUs;