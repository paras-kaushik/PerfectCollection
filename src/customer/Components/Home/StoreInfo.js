import React from 'react';

const StoreInfo = () => {
  return (
    <div className="flex flex-col items-center" style={{marginTop:"8rem"}}>
      {/* Store Heading */}
      <h1 className="text-4xl font-semibold mb-4 text-gray-800">
        Shop at Store: Indirapuram/Gzb
      </h1>

      {/* Information Box */}
      <div className="text-black p-4 rounded-md max-w-4xl text-center shadow-md" style={{border:"1px solid black"}}>
        <p className="text-lg text-2xl" >
          Please note that we are a small business and do not sell all of our products through this website as yet. The below mentioned products can be purchased either by contacting us, or via call or social media, or by visiting our store in Indirapuram Ghaziabad.
        </p>
      </div>
    </div>
  );
};

export default StoreInfo;
