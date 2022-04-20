import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [randnum, setRandum] = React.useState(
    'Click button to generate random'
  );
  const [helloworld, setHelloworld] = React.useState(
    'Click here to say hello to the world!'
  );
  const onGenerateRandom = () => {
    setRandum(Math.floor(Math.random() * 100));
  };
  const onhelloworld = () => {
    setHelloworld('Hello World!');
  };

  return (
    <View style={(styles.container, styles.nameofstyle)}>
      <Text style={styles.paragraph}>{randnum}</Text>
      <Button
        onPress={onGenerateRandom}
        title="Generate a random number"
        color="#841584"
        accessibilityLabel="Click here to generate a random number!"
      />
      <Text style={styles.paragraph}>{helloworld}</Text>
      <Button
        onPress={onhelloworld}
        title="Say hello to the world!"
        color="#841584"
        accessibilityLabel="Click here to say hello to the world!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
