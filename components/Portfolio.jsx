import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1>Travel Photos</h1>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto" }}
          width="677"
          height="451"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width="215"
          height="217"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width="215"
          height="217"
        />
      </div>{" "}
      <div className="w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width="215"
          height="217"
        />
      </div>{" "}
      <div className="w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width="215"
          height="217"
        />
      </div>{" "}
      <div className="w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width="215"
          height="217"
        />
      </div>
    </div>
  );
};

export default Portfolio;
