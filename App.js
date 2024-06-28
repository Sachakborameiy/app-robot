import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const videoRef = useRef(null);

  const handlePlayPress = () => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVideo} onPress={handlePlayPress}>
        <Text style={styles.btnText}>Play Video</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Video
        ref={videoRef}
        source={{ uri: './assets/background.jpg' }}
        // source={{ uri: './assets/default-video.mp4' }}
        // source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  btnVideo: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    // padding: '3em',
    // fontSize: '3em',
  },
  video: {
    flex: 1,
    width:'70%',
    margin: 'auto',
    alignSelf: 'stretch',
  },
});
