import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
const Services = () => {

    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

// console.log(services)

    return (
        <div  className="container mx-auto my-20">
            <div className="text-center space-y-4 mb-5">
                <h3 className="font-bold text-red-500">Services</h3>
                <h2 className="font-bold text-3xl">Our Services Area</h2>
                <p className="text-gray-500">The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Dont Look Even Slightly Believable</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;