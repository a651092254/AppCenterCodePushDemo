import React, {useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import codePush from 'react-native-code-push';
import AwesomeButton from 'react-native-really-awesome-button';
import {codePushSync, syncImmediate} from './CodePushUtils';
const App = () => {
  const clearUpdates = () => {
    codePush.clearUpdates();
  };

  const checkForUpdate = async () => {
    const update = await codePush.checkForUpdate();
    if (!update) {
      Alert.alert('提示', '已是最新版本');
    } else {
      syncImmediate();
    }
  };

  useEffect(() => {
    codePushSync();
    console.info('[CodePush] UpdateMetadata', codePush.getUpdateMetadata());
  }, []);

  return (
    <View style={styles.container}>
      <AwesomeButton onPress={checkForUpdate} style={{marginBottom: 10}}>
        Check For Update!
      </AwesomeButton>
      <AwesomeButton onPress={clearUpdates}>Clear Updates!</AwesomeButton>
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
