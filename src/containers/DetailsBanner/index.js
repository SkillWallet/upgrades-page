import React from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import BannerArea, { Col } from "./details-banner.style";
import { BannerData, UpgradesData } from "common/data";
import Box from "common/components/Box";
import NextImage from "common/components/NextImage";
import Link from "next/link";
import { useRouter } from "next/router";

const DetailsBanner = ({ row }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { logo } = BannerData;
  const { items } = UpgradesData;
  const selectedUpgrade = items.find(({ id }) => id === +slug);

  return (
    <>
      <BannerArea id="main_section">
        <Container className="Container">
          <Link href="/">
            <a className="main-logo">
              <Image alt="skillwallet" src={logo.src} />
            </a>
          </Link>
          {selectedUpgrade && (
            <Box className="row" {...row}>
              <Col>
                <Heading as="h2" content={selectedUpgrade?.title} />
                <Text as="p" content={selectedUpgrade?.description} />
              </Col>
              <Col>
                <div className="selected-logo">
                  <NextImage src={selectedUpgrade?.icon} alt="LogoObject1" />
                </div>
              </Col>
            </Box>
          )}
        </Container>
      </BannerArea>
    </>
  );
};

DetailsBanner.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    width: "100%",
  },
};

export default DetailsBanner;
