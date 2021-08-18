import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {constant} from '../constant/constant';

const Footer = () => {
  return (
    <View style={[styles.footerView, styles.config]}>
      <TextInput style={styles.textinputView} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerView: {
    backgroundColor: constant.color.bg,
    width: '100%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: -80,
  },
  textinputView: {
    marginHorizontal: 30,
    borderWidth: 1,
    width: 330,
  },
});

export default Footer;
