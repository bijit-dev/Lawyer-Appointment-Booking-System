
const Banner = () => {
    return (
        <div
            className="hero min-h-screen mt-3"
        >
            <div className="heroBg h-full container text-neutral-content flex justify-center items-center rounded-3xl ">
            <div className="flex flex-col justify-center items-center text-center ">
                        <h1
                            className="max-w-[915px] mb-5 text-2xl md:text-4xl lg:text-5xl font-extrabold Mulish">
                            It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                        <p className="mb-5 max-w-[959px] Mulishtext-5xl font-medium text-sm md:text-base">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Banner;