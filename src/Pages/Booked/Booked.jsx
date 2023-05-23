import { useLoaderData } from "react-router-dom";
import checkout from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Booked = () => {

    const services = useLoaderData()

    const { user } = useContext(AuthContext)
    const { title, _id, price, img } = services

    const handleBookings = event => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value 
        const date = form.date.value 
        const booking = {
            customerName : name,
            email,
            date,
            services: title,
            service_id: _id, 
            price,
            img
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings/', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }

    return (
        <div>
            <div className="relative">
                <img className="w-full rounded-xl" src={checkout} alt="" />
                <h1 className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full top-0 md:pt-28 md:pl-20 text-4xl text-white rounded-xl
                 font-bold">Check Out</h1>
                <p className="bg-red-600 inline-block p-3 text-white btn-shape md:left-44 px-10 lg:left-96 md:px-56 absolute bottom-0">Home/Booked</p>
            </div>
            <div className="bg-gray-200 grid justify-center p-10 my-20 rounded-md">
                <form onSubmit={handleBookings} className="w-[800px] space-y-5">
                    <div className="flex gap-5">
                        <input className="border w-1/2  p-3 rounded-md" type="text" name="name" id="" placeholder="Name" />
                        <input className="border w-1/2 p-3 rounded-md" type="date" name="date" id="" />
                    </div>
                    <div className="flex gap-5">
                        <input className="border w-1/2 p-3 rounded-md" type="email" name="email" id="" defaultValue={user?.email} />
                        <input className="border w-1/2 p-3 rounded-md" type="text" name="price" id="" defaultValue={'$' + price} />
                    </div>
                    <input type="submit" className="btn btn-red w-full" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Booked;