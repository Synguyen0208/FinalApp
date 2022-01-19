import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HourCard from "../../components/HourCard";

const Hours = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Normal</Text>
      <HourCard />
      <Text style={styles.title}>School Term</Text>
      <HourCard />
      <Text style={styles.title}>School Holidays</Text>
      <HourCard />
    </ScrollView>
  );
};

export default Hours;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#E5E5E5",
  },
  title: {
    color: "#2D1F21",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    marginVertical: 5,
  },
});
