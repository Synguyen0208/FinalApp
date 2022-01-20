import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";

const ServiceCard = ({ data }) => {
  const [icon, setIcon] = React.useState(
    <MaterialCommunityIcons name="baby-face-outline" style={styles.icon} />
  );

  React.useEffect(() => {
    switch (data.type) {
      case "pre-school":
        setIcon(
          <MaterialCommunityIcons
            name="alphabetical-variant"
            style={styles.icon}
          />
        );
        break;
      case "school":
        setIcon(
          <MaterialCommunityIcons
            name="bag-personal-outline"
            style={styles.icon}
          />
        );
        break;
      case "family":
        setIcon(<MaterialIcons name="family-restroom" style={styles.icon} />);
        break;
      case "vocation":
        setIcon(<MaterialIcons name="luggage" style={styles.icon} />);
        break;

      default:
        break;
    }
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>{icon}</View>
        <View>
          <Text style={styles.title}>{data.nameService}</Text>
          <Text style={styles.text}>{data.time}</Text>
          <Text style={styles.text}>
            <Text style={styles.price}>${data.price.toFixed(2)}</Text> / full day
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#F2F0F0",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  title: {
    color: "#2D1F21",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
    marginVertical: 5,
  },
  icon: {
    fontSize: 25,
    color: "#DB147F",
    backgroundColor: "#FFF0FB",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 5,
  },
  text: {
    color: "#2D1F21",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  price: {
    fontWeight: "700",
  },
});
