import './Service.css'

const Service = () => {
    return (
        <div className="bg-gray-100 pt-20 pb-28">
            <div className="container mx-auto">
                <div className="text-center">
                    <p className="small-title text-blue-700">TYPES OF OUR SERVICES</p>
                    <h2 className="">Our Available Services</h2>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8">
                    <div>
                        <div className="card w-full mt-20 rounded-lg shadow-xl bg-white service-card">
                            <div className="card-body text-center">
                                <div className="avatar self-center -mt-20">
                                    <div className="bg-gray-100 p-7 w-32 border-white border-8 rounded-full">
                                        <i className="fa-solid fa-laptop-code text-5xl text-blue-700"></i>
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className="">
                                        Web Design
                                    </h6>
                                    <p className="">259 Jobs Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full mt-20 rounded-lg shadow-xl bg-white service-card">
                            <div className="card-body text-center">
                                <div className="avatar self-center -mt-20">
                                    <div className="bg-gray-100 p-7 w-32 border-white border-8 rounded-full">
                                        <i className="fa-solid fa-code text-5xl text-blue-700"></i>
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className="">
                                        Web Development
                                    </h6>
                                    <p className="">129 Jobs Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full mt-20 rounded-lg shadow-xl bg-white service-card">
                            <div className="card-body text-center">
                                <div className="avatar self-center -mt-20">
                                    <div className="bg-gray-100 p-7 w-32 border-white border-8 rounded-full">
                                        <i className="fa-solid fa-bug-slash text-5xl text-blue-700"></i>
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className="">
                                        Web Bug Fix
                                    </h6>
                                    <p className="">156 Jobs Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full mt-20 rounded-lg shadow-xl bg-white service-card">
                            <div className="card-body text-center">
                                <div className="avatar self-center -mt-20">
                                    <div className="bg-gray-100 p-7 w-32 border-white border-8 rounded-full">
                                        <i className="fa-solid fa-bezier-curve text-5xl text-blue-700"></i>
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className="">
                                        Logo Design
                                    </h6>
                                    <p className="">200 Jobs Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;