import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {Container, AddHomeless} from './styles';
import MapView, {Marker} from 'react-native-maps';
import avatarG from './img/avatarG.png';
import avatarY from './img/avatarY.png';
import avatarR from './img/avatarR.png';
import {Image, Text, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';
import getDirections from 'react-native-google-maps-directions';
import Logo from '../../img/logo.png';
import Button from '../../components/Button';
import {Icon} from 'react-native-elements';

const Dashboard = () => {
  const {SignOut} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [visibleLocalization, setVisibleLocalization] = useState(false);
  const [activeCoordinates, setActiveCoordinates] = useState({});
  const [initialregion, setInitialRegion] = useState({});
  const [markerActive, setMarkerActive] = useState({});

  const [markers, setMarkers] = useState([
    {
      latitude: -23.548695896511145,
      longitude: -46.6507051885128,
      quantity: 5,
      color: avatarG,
    },
    {
      latitude: -23.560547263487376,
      longitude: -46.668295450508595,
      quantity: 20,
      color: avatarY,
    },
    {
      latitude: -23.55815716044587,
      longitude: -46.63223750889301,
      quantity: 21,
      color: avatarR,
    },
  ]);

  const toggleOverlay = (coordinates) => {
    setActiveCoordinates(coordinates);
    setVisible(!visible);
  };

  const adc_localizacao = (quantity, color) => {
    const coordinates = activeCoordinates.coordinate;
    coordinates.quantity = quantity;
    coordinates.color = color;
    setMarkers([...markers, coordinates]);
    setVisible(!visible);
  };

  const remover_localizacao = (marker) => {
    setMarkers(markers.filter((item) => item !== marker));
    setVisibleLocalization(!visibleLocalization);
  };

  const handleGetDirections = (marker) => {
    const data = {
      source: {
        latitude: initialregion.latitude,
        longitude: initialregion.longitude,
      },
      destination: {
        latitude: marker.latitude,
        longitude: marker.longitude,
      },
      params: [
        {
          key: 'travelmode',
          value: 'walking', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };

  const toggleOverlayLocalization = () => {
    setVisibleLocalization(!visibleLocalization);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition((position) => {
      setInitialRegion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{position: 'absolute', bottom: 120, left: 20, zIndex: 100000}}>
          <Icon
            onPress={() => SignOut()}
            reverse
            name="arrow-back-outline"
            type="ionicon"
            color="#517fa4"
          />
        </View>
        <Image
          source={Logo}
          style={{
            width: '80%',
            height: 80,
            position: 'absolute',
            top: 30,
            right: '10%',
            zIndex: 10000,
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 100,
            position: 'absolute',
            bottom: 0,
            zIndex: 10000,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View style={{position: 'relative', justifyContent: 'center'}}>
            <Text
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                right: 20,
                color: '#517fa4',
              }}>
              Selecione um ponto do mapa para adicionar informações ou selecione
              um ponto indicado para traçar a rota.
            </Text>
            <Text
              style={{
                color: 'green',
                position: 'absolute',
                top: 60,
                left: 90,
                right: 20,
                fontWeight: 'bold',
              }}>
              1-5
            </Text>
            <Text
              style={{
                color: '#F3D343',
                position: 'absolute',
                top: 60,
                left: 200,
                right: 20,
                fontWeight: 'bold',
              }}>
              5-20
            </Text>
            <Text
              style={{
                color: 'red',
                position: 'absolute',
                top: 60,
                left: 310,
                right: 20,
                fontWeight: 'bold',
              }}>
              20+
            </Text>
          </View>
        </View>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View
            style={{
              width: '70%',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text style={{textAlign: 'center'}}>
              Indique a quantidade de moradores de rua nessa região.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 50, height: 130, marginTop: 16}}
                  source={avatarG}
                />
                <AddHomeless
                  border="green"
                  onPress={() => adc_localizacao(5, avatarG)}>
                  <Text style={{color: 'green'}}>1-5</Text>
                </AddHomeless>
              </View>
              <View style={{marginLeft: 50}}>
                <Image
                  style={{width: 50, height: 130, marginTop: 16}}
                  source={avatarY}
                />
                <AddHomeless
                  border="#F3D343"
                  onPress={() => adc_localizacao(20, avatarY)}>
                  <Text style={{color: '#E0C133'}}>5-20</Text>
                </AddHomeless>
              </View>
              <View style={{marginLeft: 50}}>
                <Image
                  style={{width: 50, height: 130, marginTop: 16}}
                  source={avatarR}
                />
                <AddHomeless
                  border="red"
                  onPress={() => adc_localizacao(20, avatarR)}>
                  <Text style={{color: 'red'}}>20+</Text>
                </AddHomeless>
              </View>
            </View>
          </View>
        </Overlay>
        <Overlay
          isVisible={visibleLocalization}
          onBackdropPress={toggleOverlayLocalization}>
          <View style={{flexDirection: 'row', padding: 20}}>
            <View style={{alignItems: 'center', width: 100}}>
              <Icon
                onPress={() => handleGetDirections(markerActive)}
                reverse
                name="locate-sharp"
                type="ionicon"
                color="#517fa4"
              />
              <Text style={{textAlign: 'center'}}>
                Traçar rota até a localização
              </Text>
            </View>
            <View style={{alignItems: 'center', marginLeft: 50, width: 100}}>
              <Icon
                onPress={() => remover_localizacao(markerActive)}
                reverse
                name="trash-sharp"
                type="ionicon"
                color="#517fa4"
              />
              <Text style={{textAlign: 'center'}}>Excluir localização</Text>
            </View>
          </View>
        </Overlay>
        <MapView
          initialRegion={{
            latitude: initialregion.latitude,
            longitude: initialregion.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
          style={{flex: 1}}
          onPress={(e) => toggleOverlay(e.nativeEvent)}>
          {markers.map((marker, i) => (
            <Marker
              onPress={() => {
                toggleOverlayLocalization();
                setMarkerActive(marker);
              }}
              key={i}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  borderColor: '#1E98D7',
                  borderWidth: 2,
                  width: 70,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={{width: 20, height: 50}} source={marker.color} />
              </View>
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};

export default Dashboard;
