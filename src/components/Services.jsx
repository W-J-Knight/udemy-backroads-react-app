import Title from "./Title";
import Service from "./Service";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="servives" />
      <div className="section-center services-center">
        {services.map((service)=>{
          return <Service {...service} key={service.id}/>
        })}
      </div>
    </section>
  );
};
export default Services;
