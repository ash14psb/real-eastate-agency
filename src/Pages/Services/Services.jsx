import Counter from "./Counter/Counter";
import OurPackage from "./OurPackage/OurPackage";
import Service from "./Service/Service";
import Specialization from "./Specialization/Specialization";

const Services = () => {
    return (
        <div>
            <Service></Service>
            <Counter></Counter>
            <OurPackage></OurPackage>
            <Specialization></Specialization>
        </div>
    );
};

export default Services;