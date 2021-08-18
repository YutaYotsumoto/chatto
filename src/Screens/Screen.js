import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Header from '../commponent/Header';
import TalkRoom from '../commponent/TalkRoom';
import Footer from '../commponent/Footer';
import {constant} from '../constant/constant';

const Screen = () => {
  return (
    <SafeAreaView>
      <Header />

      <ScrollView style={styles.scroolView}>
        <TalkRoom />
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroolView: {
    height: '100%',
    backgroundColor: constant.color.secondary,
  },
});

export default Screen;
