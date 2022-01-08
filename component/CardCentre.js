import { Text, Card, Icon, withBadge } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { colors, parameters } from '../global/styles';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native-elements/dist/image/Image';
export default function CardCentre(props) {
  const BadgeIcon = withBadge(0)(Icon);
  const { image, name, location, children, waitlist, type, service } =
    props.data;
  return (
    <Card containerStyle={styles.container}>
      <View>
        <Card.Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: 54,
            alignSelf: 'flex-end',
            right: 12,
          }}
        >
          <Image
            style={{ width: 54, height: 26, marginTop: 42 }}
            source={{
              uri: 'https://www.esb.sa.gov.au/sites/default/files/news-images/exceeding_72_rgb.jpg',
            }}
          />
        </View>
        <View style={styles.rating}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>9.8</Text>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
        <View style={[styles.row]}>
          <FontAwesome
            name="map-marker"
            size={20}
            style={{
              color: colors.grey4,
              marginRight: 10,
            }}
          />

          <Text style={styles.description}>{location}</Text>
        </View>
        <View style={styles.row}>
          <View style={[{ width: '50%' }, styles.row, styles.line]}>
            <FontAwesome5
              name="baby"
              size={20}
              style={{
                color: colors.grey4,
                marginRight: 10,
              }}
            />

            <Text style={styles.description}>{children}</Text>
          </View>

          <View style={[{ width: '50%' }, styles.row]}>
            <FontAwesome5
              name="clipboard-list"
              size={20}
              style={{
                color: colors.grey4,
                marginRight: 10,
              }}
            />

            <Text style={styles.description}>{waitlist}</Text>
          </View>
          <View style={[{ width: '50%' }, styles.row]}>
            <FontAwesome5
              name="stethoscope"
              size={20}
              style={{
                color: colors.grey4,
                marginRight: 10,
              }}
            />

            <Text style={styles.description}>{type}</Text>
          </View>
          <View style={[{ width: '50%' }, styles.row]}>
            <FontAwesome5
              name="hand-holding-medical"
              size={20}
              style={{
                color: colors.grey4,
                marginRight: 10,
              }}
            />

            <Text style={styles.description}>{service}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  price: {
    color: '#ff8c52',
    marginTop: 10,
    flex: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    color: 'black',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  line: {
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rating: {
    position: 'absolute',
    backgroundColor: '#DB147F',
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
});
