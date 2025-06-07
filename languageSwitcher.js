import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";
import LottieView from "lottie-react-native";

const trFlag = require("../assets/images/trflag.png");
const enFlag = require("../assets/images/enflag.png");

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // Get the current language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={() => changeLanguage("tr")}>
          <Image source={trFlag} style={styles.flag}></Image>
          {currentLanguage === "tr" && (
            <View style={styles.lottieContainer}>
              <LottieView
                source={require("../assets/animations/greencheckmark.json")}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={() => changeLanguage("en")}>
          <Image source={enFlag} style={styles.flag}></Image>
          {currentLanguage === "en" && (
            <View style={styles.lottieContainer}>
              <LottieView
                source={require("../assets/animations/greencheckmark.json")}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    marginTop: 20,
  },
  flagContainer: {
    position: "relative",
    alignItems: "center",
  },
  flag: {
    width: 50,
    height: 30,
    borderRadius: 5,
  },
  lottieContainer: {
    position: "absolute",
    top: -5,
    bottom: 0,
    left: 5,
    width: 40,
    height: 40,
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
});

export default LanguageSwitcher;
