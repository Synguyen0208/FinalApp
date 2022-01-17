import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

const UserInformation = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Centre Description</Text>

        <View style={styles.line} />

        <Text style={styles.text}>
          At Only About Children South Melbourne, we believe that our holistic
          approach to childcare and kindergarten gives every child the best
          opportunity to reach their full potential. Our quality early learning
          programs are innovative, with a focus on health, wellbeing and
          education. Our unique Campus is located 221 Ferrars Street, South
          Melbourne, in a heritage listed train station which was built in 1883.
          Our two buildings are named Westside and Eastside because they are
          separated by a tram line, which runs between them. We are close to
          several local schools{" "}
          <Text style={[styles.text, styles.seeMoreText]}>See More</Text>
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Additional Details</Text>

        <View style={styles.line} />

        <View style={styles.row}>
          <Text style={[styles.text, styles.label]}>Admin Email</Text>
          <Text style={[styles.text, styles.detailText]}>
            sthmelbourne@oac.edu.au
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, styles.label]}>Region</Text>
          <Text style={[styles.text, styles.detailText]}>Victoria Metro</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, styles.label]}>LGA</Text>
          <Text style={[styles.text, styles.detailText]}>Melbourne</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default UserInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignContent: "stretch",
    marginVertical: 5,
    alignItems: "stretch",
  },
  label: {
    width: "40%",
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
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 5,
  },
  seeMoreText: {
    color: "#DB147F",
    fontWeight: "700",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#F2F0F0",
    marginVertical: 10,
  },
  text: {
    color: "#171725",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  detailText: {
    color: "#2D1F21",
    fontWeight: "700",
    width: "60%"
  },
});
