import React, { useCallback, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { interpolate } from "react-native-reanimated";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";

import { faker } from "@faker-js/faker";

import { ElementsText } from "./hooks/ElementsText";
import { SBImageItem } from "./SBImageItem";
import SButton from "./SButton";

const PAGE_WIDTH = Dimensions.get('window').width;

function Circular() {
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const itemSize = 80;
  const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;

  const animationStyle = useCallback(
    (value) => {
      "worklet";

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30],
      );

      const translateX
        = interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize])
        + centerOffset
        - itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [60, 45, 40, 45, 60],
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.1, 0.85, 0.8],
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          { scale },
        ],
      };
    },
    [centerOffset],
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={itemSize}
        height={itemSize}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_WIDTH / 2,
          backgroundColor: "#010017",
        }}
        loop
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={[...new Array(12).keys()]}
        renderItem={({ index }) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              console.log(index);
            }}
            containerStyle={{ flex: 1 }}
            style={{ flex: 1 }}
          >
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                borderRadius: 50,
                justifyContent: "center",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              <SBImageItem
                showIndex={false}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: 40,
                }}
              >
                {faker.person.
                  fullName()
                  .slice(0, 2)
                  .toUpperCase()}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        customAnimation={animationStyle}
      />
      <SButton
        onPress={() => {
          setIsFast(!isFast);
        }}
      >
        {isFast ? "NORMAL" : "FAST"}
      </SButton>
      <SButton
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
      </SButton>
    </View>
  );
}

export default Circular;