import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapScreen() {

  const mapRef = useRef()

  const coordinator = {
    latitude: 10.7571445,
    longitude: 106.6880843
    // latitude: 10.764909,
    // longitude: 106.6534265
  }

  useEffect(() => {
    mapRef.current.animateToRegion(coordinator,350)
  })

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        zoomEnabled
        maxZoomLevel={15}
        minZoomLevel={2}></MapView>
    </View>
  );
}
