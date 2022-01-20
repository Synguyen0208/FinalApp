import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ServiceCard from "../../components/ServiceCard";

const serviceList = [
  {
    id: 1,
    nameService: "Long Day Care",
    time: "0 to 12 months",
    price: 112,
    type: "children",
  },
  {
    id: 2,
    nameService: "Pre-School/ Kindergarten",
    time: "0 to 12 months",
    price: 112,
    type: "pre-school",
  },
  {
    id: 3,
    nameService: "Before & After School Care",
    time: "0 to 12 months",
    price: 112,
    type: "school",
  },
  {
    id: 4,
    nameService: "Family Day Care",
    time: "0 to 12 months",
    price: 112,
    type: "family",
  },
  {
    id: 5,
    nameService: "Vocation Care",
    time: "0 to 12 months",
    price: 112,
    type: "vocation",
  },
];

const Services = () => {
  return (
    <View style={styles.container}>
      {serviceList ? (
        <FlatList
          data={serviceList}
          renderItem={({ item, index }) => (
            <ServiceCard key={index} data={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#E5E5E5",
  },
});
