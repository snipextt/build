import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 bg-white border-dotted border-yellow-500 hover:bg-yellow-100 rounded-lg mt-12 hover:border-solid duration-500 cursor-pointer`}
  .imageContainer {
    ${tw`text-center p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }
  duration-500 cursor-pointer .title {
    ${tw`mt-2 font-bold text-xl leading-none text-yellow-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-black text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Placement Oriented Courses",
      description:
        "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.",
    },
    { imageSrc: SupportIconImage, title: "Website Designing" },
    { imageSrc: CustomizeIconImage, title: "Mobile App Developement" },
    { imageSrc: ReliableIconImage, title: "Pentesting and Security" },
    { imageSrc: FastIconImage, title: "Graphics" },
    { imageSrc: SimpleIconImage, title: "Content Writing" },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          <span className="text-white">Our Professional Services</span>
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer animate-hue">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span
                  className="title"
                  style={{
                    color: "black",
                  }}
                >
                  {card.title || "Fully Secure"}
                </span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
