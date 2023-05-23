import img1 from '../../../assets/images/banner/banner1.jpg'
import img2 from '../../../assets/images/banner/banner2.jpg'
import img3 from '../../../assets/images/banner/banner3.jpg'
import img4 from '../../../assets/images/banner/banner4.jpg'



const Banner = () => {
    return (
        <div className='p-5'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md' src={img1} />
                    <div className="absolute h-full w-full pl-10 pt-36 text-white space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md">
                        <h1 className='text-5xl font-bold w-72'>
                            Affordable Price For Car Servicing
                        </h1>
                        <p className='w-2/3 text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-red border-0  mr-5'>Discover More</button>
                        <button className='btn btn-outline text-white border-white/40 border-2'>Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 space-x-7 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-black/10 hover:bg-black/20 backdrop-blur-lg border-0 btn-circle">❮</a>
                        <a href="#slide2" className="btn bg-red-500 hover:bg-red-600 border-0 btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img className='w-full rounded-md' src={img2} />
                    <div className="absolute h-full w-full pl-10 pt-36 text-white space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md">
                        <h1 className='text-5xl font-bold w-72'>
                            Affordable Price For Car Servicing
                        </h1>
                        <p className='w-2/3 text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-500 hover:bg-red-600 border-0  mr-5'>Discover More</button>
                        <button className='btn btn-outline text-white border-white/40 border-2'>Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 space-x-7 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn bg-black/10 hover:bg-black/20 backdrop-blur-lg border-0 btn-circle">❮</a>
                        <a href="#slide3" className="btn bg-red-500 hover:bg-red-600 border-0 btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className='w-full rounded-md' src={img3} />
                    <div className="absolute h-full w-full pl-10 pt-36 text-white space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md">
                        <h1 className='text-5xl font-bold w-72'>
                            Affordable Price For Car Servicing
                        </h1>
                        <p className='w-2/3 text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-500 hover:bg-red-600 border-0  mr-5'>Discover More</button>
                        <button className='btn btn-outline text-white border-white/40 border-2'>Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 space-x-7 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn bg-black/10 hover:bg-black/20 backdrop-blur-lg border-0 btn-circle">❮</a>
                        <a href="#slide4" className="btn bg-red-500 hover:bg-red-600 border-0 btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img className='w-full rounded-md' src={img4} />
                    <div className="absolute h-full w-full pl-10 pt-36 text-white space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md">
                        <h1 className='text-5xl font-bold w-72'>
                            Affordable Price For Car Servicing
                        </h1>
                        <p className='w-2/3 text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-500 hover:bg-red-600 border-0  mr-5'>Discover More</button>
                        <button className='btn btn-outline text-white border-white/40 border-2'>Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 space-x-7 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn bg-black/10 hover:bg-black/20 backdrop-blur-lg border-0 btn-circle">❮</a>
                        <a href="#slide1" className="btn bg-red-500 hover:bg-red-600 border-0 btn-circle text-white">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;