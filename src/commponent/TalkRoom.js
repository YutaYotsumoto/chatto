import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {constant} from '../constant/constant';

const TalkRoom = () => {
  return (
    <View style={styles.talkView}>
      <View style={styles.config}>
        <View style={styles.speakView}>
          <Text style={styles.font}>おはよう</Text>
        </View>
      </View>

      <View style={styles.config2}>
        <View style={styles.speakView}>
          <Text style={styles.font}>いつ鍾乳洞行く??</Text>
        </View>
      </View>

      <View style={styles.config}>
        <View style={styles.speakView}>
          <Text style={styles.font}>ライブの後かな</Text>
        </View>
      </View>

      <View style={styles.config2}>
        <View style={styles.speakView}>
          <Text style={styles.font}>いつライブ？？</Text>
        </View>
      </View>

      <View style={styles.config}>
        <View style={styles.speakView}>
          <Text style={styles.font}>DaPumpとコラボする</Text>
        </View>
      </View>

      <View style={styles.config}>
        <View style={styles.speakView}>
          <Text style={styles.font}>★U★S★A★</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  talkView: {
    // backgroundColor: constant.color.font,
    width: '100%',
    height: '100%',
  },
  config: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 30,
    // backgroundColor: 'red',
  },
  speakView: {
    borderColor: constant.color.secondary,
    borderWidth: 1,
    borderRadius: 20,
    padding: 7,
    backgroundColor: constant.color.bg,
  },
  config2: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 20,
    paddingRight: 30,
    // backgroundColor: 'red',
  },
  font: {
    color: constant.color.primary,
    fontSize: constant.fontSize.md,
    fontWeight: constant.fontWeight.md,
  },
});

export default TalkRoom;
