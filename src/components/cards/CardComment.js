import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { FontAwesome } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';
import Space from '../Space';
import { Text } from 'react-native';
import ShowListImageRow from '../ShowListImageRow';
export default function CardComment(props) {
  const { image, name, subTitle, date, comment, listImage, starCount } = props;
  return (
    <Card containerStyle={styles.card} wrapperStyle={styles.wrapperCard}>
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
        <ShowListImageRow listImage={listImage} />
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
  wrapperCard: {
    borderWidth: 1,
    borderColor: 'white',
  },
});
