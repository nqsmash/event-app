import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

export default function App() {
  const [hasNfc, setHasNfc] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    async function checkNfc() {
      setHasNfc(await NfcManager.isSupported());
    }

    checkNfc();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.container}>
        <Text>Your device doesn't support NFC</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello NFCs!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
