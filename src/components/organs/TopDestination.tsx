import { useCallback, useEffect, useRef, useState } from "react";
import { Text } from "../atoms/Text";
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";
import City1 from "../../assets/gallery1.jpeg"
import City2 from "../../assets/gallery2.jpeg"
import City3 from "../../assets/gallery3.jpeg"
import City4 from "../../assets/gallery4.jpeg"
import City5 from "../../assets/gallery5.jpeg"
import City6 from "../../assets/gallery6.jpeg"

// API Utility
const fetchTopDestinations = async () => {
  const API_KEY = "your_api_key_here";
  const BASE_URL = "https://countriesnow.space/api/v0.1/countries";

  try {
    const response = await axios.get(BASE_URL, {
      headers: { "Api-Key": API_KEY },
    });
    console.log(response.data)
    return response.data.data;
  } catch (error) {
    console.error("Error fetching top destinations:", error);
    return [];
  }
};

const TopDestination = () => {
  const sliderRef = useRef<Slider | null>();
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch top destinations
  useEffect(() => {
    const loadDestinations = async () => {
      const data = await fetchTopDestinations();
      setDestinations(data);
      setLoading(false);
    };

    loadDestinations();
  }, []);

  // Slider navigation functions
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Render default images if not available
  const renderCities = useCallback((index: number) => {
    const defaultImages = [
      City1,
      City2,
      City3,
      City4,
      City5,
      City6,
    ]; // Replace with your default images
    return defaultImages[index % defaultImages.length];
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading Top Destinations...</div>;
  }

  return (
    <section id="destinations" className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
      <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
        Explore the World
      </Text>
      <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
        Top Destinations
      </Text>

      {/* Controllers */}
      <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
        <Button onClick={previous} className="cursor-pointer bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full">
          <CaretLeft size={18} color="currentColor" weight="fill" />
        </Button>
        <Button onClick={next} className="cursor-pointer bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full">
          <CaretRight size={18} color="currentColor" weight="fill" />
        </Button>
      </div>

      {/* Slides */}
      <div className="w-full h-auto mt-4">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {destinations.map((destination, index) => (
            <div key={destination.iso_alpha3 || index} className="md:px-6 px-3">
              <Card
                cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
                imageAlt={destination.name}
                imageSrc={renderCities(index)}
                imageWrapperClass="w-full h-[250px] overflow-hidden"
                cover="group-hover:scale-125 transition duration-500 ease"
                textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
              >
                <div className="flex justify-between items-center">
                  <Text as="h4" className="text-base font-medium text-color3">
                    {destination.name}
                  </Text>
                  <Text as="small" className="text-color3 font-light text-sm">
                    {destination.country || "Unknown Continent"}
                  </Text>
                </div>
                <div className="w-full flex gap-4 items-center text-color3">
                  <AirplaneTilt size={20} color="currentColor" weight="fill" />
                  <Text as="p" className="text-color3 font-light text-base">
                    Explore Now
                  </Text>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopDestination;
