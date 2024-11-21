import { Image } from "../atoms/Image";
import logo from "../../assets/raaks_logo-removebg-preview.png";
import { Text } from "../atoms/Text";
import { FooterTexts } from "../particles/DataLists";
import { List } from "../atoms/List";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import app from "../../assets/appdownload.png";

const Footer = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full flex flex-col bg-white">
      <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
        <div className="flex flex-col items-start gap-4">
          <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
          <Text className="text-sm text-color4" as="p">
            {FooterTexts.underLogoText}
          </Text>
        </div>

        <div className="flex flex-col md:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.quickLinks.caption}
          </Text>
          <ul className="flex flex-col gap-2">
            {FooterTexts.quickLinks.links.map((link, index) => (
              <List key={index} className="text-sm">
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-color4 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </button>
              </List>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.contacts.caption}
          </Text>
          <ul className="flex flex-col md:ml-12 gap-2">
            {FooterTexts.contacts.links.map((link, index) => (
              <List key={index} className="text-sm">
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-color4 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </button>
              </List>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.more.caption}
          </Text>
          <ul className="flex flex-col gap-2 lg:ml-10">
            {FooterTexts.more.links.map((link, index) => (
              <List key={index} className="text-sm">
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-color4 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </button>
              </List>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
          <ul className="w-full flex items-center lg:justify-center gap-4">
            <List>
              <a
                href="https://www.facebook.com/profile.php?id=61568179100102"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FacebookLogo size={15} color="currentColor" weight="fill" />
              </a>
            </List>
            <List>
              <a
                href="https://www.instagram.com/raakz_international/"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <InstagramLogo size={15} color="currentColor" weight="fill" />
              </a>
            </List>
        
          </ul>

          <Text as="p" className="text-base font-light text-color4">
            Discover Our App
          </Text>
          {/* <Image image={app} className="w-28" alt="App Download" as="a" href="/" /> */}
        </div>
      </section>
      <Text className="text-center bg-color4 text-white text-xs py-6 font-light">
        Copyright 2024.All rights reserved.
      </Text>
    </footer>
  );
};

export default Footer;
