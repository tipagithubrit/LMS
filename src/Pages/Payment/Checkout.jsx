import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import {BiRupee} from "react-icons/bi"

function Checkout () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key)
    const subscription_id= useSelector((state => state?.razorpay?.subscription_id))
    const paymentDetails = {
        razorpay_payment_id : "",
        razorpay_subscription_id: "",
        razorpay_signature : " "
    }

    async function handleSubscription(e) {
        e.prevantDefault();
        if(!razorpayKey || !subscription_id){
           toast.error("something went wrong");
            return;
        }
        const options= {
            key : razorpayKey,
            subscription_id:subscription_id,
            name: "Courseify pvt. ltd",
            description : "Subscription",
            theme : {
                color : '#f37254'
            },
            prefill : {
                email : userData.email,
                name : userData.fullName
               },
            handler : async function (response){
                paymentDetails.razorpay_payment_id= response.razorpay_payment_id;
                paymentDetails.razorpay_signature= response.razorpay_signature;
                paymentDetails.razorpay_subscription_id= response.razorpay_subscription_id;

                toast.success("Payment successfull");

                const res =  dispatch(verifyUserPayment(paymentDetails));
                res?.payload?.success ? navigate("/checkout/success")  : navigate("/cheout/fail")


            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

   async function load(){
    await dispatch(getRazorPayId());
    await dispatch(purchaseCourseBundle());
   }

    useEffect(() =>{
        load();
        
    }, []);

    return (
        <HomeLayout>
            <form 
            onSubmit={handleSubscription}
            className="min-h-[90vh] felx items-center justify-center text-white">

            <div className="w-80 h-[26rem] felx felx-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl0lg rounded-tr-lg ">Subscription Bundle </h1>
                <div className="px-4 space-y-5 text-center">
                    <p className="text-[17px]">
                        This purchase will allow you to Access all available course
                        of out platform for {" "}
                        <span className="text-yellow-500 font-bold">
                            <br />
                            2 year duration 
                        </span>
                        All the exixting and new launched courses will be also available
                    </p>
                    <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                        <BiRupee /> <span>499</span>only
                    </p>
                    <div className="text-gray-200">
                        <p>100% refund cancellation</p>
                        <p>* Terms and conditions applied *</p>
                    </div>
                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 transititon-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2  ">
                        Buy Now
                    </button>
                </div>
            </div>
            
           

            </form>
            
        </HomeLayout>
    )
    

}

export default Checkout;