import React, { useState } from 'react';
import { View, Text, Button,StyleSheet, ActivityIndicator, Alert ,TouchableOpacity} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';





const Downloads = () => {
  const [downloading, setDownloading] = useState(false);
  

  const downloadPDF = async () => {
    setDownloading(true);

    const fileUri = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const localUri = `${FileSystem.documentDirectory}dummy.pdf`;

    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please allow access to save the file.');
      return;
    }

    const downloadObject = FileSystem.createDownloadResumable(
      fileUri,
      localUri
    );

    try {
      const { uri } = await downloadObject.downloadAsync();
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync('PDFs', asset, false);
      Alert.alert('Download Complete', 'The PDF has been downloaded and saved.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while downloading the PDF.');
    } finally {
      setDownloading(false);
    }
  };
  return (
    <View style={styles.buttonContainerDownload}>
       {downloading ? (
        <ActivityIndicator />
      ) : (

      <TouchableOpacity style={styles.buttonDownload} onPress={downloadPDF}>
        <Text style={styles.buttonTextDownload}>Download Brochure</Text>
      </TouchableOpacity>
       )}
      <TouchableOpacity style={styles.buttonDownload}>
        <Text style={styles.buttonTextDownload}>View Available Spaces</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  buttonContainerDownload: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 4,
  },
  buttonDownload: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#DBB467',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextDownload: {
    color: '#850C70',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: -0.4,
    lineHeight: 20,
  },
});
