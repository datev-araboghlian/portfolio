import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img 
          src="/assets/terminal.png" 
          alt="terminal-bg" 
          className="absolute inset-0 min-h-screen z-[-1] object-cover" 
        />

        <div className="contact-container bg-black-100 p-4 sm:p-8 rounded-xl shadow-lg max-w-md w-[95%] sm:w-full">
          <h3 className="head-text text-white mb-4 sm:mb-6 text-center">Let's Connect</h3>
          
          {status && (
            <div 
              className={`
                mb-4 p-3 rounded-md text-center 
                ${status.includes('Thanks') 
                  ? 'bg-green-600 text-white' 
                  : 'bg-red-600 text-white'
                }
              `}
            >
              {status}
            </div>
          )}

          <form 
            action="https://formspree.io/f/xldekdqo" 
            method="POST"
            className="flex flex-col space-y-4"
          >
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-white-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="
                  w-full px-3 py-2 
                  bg-black-200 text-white 
                  border border-white-600 
                  rounded-md 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500
                "
                placeholder="Your Name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-white-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="
                  w-full px-3 py-2 
                  bg-black-200 text-white 
                  border border-white-600 
                  rounded-md 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500
                "
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-white-600 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="
                  w-full px-3 py-2 
                  bg-black-200 text-white 
                  border border-white-600 
                  rounded-md 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500
                "
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full py-3 
                bg-blue-600 text-white 
                rounded-md 
                hover:bg-blue-700 
                transition-colors 
                flex items-center 
                justify-center 
                space-x-2
              "
            >
              <span>Send Message</span>
              <img 
                src="/assets/arrow-up.png" 
                alt="send" 
                className="w-5 h-5" 
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
