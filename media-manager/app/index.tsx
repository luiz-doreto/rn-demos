import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image as RNImage, ScrollView, StyleSheet, Text, View } from "react-native";
import { Video, getVideoMetaData, getImageMetaData, Image } from 'react-native-compressor';

interface CompressedMediaMetadata {
  duration: number;
  size: number;
  width: number;
  height: number;
  extension: string;
}
interface CompressedImageMetadata {
  ImageWidth: number;
  ImageHeight: number;
  Orientation: number;
  size: number;
  extension: string;
  exif: {
      [key: string]: string;
  };
}

export default function Index() {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [compressedMedia, setCompressedMedia] = useState<CompressedMediaMetadata | CompressedImageMetadata | null>(null);
  const [compressedMediaUri, setCompressedMediaUri] = useState<string | null>(null);

  const handleMediaCompress = async () => {
    if (media !== null) {
      let mediaMetadata = null;
      if (media.type === 'image') {
        const compressedImagePath = await Image.compress(media.uri);
        mediaMetadata = await getImageMetaData(compressedImagePath);
        setCompressedMediaUri(compressedImagePath);
      } else {
        const compressedVideoPath = await Video.compress(
          media.uri,
          {
            compressionMethod: 'auto',
          },
          (progress: number) =>
            console.log('Progress => ', progress)
        );
        mediaMetadata = await getVideoMetaData(compressedVideoPath);
        setCompressedMediaUri(compressedVideoPath);
      }
      setCompressedMedia(mediaMetadata);
    }
  };

  const handleMediaUpload = async () => {
    setCompressedMedia(null);
    setCompressedMediaUri(null);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.assets[0]);
    }
  };

  const handleFileSize = (size?: number) => {
    if (!size) return "0 MB";
    const sizeInMB = size / (1024 * 1024);
    return sizeInMB.toFixed(2) + " MB";
  }

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center", padding: 16 }}
    >
      <Button title="Upload Media" onPress={handleMediaUpload} />
      <Text>Original Size: {handleFileSize(media?.fileSize)}</Text>
      <RNImage source={{ uri: media?.uri }} style={styles.media} resizeMode="contain"/>

      <Button title="Compress" onPress={handleMediaCompress} />
      <Text>Compressed Media size: {handleFileSize(compressedMedia?.size)}</Text>
      { compressedMediaUri && (
        <RNImage source={{ uri: compressedMediaUri }} style={styles.media} resizeMode="contain"/>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  media: {
    width: 300,
    height: 400,
    borderRadius: 8,
    marginVertical: 16,
  }
});
