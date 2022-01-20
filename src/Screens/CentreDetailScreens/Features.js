import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FeatureItem from "../../components/FeatureItem";

const featureList = [
  { id: 1, feature: "Waitlist", status: true, type: "checklist" },
  { id: 2, feature: "Waitlist", status: true, type: "money" },
  { id: 3, feature: "Waitlist", status: true, type: "puzzle" },
  { id: 4, feature: "Direct Debit Facility", status: false, type: "credit-card" },
  { id: 5, feature: "All Meals Provided", status: false, type: "meal" },
  { id: 6, feature: "Nappies Provided", status: true, type: "nappie" },
  { id: 7, feature: "Bed Linen Provided", status: false, type: "bedlinen" },
  { id: 8, feature: "Education & Development Programs", status: true, type: "light" },
  { id: 9, feature: "Some Meals Provided", status: true, type: "meal" },
  { id: 10, feature: "Car Parking", status: false, type: "car-parking" },
  { id: 11, feature: "Pram Parking", status: true, type: "pram" },
  { id: 12, feature: "Outdoor Play Area", status: true, type: "outdoor" },
  { id: 13, feature: "Indoor Play Area", status: false, type: "indoor" },
  { id: 14, feature: "Music Lesson", status: true, type: "music" },
  { id: 15, feature: "Sandpit", status: true, type: "sandpit" },
  { id: 16, feature: "Cooking Lessons", status: false, type: "apron" },
  { id: 17, feature: "Incursions", status: true, type: "incursions" },
  { id: 18, feature: "Excursions", status: true, type: "excursions" },
];

const Features = () => {
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      {featureList ? (
        <FlatList
          data={featureList}
          renderItem={({ item, index }) => (
            <FeatureItem key={index} data={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
      </View>
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#E5E5E5",
  },
  card:{
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
  }
});
