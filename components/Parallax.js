import { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";


const PAGE_WIDTH = Dimensions.get('window').width;


const list = [
    {
        id: '1',
        title: 'First Item',
        color: '#26292E',
        img: require('./images/1.jpg')
    },
    {
        id: '2',
        title: 'Second Item',
        color: '#899F9C',
        color: '#899F9C',
        img: require('./images/2.jpg')
    },
    {
        id: '3',
        title: 'Third Item',
        color: '#B3C680',
        img: require('./images/3.jpg')
    },
    {
        id: '4',
        title: 'Fourth Item',
        color: '#5C6265',
        img: require('./images/4.jpg')
    },
    {
        id: '5',
        title: 'Fifth Item',
        color: '#F5D399',
        img: require('./images/5.jpg')
    }
];

function Parallax() {
  const [isVertical, setIsVertical] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const baseOptions = isVertical
    ? {
      vertical: true,
    }
    : 
    {
      vertical: false,
      width: PAGE_WIDTH,
      height: PAGE_WIDTH * 0.6,
    };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Carousel 
            width={PAGE_WIDTH}
            height={PAGE_WIDTH * 0.6}
            vertical={false}

            loop
            pagingEnabled={pagingEnabled}
            snapEnabled={snapEnabled}
            autoPlay={autoPlay}
            autoPlayInterval={1500}
            onProgressChange={(_, absoluteProgress) =>
                (progressValue.value = absoluteProgress)
            }
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
            }}

            data={list}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignSelf: "center",
                        backgroundColor: item?.color
                    }}
                >
                    <Image style={styles.img} source={item.img} />
                </View>
            )}
        /> 
    </View>
  );
}


export default Parallax;


const styles = StyleSheet.create({
   
    img: {
        height: '100%',
        width: '100%'
    }
})