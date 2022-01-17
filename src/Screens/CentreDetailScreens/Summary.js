import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons, FontAwesome5 } from "react-native-vector-icons";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default Summary = () => {
  const [seeMore, setSeeMore] = React.useState(false);

  const _start = () => {
    LayoutAnimation.spring();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.goodstart.org.au/getattachment/ae42faab-2813-4587-80af-763fa8e743bc/;.aspx;.jpg",
            }}
          />

          <View style={styles.cartTitle}>
            <Text style={styles.title}>Goodstart Early Learing ABC</Text>
            <Text style={[styles.status, styles.active]}>● Active</Text>
          </View>

          <TouchableOpacity
            style={styles.seeMoreBtn}
            onPress={() => {
              setSeeMore(!seeMore);
              _start();
            }}
          >
            {seeMore ? (
              <MaterialCommunityIcons
                name="chevron-up-circle"
                style={styles.seeMoreIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="chevron-down-circle"
                style={styles.seeMoreIcon}
              />
            )}
          </TouchableOpacity>
        </View>

        {seeMore && (
          <View>
            <View style={styles.line} />

            <Text style={styles.title}>General Information</Text>

            <View style={[styles.row]}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                style={styles.generalIcon}
              />
              <Text style={styles.text}>
                221 Ferras Street, South Melbourne, VIC 3205
              </Text>
            </View>

            <View style={[styles.row]}>
              <MaterialCommunityIcons
                name="storefront-outline"
                style={styles.generalIcon}
              />
              <Text style={styles.text}>Goodstart Early Learning</Text>
            </View>

            <View style={[styles.row]}>
              <MaterialCommunityIcons name="door" style={styles.generalIcon} />
              <Text style={styles.text}>Centre-based Care</Text>
            </View>

            <View style={[styles.row]}>
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                style={styles.generalIcon}
              />
              <Text style={styles.text}>01 January 2012</Text>
            </View>

            <View style={[styles.row]}>
              <Image
                style={styles.generalIconImage}
                source={require("../../../assets/kindicare.png")}
              />
              <Text style={[styles.text, styles.specialText]}>
                KindiCare Basic
              </Text>
            </View>

            <View style={styles.line} />

            <Text style={styles.title}>Contact Info</Text>

            <View style={[styles.row]}>
              <Feather name="phone" style={styles.generalIcon} />
              <Text style={styles.text}>1300 001 154</Text>
            </View>

            <View style={[styles.row]}>
              <Feather name="mail" style={styles.generalIcon} />
              <Text style={styles.text}>goodstartearlylearning@gmail.com</Text>
            </View>

            <View style={[styles.row]}>
              <Feather name="arrow-up-left" style={styles.generalIcon} />
              <Text style={[styles.text, styles.link]}>
                https://www.goodstart.org.au/
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Enquiries Summary</Text>

        <View style={styles.line} />

        <View style={[styles.row]}>
          <MaterialCommunityIcons
            name="head-question-outline"
            style={[styles.circleIcon, styles.pinkColor]}
          />
          <View style={[styles.row, styles.justifyContent]}>
            <Text style={styles.text}>Total Enquiries</Text>
            <Text style={styles.number}>192</Text>
          </View>
        </View>

        <View style={[styles.row]}>
          <MaterialCommunityIcons
            name="information-outline"
            style={[styles.circleIcon, styles.blueColor]}
          />
          <View style={[styles.row, styles.justifyContent]}>
            <Text style={styles.text}>More Information</Text>
            <Text style={styles.number}>192</Text>
          </View>
        </View>

        <View style={[styles.row]}>
          <FontAwesome5
            name="chair"
            style={[styles.circleIcon, styles.greenColor]}
          />
          <View style={[styles.row, styles.justifyContent]}>
            <Text style={styles.text}>Check for Vacancies</Text>
            <Text style={styles.number}>192</Text>
          </View>
        </View>

        <View style={[styles.row]}>
          <Feather
            name="flag"
            style={[styles.circleIcon, styles.purpleColor]}
          />
          <View style={[styles.row, styles.justifyContent]}>
            <Text style={styles.text}>Book a Tour or Visit</Text>
            <Text style={styles.number}>192</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  justifyContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#F2F0F0",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  cartTitle: {
    width: "60%",
    padding: 12,
  },
  title: {
    color: "#2D1F21",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 5,
  },
  image: {
    height: Math.round(Dimensions.get("screen").height / 7),
    width: Math.round(Dimensions.get("screen").height / 7),
    borderRadius: 8,
  },
  seeMoreBtn: {
    alignSelf: "center",
  },
  seeMoreIcon: {
    fontSize: 24,
    color: "#32A4FC",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  active: {
    color: "#36BF57",
  },
  inactive: {
    color: "#ACB2B8",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#F2F0F0",
    marginVertical: 10,
  },
  generalIcon: {
    fontSize: 22,
    color: "#DB147F",
  },
  generalIconImage: {
    height: 23,
    width: 23,
  },
  text: {
    color: "#171725",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    paddingHorizontal: 20,
  },
  link: {
    color: "#DB147F",
  },
  specialText: {
    color: "#32A4FC",
    backgroundColor: "#E9F4FF",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    marginHorizontal: 20,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 6,
  },
  circleIcon: {
    fontSize: 22,
    padding: 10,
    borderRadius: 50,
  },
  pinkColor: {
    color: "#DB147F",
    backgroundColor: "#FFF0FB",
  },
  blueColor: {
    color: "#32A4FC",
    backgroundColor: "#E9F4FF",
  },
  greenColor: {
    color: "#36BF57",
    backgroundColor: "#EDF9F0",
  },
  purpleColor: {
    color: "#BF2CF3",
    backgroundColor: "#F3EAFF",
  },
  number: {
    color: "#2D1F21",
    fontSize: 14,
    fontWeight: "700",
  },
});
