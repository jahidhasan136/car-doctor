import { Link, useLoaderData } from "react-router-dom";
import checkout from '../../assets/images/checkout/checkout.png'

const Checkout = () => {

    const services = useLoaderData()
    console.log(services)

    return (
        <div>
            <div  className="relative">
                <img className="w-full rounded-xl" src={checkout} alt="" />
                <h1 className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full top-0 md:pt-28 md:pl-20 text-4xl text-white rounded-xl
                 font-bold">Check Out</h1>
                <p className="bg-red-600 inline-block p-3 text-white btn-shape md:left-44 px-10 lg:left-96 md:px-56 absolute bottom-0">Home/Checkout</p>
            </div>
            <div className="bg-gray-200 grid justify-center p-10 my-20 rounded-md">
                <form className="w-[800px] space-y-5">
                    <div className="flex gap-5">
                        <input className="border w-1/2  p-3 rounded-md" type="text" name="firstName" id="" placeholder="First Name" />
                        <input className="border w-1/2 p-3 rounded-md" type="text" name="lastName" id="" placeholder="Last Name" />
                    </div>
                    <div className="flex gap-5">
                        <input className="border w-1/2 p-3 rounded-md" type="number" name="number" id="" placeholder="Your Phone" />
                        <input className="border w-1/2 p-3 rounded-md" type="email" name="email" id="" placeholder="Your Email" />
                    </div>
                    <textarea className="border w-full p-3 rounded-md" name="" id="" cols="60" rows="10" placeholder="Your message"></textarea>
                    <Link className="btn btn-red w-full">Order Confirm</Link>
                </form>
            </div>
        </div>
    );
};

export default Checkout;