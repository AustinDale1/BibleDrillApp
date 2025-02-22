import React from 'react';
import {Alert, Share, Button} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export const shareContent = async (verse, translation, isImage) => {
  try {
    let vRef = '';
    if(verse.hasOwnProperty('reference')) {
      vRef = verse.reference;
    } else {
      vRef = verse.front;
    }
    const result = await Share.share({

      message: `${verse.back} ${vRef}(${translation})`,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};