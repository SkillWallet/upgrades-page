import React from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import BannerArea, { Col, LogoObject } from "./banner.style";
import { BannerData } from "common/data";
import Box from "common/components/Box";
import NextImage from "common/components/NextImage";
import Link from "next/link";

const Banner = ({ row }) => {
  const { title, paragraphs, logo, rightImage } = BannerData;
  return (
    <>
      <BannerArea id="main_section">
        <Container className="Container">
          <Link href="/">
            <a className="main-logo">
              <Image alt="skillwallet" src={logo.src} />
            </a>
          </Link>
          <Box className="row" {...row}>
            <Col>
              <Heading as="h2" content={title} />
              {paragraphs.map((text, index) => (
                <Text key={`paragraph-key-${index}`} as="p" content={text} />
              ))}
            </Col>
            <Col></Col>
          </Box>
        </Container>

        <LogoObject>
          <NextImage src={rightImage} alt="LogoObject1" />
        </LogoObject>
      </BannerArea>
    </>
  );
};

Banner.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    width: "100%",
  },
};

export default Banner;
