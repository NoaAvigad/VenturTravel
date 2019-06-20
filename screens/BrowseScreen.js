import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";

const BrowseScreen = () => {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#181515" }}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={ {color: "#fff", fontFamily: "Futura"}}>Moods</Text>
        </SafeAreaView>
    );
}

export default BrowseScreen;
