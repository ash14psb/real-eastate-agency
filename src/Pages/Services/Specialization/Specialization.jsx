

const Specialization = () => {
    return (
        <div className="bg-gray-100  pt-10 pb-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <p className="small-title text-blue-700">WHAT WE DO FOR YOU</p>
                    <h2 className="">Our Specialization</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-32">
                    <div className="card w-full text-center">
                        <div className=" indicator mx-auto p-8 rounded-lg bg-white my-primary-color">
                            <i className="fa-solid fa-users-gear text-4xl"></i>
                            <span className="badge badge-md indicator-item my-bg-color p-4 rounded-full text-lg font-bold">01</span>
                        </div>
                        <div className='py-4'>
                            <h5 className=""> Project Planning</h5>
                            <p className="text-gray-500 font-medium">Internal or organic sources without turnkey growth strategies. Seamlessly promote client-centered</p>
                        </div>
                    </div>
                    <div className="card w-full text-center">
                        <div className=" indicator mx-auto p-8 rounded-lg bg-white my-primary-color">
                            <i className="fa-solid fa-users-gear text-4xl"></i>
                            <span className="badge badge-md indicator-item my-bg-color p-4 rounded-full text-lg font-bold">02</span>
                        </div>
                        <div className='py-4'>
                            <h5 className=""> Project Planning</h5>
                            <p className="text-gray-500 font-medium">Internal or organic sources without turnkey growth strategies. Seamlessly promote client-centered</p>
                        </div>
                    </div>
                    <div className="card w-full text-center">
                        <div className=" indicator mx-auto p-8 rounded-lg bg-white my-primary-color">
                            <i className="fa-solid fa-users-gear text-4xl"></i>
                            <span className="badge badge-md indicator-item my-bg-color p-4 rounded-full text-lg font-bold">03</span>
                        </div>
                        <div className='py-4'>
                            <h5 className=""> Project Planning</h5>
                            <p className="text-gray-500 font-medium">Internal or organic sources without turnkey growth strategies. Seamlessly promote client-centered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialization;