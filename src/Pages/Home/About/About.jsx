import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/part.jpg'

const About = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-36 mx-auto my-20'>
            <div className='relative'>
                <img className='w-[500px] rounded-md' src={person} alt="" />
                <img className='w-[250px] absolute left-1/2 h-52 border-8 rounded-md border-white top-1/2' src={parts} alt="" />
            </div>
            <div>
                <h3 className='text-lg font-bold text-red-500 mb-4'>ABout Us</h3>
                <h2 className='font-bold w-[250px] text-3xl mb-7'>We are qualified & of experience in this field</h2>
                <p className='mb-5 text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p className='mb-5 text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className='btn btn-red border-0'>Get more info</button>
            </div>
        </div>
    );
};

export default About;