import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ViewSlider from 'react-native-view-slider';

const { width, height } = Dimensions.get('window');

export default function Slide(props) {
  return (
    <>
      <ViewSlider
        renderSlides={<>{props.children}</>}
        style={styles.slider} //Main slider container style
        height={150} //Height of your slider
        slideCount={4} //How many views you are adding to slide
        dots={false} // Pagination dots visibislity true for visibile
        dotActiveColor="red" //Pagination dot active color
        dotInactiveColor="gray" // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={false} //The views will slide automatically
        slideInterval={2000} //In Miliseconds
      />
    </>
  );
}

const styles = StyleSheet.create({
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: -50,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
  },
});
