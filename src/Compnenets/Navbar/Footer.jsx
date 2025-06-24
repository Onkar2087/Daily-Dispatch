import React, { forwardRef, useState } from 'react';
import { AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = forwardRef((props, ref) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      alert("Please enter your email.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="w-full text-white bg-black">
      <hr className="text-slate-600 h-[0.1px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl mb-4 leading-snug">
            Subscribe to our <span className="text-[#fc444a]">Newsletter</span> for <span className="text-[#fc444a]">daily updates!</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black text-gray-400 border-b border-white outline-none text-lg px-2 py-2 w-full sm:w-[40%] mb-4 sm:mb-0"
            />
            <button
              onClick={handleSubscribe}
              ref={ref}
              className="uppercase text-lg font-light border rounded-md px-4 py-2 hover:text-black hover:bg-white cursor-pointer hover:font-semibold transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center mt-6 px-4">
        <ul className="flex flex-wrap gap-6 justify-center text-[#fc444a] mb-6">
          <li><AiOutlineFacebook size={28} /></li>
          <li><AiOutlineYoutube size={28} /></li>
          <li><FaXTwitter size={28} /></li>
          <li><FaLinkedinIn size={28} /></li>
        </ul>
        <p className="text-sm font-thin text-slate-400">
          Designed and Developed by <a href="" className="underline hover:text-[#fc444a]">Onkar</a>
        </p>
      </footer>
    </div>
  );
});

export default Footer;
