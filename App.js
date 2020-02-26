import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import codePush from 'react-native-code-push';
import AwesomeButton from 'react-native-really-awesome-button';
import {codePushSync, checkForUpdate} from './CodePushUtils';
const App = () => {
  const clearUpdates = () => {
    codePush.clearUpdates();
  };

  useEffect(() => {
    codePushSync();
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
