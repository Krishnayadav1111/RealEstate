import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as FileSystem from 'expo-file-system';
import * as Notifications from 'expo-notifications';

const Downloads = () => {
  const downloadPdf = async () => {
    const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

    // Get the local directory for saving the PDF
    const directory = `${FileSystem.documentDirectory}brochure.pdf`;

    try {
      // Show a notification when the download starts
      const notificationId = await showDownloadNotification();

      const downloadResult = await FileSystem.downloadAsync(pdfUrl, directory);

      // Cancel the download notification
      Notifications.cancelScheduledNotificationAsync(notificationId);

      if (downloadResult.status === 200) {
        console.log('PDF downloaded successfully to', downloadResult.uri);
        const savedFilePath = `${FileSystem.documentDirectory}saved_brochure.pdf`;

        await FileSystem.moveAsync({
          from: downloadResult.uri,
          to: savedFilePath,
        });
        console.log('PDF saved to', savedFilePath);

        // Show a notification when the download is complete
        showDownloadCompleteNotification(savedFilePath);
      } else {
        console.error('Failed to download PDF');
        // Show an error notification
        showDownloadErrorNotification();
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      
      showDownloadErrorNotification();
    }
  };

  // Function to show a notification when the download starts
  const showDownloadNotification = async () => {
    const notificationContent = {
      title: 'Download Started',
      body: 'Downloading PDF file...',
    };

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: notificationContent,
    });

    return notificationId;
  };

  
  const showDownloadCompleteNotification = (pdfFilePath) => {
    const notificationContent = {
      title: 'Download Completed',
      body: 'PDF download is complete.',
      data: { pdfFilePath }, // You can pass data to the notification for later use
    };

    Notifications.presentNotificationAsync(notificationContent);
  };


  const showDownloadErrorNotification = () => {
    const notificationContent = {
      title: 'Download Error',
      body: 'Failed to download the PDF file.',
    };

    Notifications.presentNotificationAsync(notificationContent);
  };

  return (
    <View style={styles.buttonContainerDownload}>
      <TouchableOpacity style={styles.buttonDownload} onPress={downloadPdf}>
        <Text style={styles.buttonTextDownload}>Download Brochure</Text>
      </TouchableOpacity>
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
