import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import GroupOfPlus from "../../assets/plusGroup.png";
import { Card } from "../molecules/Card";
import { useCallback, useEffect, useState } from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon22 from "../../assets/icon22.png"
import Icon5 from "../../assets/ticket_icon.png"
import { Fade } from "react-awesome-reveal";
import { fetchServices } from "../api/serviceApi";
import Icon6 from "../../assets/umrh.png"

interface Service {
  id: number;
  name: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);


  const renderServiceIcon = useCallback((index: number) => {
    switch (index) {
      case 0:
        return Icon1;
      case 1:
        return Icon2;
      case 2:
        return Icon22;
      case 3:
        return Icon5;
      default:
        return Icon6; 
    }
  }, []);

  if (loading) {
    return <div>Loading services...</div>;
  }

  return (
    <section id="services" className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6">
      <Image image={GroupOfPlus} alt="Vector" className="absolute top-0 right-4 lg:h-36 h-24" />
      <main className="w-full pt-32 flex flex-col gap-3 items-center justify-center">
        <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
          <Fade>Explore Our Services</Fade>
        </Text>
        <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
          <Fade>What We Offer</Fade>
        </Text>

        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0">
          {services.map((service, index) => (
            <Card
              cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
              imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
              cover="object-cover"
              imageAlt={service.name}
              imageSrc={renderServiceIcon(index)}
              textWrapperClass="w-full flex flex-col items-center gap-2"
              key={service.id}
            >
              <Text as="h4" className="text-base rounded font-medium text-color3">
                {service.name}
              </Text>
              <Text as="p" className="text-sm font-light text-center text-color3">
                Learn more about {service.name}
              </Text>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
