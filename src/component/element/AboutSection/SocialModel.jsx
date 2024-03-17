import React from "react";

const SocialModel = () => {
  return (
    <main className="lg:pt-[80px] pt-[60px] lg:pb-[200px] pb-[60px]  lg:px-[40px] relative z-10">
      <section className="img-section relative z-10 lg:px-0 px-[20px]">
        <img
          src="/image/about/modal-img.png"
          className="max-w-[500px] w-full"
          alt=""
        />
      </section>
      <div
        className="model-content xl:max-w-[850px] lg:max-w-[700px] w-full lg:absolute lg:left-[25%] lg:bottom-[10%] lg:mt-0 mt-[-80px] flex items-center justify-center lg:py-10 pt-[120px] pb-10 lg:px-1 px-6 bg-[#F6F5F8] lg:z-10 z-[-1] "
      >
        <div className="xl:max-w-[600px] lg:max-w-[500px] w-full">
          <span className="mb-4 red-badge">social model</span>
          <h2 className="uppercase mb-3">social model</h2>
          <p className="text-[16px] text-gray font-secondary text-justify">
            Our initial focus is on the Nottingham boroughs that are “hot spots”
            for social deprivation <br /> (1). Gang involvement, violence,
            crime, re-offending and unemployment blight too many lives and young
            people, their families and communities suffer from a continuous
            chain of entrenched lifestyle, offending and social, health and
            economic problems.
          </p>
          <p className="mt-2 text-[16px] text-gray font-secondary">
            We will work with young people to break that chain with positivity.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SocialModel;
