import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const ImageSlider = props => {
  return (
    <SliderBox images={props.images} sliderBoxHeight={props.sliderBoxHeight} />
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
