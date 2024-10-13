import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const handleNavigation = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/2024-09-26-slotting-luxe-site-rwd-home-page-marketing-banner-english-DIOR-US-handoff_01.jpg?imwidth=800",
      title: "Luxe Makeup",
      description:
        "Meet the 'gift to self' you need to right now",
      bg: "#6A3734",
      clr: "white",
      category: "Makeup",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-10-13-glossier-fragrance-you-doux-and-reve-site-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800",
      title: "New Glossier You Scents",
      description:
        "Explore the warm, woody Doux and the warm Goumand",
      bg: "#97B9AB",
      clr: "black",
      category: "Hair",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-10-12-huda-beauty-easy-blur-natural-airbrush-finish-foundation-and-easy-blur-primer-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800",
      title: "New Huda Beauty",
      description: "",
      bg: "#5DB7B5",
      clr: "black",
      category: "Gift And Gift Card",
    },
  ];

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const ImgBox = ({ src, category }) => {
    return (
      <Img
        onClick={() => handleClick(category)}
        alt="slider"
        width={"100%"}
        src={src}
      />
    );
  };

  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
        spacing={"20px"}
        px={["2", "2", "10", "40"]}
        py={"30px"}>
        {cards.map((elem, i) => (
          <SimpleGrid color={elem.clr} key={i} cursor={"pointer"}>
            <Box>
              <ImgBox src={elem.img} category={elem.category} />
            </Box>
            <Box p={"20px"} textAlign={"left"} bgColor={elem.bg} h={"150px"}>
              <Text fontWeight={700} fontSize={"20px"}>
                {elem.title}
              </Text>
              <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline" }}
                mb={"5px"}>
                {elem.description}
              </Text>
              <Text fontSize={"14px"} fontWeight={700}>
                SHOP NOW ▸
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section1;
