import './OurPackage.css'

const OurPackage = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h2 className="mb-10">Pricing Plans</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8">
                    <div>
                        <div className="card w-full rounded-lg shadow-xl bg-white price-card">
                            <div className="card-body">
                                <h5>Gold Plan</h5>
                                <h4 className="-mt-4 my-primary-color">$99.99</h4>
                                <div className="bg-gray-100 p-4 mb-3 rounded-md">
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">10+ Revision</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                </div>
                                <button className="btn my-bg-color rounded-md">
                                    Get Started
                                    <i className="ms-3 text-lg fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full rounded-lg shadow-xl bg-white price-card">
                            <div className="card-body">
                                <h5>Premium Plan</h5>
                                <h4 className="-mt-4 my-primary-color">$199.99</h4>
                                <div className="bg-gray-100 p-4 mb-3 rounded-md">
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">10+ Revision</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                </div>
                                <button className="btn my-bg-color rounded-md">
                                    Get Started
                                    <i className="ms-3 text-lg fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full rounded-lg shadow-xl bg-white price-card">
                            <div className="card-body">
                                <h5>VIP Plan</h5>
                                <h4 className="-mt-4 my-primary-color">$299.99</h4>
                                <div className="bg-gray-100 p-4 mb-3 rounded-md">
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">10+ Revision</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                    <p className="mb-2">
                                        <i className="my-primary-color fa-regular fa-circle-check"></i>
                                        <span className="ms-2">Single Page Design</span>
                                    </p>
                                </div>
                                <button className="btn my-bg-color rounded-md">
                                    Get Started
                                    <i className="ms-3 text-lg fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPackage;