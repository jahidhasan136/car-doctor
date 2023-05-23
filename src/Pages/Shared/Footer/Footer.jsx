import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/icons/logo.svg'

const Footer = () => {
    return (
        <div className=' bg-black'>
            <footer className="footer p-20 text-white container max-w-7xl mx-auto">
                <div className='space-y-4'>
                    <img src={logo} alt="" />
                    <p className='text-gray-300'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <div className='flex gap-5 text-2xl'>
                        <FaGoogle></FaGoogle>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-2xl mb-2 text-white">About</span>
                    <a className="link link-hover text-gray-300">Home</a>
                    <a className="link link-hover text-gray-300">Services</a>
                    <a className="link link-hover text-gray-300">Contact</a>
                </div>
                <div>
                    <span className="font-bold text-2xl mb-2 text-white">Company</span>
                    <a className='link link-hover text-gray-300'>Why Car Doctor</a>
                    <a className="link link-hover text-gray-300">About</a>
                </div>
                <div>
                    <span className="font-bold text-2xl mb-2 text-white">Support</span>
                    <a className="link link-hover text-gray-300">Support Center</a>
                    <a className="link link-hover text-gray-300">Feedback</a>
                    <a className="link link-hover text-gray-300">Accesbility</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;