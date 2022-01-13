import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Space from './Space';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
export default function CardComment(props) {
  const { image, name, star, subTitle, date, comment, listImage, starCount } =
    props;
  const [full, setFull] = useState(false);
  return (
    <Card
      containerStyle={styles.card}
      wrapperStyle={{ borderWidth: 1, borderColor: 'white' }}
    >
      <View style={styles.cardTitile}>
        <View style={{ padding: 5, marginRight: 10 }}>{image}</View>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.row}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{name}</Text>
            <Space width={10} />
            <FontAwesome
              name="circle"
              size={5}
              style={{
                color: '#ACB2B8',
              }}
            />
            <Space width={10} />
            <Rating
              type="custom"
              ratingCount={starCount}
              startingValue={5}
              imageSize={20}
              readonly={true}
              ratingColor="#DB147F"
              tintColor="white"
            />
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <Text style={{ color: '#32A4FC' }}>{subTitle}</Text>
            <Space width={10} />
            <Text>{date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.comment}>{comment}</Text>
        <View style={[styles.listImage, styles.row]}>
          {listImage.map((e, index) => {
            let imageFinal;
            if (index == 3 && !full && listImage.length != 4) {
              return;
            }
            if (!full) {
              if (listImage.length >= 4 && index >= 4) {
                imageFinal = (
                  <TouchableNativeFeedback onPress={() => setFull(true)}>
                    <View style={styles.imageOp}>
                      <Text style={styles.textAb}>+{listImage.length - 4}</Text>
                    </View>
                  </TouchableNativeFeedback>
                );
              }
            }
            if (index == 3) {
              return (
                <View
                  style={{ width: '25%', padding: 5, justifyContent: 'center' }}
                  key={index}
                >
                  <TouchableWithoutFeedback onPress={() => setFull(false)}>
                    <Image style={styles.image} source={{ uri: e }} />
                  </TouchableWithoutFeedback>
                </View>
              );
            }
            return (
              <View
                style={{ width: '25%', padding: 5, justifyContent: 'center' }}
                key={index}
              >
                <Image style={styles.image} source={{ uri: e }} />
                {imageFinal}
              </View>
            );
          })}
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 0,
    width: '100%',
    borderWidth: 0,
    borderColor: 'red',
    elevation: 0,
  },
  cardTitile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  txtEdit: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  txtDele: {
    textAlign: 'center',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  line: {
    marginTop: 10,
  },
  cardContent: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  comment: {
    fontSize: 17,
    lineHeight: 25,
  },
  line: {
    height: 10,
  },
  listImage: {
    marginTop: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  },
  textAb: {
    fontSize: 30,
    color: 'white',
  },
  imageOp: {
    position: 'absolute',
    height: 70,
    backgroundColor: '#2D1F21',
    width: '100%',
    marginLeft: 5,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 70,
    borderRadius: 8,
  },
});
