import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SButton = (props) => {
  const { children,  onPress } = props;

 
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingHorizontal: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SButton;