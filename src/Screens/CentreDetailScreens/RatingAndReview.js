import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import Btn from '../../components/Button';
import CardComment from '../../components/cards/CardComment';
import { Rating } from 'react-native-ratings';
import CarDropdown from '../../components/cards/CarDropdown';
import Line from '../../components/Line';
export default function RatingAndReview() {
  const listImage = [
    'https://luatvn.vn/wp-content/uploads/2021/01/quy-dinh-do-tuoi-di-nha-tre.png',
    'https://noithatmanhhe.vn/media/20359/be-lam-dau-bep-trong-lop-noi-that-manh-he.jpg?width=700&height=525',
    'https://media.baodansinh.vn/baodansinh//2021/3/5/img8035-16149166120391816110533.jpg',
    'https://bebewood.vn/wp-content/uploads/2021/05/goc-van-dong-nha-tre-1-1024x684.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmcUEfPiGiTwzOboQPdiZX5aLNCTb4klhv2s1MnV_ND6A4XVTY8J7_PaV1rfVu7LBj4s&usqp=CAU',
  ];
  return (
    <View>
      <ScrollView>
        <CarDropdown
          titleIcon={
            <Image
              style={{ width: 39, height: 39 }}
              source={require('../../../assets/kindicare.png')}
            />
          }
          mainTitle="Kindicare Rating"
          imageDisnabel={false}
          subTitle="Very good"
        >
          <Btn
            text="8.4"
            textStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}
            style={styles.btn}
          />
          <Text style={styles.feed}>Very good</Text>
          <View style={styles.row}>
            <View style={[styles.item, styles.row]}>
              <View
                style={[
                  {
                    backgroundColor: '#32A4FC',
                  },
                  styles.dot,
                ]}
              />
              <Text style={{ fontSize: 15 }}>Average</Text>
            </View>
            <View style={[styles.item, styles.row]}>
              <View
                style={[
                  {
                    backgroundColor: '#DB147F',
                  },
                  styles.dot,
                ]}
              />
              <Text style={{ fontSize: 15 }}>This Service</Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              lineHeight: 30,
              marginTop: 20,
            }}
          >
            The KindiCare Rating for this service of 8.4 is lower than the
            average KindiCare Rating for the area of 8.6, and represents the
            good quality of service provided
          </Text>
        </CarDropdown>

        <CarDropdown
          mainTitle="User Reviews"
          imageDisnabel={true}
          titleIcon={
            <View>
              <Rating
                type="custom"
                ratingCount={1}
                startingValue={1}
                imageSize={39}
                readonly={true}
                ratingColor="#DB147F"
                tintColor="white"
              />
            </View>
          }
          subTitle="4.5/5"
          onPress={() => setRating(rating == 'flex' ? 'none' : 'flex')}
        >
          <CardComment
            image={
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{
                  uri: 'https://mayanhxachtaynhat.com/wp-content/uploads/2019/12/N%C3%AAn-t%E1%BA%ADp-trung-v%C3%A0o-%C3%A1nh-m%E1%BA%AFt-m%E1%BA%ABu.jpg',
                }}
              />
            }
            name="Kindicare Rating1"
            subTitle="Very good"
            date="July 29, 2020"
            comment="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            listImage={listImage}
            starCounts={5}
          />
        </CarDropdown>
        <CarDropdown
          mainTitle="NQS Rating"
          imageDisnabel={true}
          titleIcon={
            <Image
              style={{ width: 39, height: 39 }}
              source={{
                uri: 'https://www.esb.sa.gov.au/sites/default/files/news-images/exceeding_72_rgb.jpg',
              }}
            />
          }
          subTitle="Last reviewed 21 September 2017"
          onPress={() => setRating(rating == 'flex' ? 'none' : 'flex')}
        >
          <Image
            style={{ width: 110, height: 74 }}
            source={{
              uri: 'https://www.esb.sa.gov.au/sites/default/files/news-images/exceeding_72_rgb.jpg',
            }}
          />
          <Text>Last Reviewed 01 December 2019</Text>
          <Line height={20} />
          <View style={styles.row}>
            <Text style={{ width: '70%', fontSize: 17 }}>
              1. Education program and practice
            </Text>
            <Text style={{ fontSize: 17, color: '#FB8429' }}>
              Exceeding NQS
            </Text>
          </View>
        </CarDropdown>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 0,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB147F',
  },
  row: {
    flexDirection: 'row',
  },
  feed: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
  },
  item: {
    width: '50%',
    alignItems: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    marginRight: 10,
    borderRadius: 3,
  },
});
