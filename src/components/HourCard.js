import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HourCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={[styles.day, styles.active]}>Mon - Fri</Text>
        <Text style={styles.day}>Sat</Text>
        <Text style={styles.day}>Sun</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.childrenCard}>
          <Text style={styles.text}>Morning</Text>
          <View style={styles.row}>
            <Text style={[styles.text, styles.hour]}>8:00</Text>
            <View style={styles.space} />
            <Text style={[styles.text, styles.hour]}>12:00</Text>
          </View>
        </View>

        <View style={styles.space} />

        <View style={styles.childrenCard}>
          <Text style={styles.text}>Afternoon</Text>
          <View style={styles.row}>
            <Text style={[styles.text, styles.hour]}>14:00</Text>
            <View style={styles.space} />
            <Text style={[styles.text, styles.hour]}>17:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HourCard;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#F2F0F0",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  childrenCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#F2F0F0",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  day: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: "#857E7F",
    lineHeight: 24,
    fontSize: 14,
    fontWeight: "bold",
  },
  active: {
    color: "#fff",
    backgroundColor: "#DB147F",
  },
  text: {
    color: "#2D1F21",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  hour: {
    backgroundColor: "#E9F4FF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  space: {
    width: 4,
  },
});
