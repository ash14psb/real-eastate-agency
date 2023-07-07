import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='bg-white'>
            <div className="container mx-auto py-20">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8">
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="p-8 rounded-lg my-bg-color text-white">
                                <i className="fa-solid fa-users-gear text-4xl"></i>
                            </div>
                            <div>
                                <h2>
                                    <CountUp className='text-5xl font-bold' end={858} enableScrollSpy= {true} scrollSpyDelay={100} />
                                </h2>
                                <p className='small-title text-gray-400 -mt-3'>SUCCESSFUL PROJECTS</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="p-8 rounded-lg my-bg-color text-white">
                                <i className="fa-solid fa-users-gear text-4xl"></i>
                            </div>
                            <div>
                                <h2>
                                    <CountUp className='text-5xl font-bold' end={650} enableScrollSpy= {true} scrollSpyDelay={100} />
                                </h2>
                                <p className='small-title text-gray-400 -mt-3'>MEDIA ACTIVITIES</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="p-8 rounded-lg my-bg-color text-white">
                                <i className="fa-solid fa-users-gear text-4xl"></i>
                            </div>
                            <div>
                                <h2>
                                    <CountUp className='text-5xl font-bold' end={567} enableScrollSpy= {true} scrollSpyDelay={100} />
                                </h2>
                                <p className='small-title text-gray-400 -mt-3'>SKILLED EXPERTS</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="p-8 rounded-lg my-bg-color text-white">
                                <i className="fa-solid fa-users-gear text-4xl"></i>
                            </div>
                            <div>
                                <h2>
                                    <CountUp className='text-5xl font-bold' end={28} enableScrollSpy= {true} scrollSpyDelay={100} />K
                                </h2>
                                <p className='small-title text-gray-400 -mt-3'>HAPPY CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;