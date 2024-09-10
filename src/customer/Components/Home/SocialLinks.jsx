import React from 'react';

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col items-center" style={{marginTop:"8rem"}}>
      <h1 className="text-4xl font-semibold mb-6">Shop Through Socials</h1>
      <div className="flex space-x-36">
        <a
          href="#"
          className="text-2xl text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{border:"1px solid black"}}
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-2xl text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{border:"1px solid black"}}
        >
          Google Maps
        </a>
        <a
          href="#"
          className="text-2xl text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{border:"1px solid black"}}
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-2xl text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{border:"1px solid black"}}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
