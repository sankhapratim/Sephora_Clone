import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const handleNavigation = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-dei-release.jpg?imwidth=400",
      title: "Diversity, Equity Inclusion",
      description: "Our commitment to provide an inclusive beauty community.",
      bg: "black",
      clr: "white",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-10-02-slotting-baar-site-rwd-home-page-marketing-banner-US-CAN-handoff_01.jpg?imwidth=400",
      title: "Auto-Replenish Hot Deal",
      description: "Get 15% off1 select Farmacy subscription deliveries. ",
      bg: "#F58C89",
      clr: "black",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-holiday-preview-site-home-page-RWD-marketing-banner-general-preview-alt-payments-us-can-2944-artwork-only.jpg?imwidth=400",
      title: "Shop holidays gift now,pay later",
      description:
        "split purchase into fast and easy options that work for you.",
      bg: "#BDDCEE",
      clr: "black",
      category: "Makeup",
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

export default Section4;
