import React, {useEffect, useState} from 'react';
import {View, StyleSheet, DeviceEventEmitter} from 'react-native';
import codePush from 'react-native-code-push';
import AwesomeButton from 'react-native-really-awesome-button';
import Spinner from 'react-native-loading-spinner-overlay';
import {codePushSync, checkForUpdate} from './CodePushUtils';
const App = () => {
  const clearUpdates = () => {
    codePush.clearUpdates();
  };

  useEffect(() => {
    codePushSync();
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    DeviceEventEmitter.addListener('startCodePushSync', () => {
      setLoading(true);
    });
    DeviceEventEmitter.addListener('endCodePushSync', () => {
      setLoading(false);
    });
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <AwesomeButton onPress={checkForUpdate} style={{marginBottom: 10}}>
        Check For Update!
      </AwesomeButton>
      <AwesomeButton onPress={clearUpdates}>Clear Updates!</AwesomeButton>
      <Spinner
        visible={loading}
        textContent={'下载更新'}
        textStyle={{color: '#ffffff'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
