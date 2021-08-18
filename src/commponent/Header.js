import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {constant} from '../constant/constant';

const Header = () => {
  return (
    <View style={[styles.headerView, styles.config]}>
      <Text style={styles.font}>Mr.マイケル・ジャクソン</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: constant.color.primary,
    width: '100%',
    height: 70,
  },
  config: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: constant.color.bg,
    fontSize: constant.fontSize.lg,
    fontWeight: constant.fontWeight.lg,
  },
});

export default Header;
