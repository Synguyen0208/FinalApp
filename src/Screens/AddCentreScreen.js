import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  SafeAreaView,
  TextInput,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AddCentreScreen({ route }) {
  const [image, setImage] = useState(null);
  const [selectedKindCare, setSelectedKindCare] = useState();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const navigationRoute = route.params;
  useEffect(() => {
    navigationRoute
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" } });
    return () =>
      navigationRoute.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigationRoute]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Text style={styles.titleMain}>Main Information:</Text>
        <View style={styles.viewRow}>
          <Text style={styles.text}>Name:</Text>
          <TextInput placeholder="Name" style={styles.textinput}></TextInput>
        </View>

        <View style={styles.viewRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.text}>Image:</Text>
            <View>
              <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                <Text style={{ color: "white" }}>Upload</Text>
              </TouchableOpacity>
            </View>
            {image && (
              <Image source={{ uri: image }} style={styles.imageUpload} />
            )}
          </View>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>Scores:</Text>
          <TextInput placeholder="Scores" style={styles.textinput}></TextInput>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>Address:</Text>
          <TextInput placeholder="Address" style={styles.textinput}></TextInput>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>Childrens:</Text>
          <TextInput
            placeholder="Childrens"
            style={styles.textinput}
          ></TextInput>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>Waitlisted:</Text>
          <TextInput
            placeholder="Waitlisted"
            style={styles.textinput}
          ></TextInput>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>KindCare:</Text>

          <Picker
            style={styles.textinput}
            selectedValue={selectedKindCare}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedKindCare(itemValue)
            }
          >
            <Picker.Item label="Basic" value="basic" />
            <Picker.Item label="Enterprise" value="enterprise" />
          </Picker>
        </View>

        <View style={styles.viewRow}>
          <Text style={styles.text}>Service:</Text>
          <TextInput
            placeholder="Service"
            style={styles.textinput}
          ></TextInput>
        </View>


        <Text style={styles.titleMain}>Detail Information:</Text>
        <View>
          <Text style={styles.titleDetail}>Summary:</Text>
          <Text style={styles.textTitleDetail}>Contact Information:</Text>

          <View style={styles.viewRow}>
            <Text style={styles.text}>Phone:</Text>
            <TextInput
              placeholder="Phone"
              style={styles.textinput}
            ></TextInput>
          </View>

          <View style={styles.viewRow}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
            ></TextInput>
          </View>

          <View style={styles.viewRow}>
            <Text style={styles.text}>Website:</Text>
            <TextInput
              placeholder="Website"
              style={styles.textinput}
            ></TextInput>
          </View>
        </View>
        
        <View>
          <Text style={styles.titleDetail}>User Information:</Text>
          <Text style={styles.textTitleDetail}>Center Description:</Text>

          
            <TextInput
             numberOfLines = {10}
              placeholder="Center Description:"
              style={[styles.textinput,{height:100}]}
            ></TextInput>
          

         
        </View>

        <View>
          <Text style={styles.titleDetail}>Hours:</Text>
          <Text style={styles.textTitleDetail}>Normal:</Text>
          <Text style={styles.textTitleDetail}>School Team:</Text>
          <Text style={styles.textTitleDetail}>School Holidays:</Text>
        </View>

        <View>
          <Text style={styles.titleDetail}>Service:</Text>
          <View style={styles.viewRow}>
            <Text style={styles.text}>Long day care:</Text>
            <TextInput
              placeholder="Long day care:"
              style={styles.textinput}
            ></TextInput>
          </View>

          <View style={styles.viewRow}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
            ></TextInput>
          </View>

          <View style={styles.viewRow}>
            <Text style={styles.text}>Website:</Text>
            <TextInput
              placeholder="Website"
              style={styles.textinput}
            ></TextInput>
          </View>

         
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
    margin: 25,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    width: 80,
  },
  textinput: {
    borderColor: "grey",
    borderWidth: 0.8,
    flex: 1,
    margin: 10,
    borderRadius: 6,
    paddingLeft:10
  },
  uploadButton: {
    backgroundColor: "#DB147F",
    height: 20,
    width: 80,
    marginLeft: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  imageUpload: {
    height: 100,
    width: 100,
    marginLeft: 30,
  },
  titleMain:{
    fontWeight:'bold',
    fontSize:20,
    color:"#DB147F",
    marginVertical:10
  },
  titleDetail:{
    fontWeight:'bold',
    fontSize:17,
    color:"#DB147F",
    marginVertical:5
  },
  textTitleDetail:{
    fontWeight:'bold',
    
    color:"black",
    marginVertical:5
  }
});
