import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  FontAwesome5
} from "react-native-vector-icons";
import Switch from "./Switch";

const FeatureItem = ({ data }) => {
  const [icon, setIcon] = React.useState(
    <MaterialCommunityIcons name="clipboard-list-outline" style={styles.icon} />
  );

  React.useEffect(() => {
    switch (data.type) {
      case "money":
        setIcon(
          <MaterialCommunityIcons
            name="currency-usd-circle-outline"
            style={styles.icon}
          />
        );
        break;
      case "puzzle":
        setIcon(
          <MaterialCommunityIcons name="puzzle-outline" style={styles.icon} />
        );
        break;
      case "credit-card":
        setIcon(
          <MaterialCommunityIcons
            name="credit-card-outline"
            style={styles.icon}
          />
        );
        break;
      case "meal":
        setIcon(<Entypo name="bowl" style={styles.icon} />);
        break;
      case "nappie":
        setIcon(
          <MaterialCommunityIcons
            name="human-baby-changing-table"
            style={styles.icon}
          />
        );
        break;
      case "bedlinen":
        setIcon(<Feather name="layers" style={styles.icon} />);
        break;
      case "light":
        setIcon(
          <MaterialCommunityIcons
            name="lightbulb-outline"
            style={styles.icon}
          />
        );
        break;
      case "car-parking":
        setIcon(
          <MaterialCommunityIcons
            name="car-brake-parking"
            style={styles.icon}
          />
        );
        break;
      case "pram":
        setIcon(
          <MaterialCommunityIcons
            name="baby-carriage"
            style={styles.icon}
          />
        );
        break;
      case "outdoor":
        setIcon(
          <FontAwesome5
            name="campground"
            style={styles.icon}
          />
        );
        break;
      case "indoor":
        setIcon(
          <MaterialCommunityIcons
            name="jump-rope"
            style={styles.icon}
          />
        );
        break;
      case "outdoor":
        setIcon(
          <MaterialCommunityIcons
            name="campground"
            style={styles.icon}
          />
        );
        break;
      case "music":
        setIcon(
          <MaterialCommunityIcons
            name="playlist-music-outline"
            style={styles.icon}
          />
        );
        break;
      case "sandpit":
        setIcon(
          <MaterialCommunityIcons
            name="castle"
            style={styles.icon}
          />
        );
        break;
      case "apron":
        setIcon(
          <FontAwesome5
            name="mitten"
            style={styles.icon}
          />
        );
        break;
      case "incursions":
        setIcon(
          <FontAwesome5
            name="shield-virus"
            style={styles.icon}
          />
        );
        break;
      case "excursions":
        setIcon(
          <MaterialCommunityIcons
            name="shield-cross-outline"
            style={styles.icon}
          />
        );
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.row}>
        {icon}
        <Text style={styles.text}>{data.feature}</Text>
      </View>
      <Switch defaultStatus={data.status} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#2D1F21",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  icon: {
    fontSize: 22,
    color: "#5C595A",
    marginRight: 10,
  },
});

export default FeatureItem;
