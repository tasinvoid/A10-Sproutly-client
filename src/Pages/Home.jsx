import React from "react";
import Carousel from "../Components/Carousel.";
import { useLoaderData, useNavigation } from "react-router";
import GardenerCard from "../Components/GardenerCard";
import Tips from "../Components/Tips";
import SoilGuide from "../Components/SoilGuide";
import ToolsEssentials from "../Components/ToolsEssentials";
import TypeParagraph from "../Components/TypeParagraph";

const Home = () => {
  const navigation = useNavigation();
  const gardenersData = useLoaderData();

  return (
    <div>
      {navigation.state === "loading" ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center ">
            <TypeParagraph></TypeParagraph>
            <Carousel></Carousel>
            <h1 className="text-green-400 text-2xl pb-5">Active Users</h1>
            <div className="grid gap-5 lg:grid-cols-3 ">
              {gardenersData.map((gardener) => (
                <GardenerCard
                  gardener={gardener}
                  key={gardener._id}
                ></GardenerCard>
              ))}
            </div>
            <Tips></Tips>
            <SoilGuide></SoilGuide>
            <ToolsEssentials></ToolsEssentials>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
