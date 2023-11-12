import React from "react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const handleEmailButtonClick = () => {
    alert("Coming Soon");
  };

  return (
    <section className="flex items-center py-10 h-[20rem] bg-black text-red-500">
      <div className="w-[90%] mx-auto flex justify-evenly items-center">
        <div className="flex container text-white flex-col gap-4">
          <h1 className="text-4xl w-[80%]">
            Are you confused, which product is suitable for you?
          </h1>
          <h1 className="text-4xl font-semibold w-[80%]">Need consultation?</h1>
          <p className="text-lg">Get the ultimate solution from our talent.</p>
        </div>
        <button
          className="text-white border rounded-full border-red-500 px-10 bg-red-500 py-2 cursor-pointer"
          onClick={handleEmailButtonClick}
        >
          Email
        </button>
      </div>
    </section>
  );
};

export default Consultation;
