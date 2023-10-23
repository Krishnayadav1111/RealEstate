import { View, Text ,StyleSheet,TouchableOpacity,} from 'react-native'
import React from 'react'
import RNFS from 'react-native-fs';

const Downloads = () => {
    const downloadPdf = async () => {
        try {
          const downloadDest = `${RNFS.DocumentDirectoryPath}/dummy.pdf`;
          const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    
          const options = {
            fromUrl: fileUrl,
            toFile: downloadDest,
          };
    
          const response = await RNFS.downloadFile(options);
          
          if (response.statusCode === 200) {
            console.log('File downloaded to: ', downloadDest);
            // You can open the downloaded file here if needed
          } else {
            console.error('Failed to download the file');
          }
        } catch (error) {
          console.error('Download error:', error);
        }
      };
  return (
    <>
      <View style={styles.buttonContainerDownload}>
      <TouchableOpacity style={styles.buttonDownload} onPress={downloadPdf}>
              <Text style={styles.buttonTextDownload}>Download Brochure</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDownload} onPress={downloadPdf}>
              <Text style={styles.buttonTextDownload}>
                View Available Spaces
              </Text>
            </TouchableOpacity>
          </View>
      
    </>
  )
}

export default Downloads;

const styles = StyleSheet.create({
    buttonContainerDownload: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical:4,
      },
      buttonDownload: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: "#DBB467",
        borderRadius: 8,
        backgroundColor: "#ffffff",
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonTextDownload: {
        color: "#850C70",
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: -0.4,
        lineHeight: 20,
      },
})