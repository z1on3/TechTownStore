import React from "react";

const Whyme = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-4xl text-center font-semibold text-white">
        The TechTown Advantage
        </h2>
        <div className="grid grid-cols-3 gap-10 justify-between">
          <div className="text-center flex flex-col gap-3 py-10 px-4">
          <div className="flex justify-center h-64 w-full">
              <img
                src="/images/flatlay-components.webp"
                alt="Serious Power"
                className="object-cover rounded-full"
              />
            </div>
            <h1 className="text-2xl text-white font-semibold">Serious Power</h1>
            <p className="text-gray-400 text-lg">
              Our systems are made to be played - every system has been
              thoughtfully designed and assembled for the best possible gaming
              experience. Every single component that makes it into a TechTown
              PC has to satisfy our technicians' high standards of performance
              and reliability.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 py-10 px-4">
          <div className="flex justify-center h-64 w-full">
              <img
                src="/images/techtown2.jpg"
                alt="Serious Power"
                className="object-cover rounded-full"
              />
            </div>
            <h1 className="text-2xl text-white font-semibold">
              Built By Professionals
            </h1>
            <p className="text-gray-400 text-lg">
              We've been building Gaming PC's for over 30 years, and our
              technicians have a combined experience of over a century. This is
              why we're able to offer such a comprehensive warranty and support
              package with every PC - at no extra charge!
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 py-10 px-4">
          <div className="flex justify-center h-64 w-full">
              <img
                src="/images/warranty.jpg"
                alt="Serious Power"
                className="object-cover rounded-full"
              />
            </div>
            <h1 className="text-2xl text-white font-semibold">3 Year Warranty</h1>
            <p className="text-gray-400 text-lg">
              Built with care here in Philippines, our skilled technicians only
              use the highest quality components. Our skill and attention to
              detail allow us to have PH's BEST PC WARRANTY and LIFETIME
              SUPPORT for every TechTown designed gaming system we sell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyme;
