import React from "react";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, { UpgradeCardWrapper } from "./Upgrades.style";
import { UpgradesData } from "common/data";
import NextImage from "common/components/NextImage";
import Link from "next/link";
import ReadMore from "common/components/ReadMore";

const Upgrades = () => {
  const { items } = UpgradesData;

  return (
    <SectionWrapper id="members_section">
      <Container className="Container">
        <UpgradeCardWrapper>
          {items.map((item) => (
            <FeatureBlock
              key={`upgrade-key${item.id}`}
              icon={<NextImage src={item.icon} alt="Icon" />}
              title={
                <>
                  {item.complete && (
                    <Heading as="h4" content={item.completeOn} />
                  )}
                  <Heading as="h3" content={item.title} />
                </>
              }
              description={
                <div className="content-descriptions">
                  <ReadMore
                    text={item.description}
                    button={
                      <Link
                        href={{
                          pathname: "/upgrade",
                          query: { slug: item.id },
                        }}
                      >
                        <a className="read-more-link">{"Read More>"}</a>
                      </Link>
                    }
                  />
                </div>
              }
            />
          ))}
        </UpgradeCardWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Upgrades;
