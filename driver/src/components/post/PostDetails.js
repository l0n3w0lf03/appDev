/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
//import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';

export class PostDetails extends Component {
  render() {
    return (
      <View
        style={styles.container}>
          <View
            style={styles.carNameTitleContainer}>
            <Text
              style={styles.carNameTitle}>
              <MaterialCommunityIcons name={'car-sports'} size={25}/>
              {'  '}Toyota
            </Text>
          </View>
          <View
            style={styles.locationTextContainer}>
            <Text
              style={styles.locationText}>
              <Ionicons name={'location-outline'} size={14} color={'#dc143c'}/>
              Legazpi City
            </Text>
          </View>
          <Image
            style={styles.imageContainer}
            source={require('../../assets/images/car.png')}
          />
          <View
            style={styles.ratingContainer}>
            <MaterialCommunityIcons name={'star'} size={15} color={'orange'}/>
            <MaterialCommunityIcons name={'star'} size={15} color={'orange'}/>
            <MaterialCommunityIcons name={'star'} size={15} color={'orange'}/>
            <MaterialCommunityIcons name={'star'} size={15} color={'orange'}/>
            <MaterialCommunityIcons name={'star'} size={15} color={'orange'}/>
          </View>
          <View
            style={styles.paymentDetailsContainer}>
            <View
              style={styles.paymentDetailsContainer1}>
              <View
                style={styles.paymentDetailsTitleContainer}>
                <Text
                  style={styles.paymentDetailsTitle}>
                  Payment Details
                </Text>
              </View>
              <ScrollView
                contentContainerStyle={{
                  marginLeft: 10,
                }}>
                <Text
                  style={styles.paymentSummary}>
                  Summary
                </Text>
                <View
                  style={styles.paymentTipContainer}>
                  <Text
                    style={styles.paymentTip}>
                    Tip
                  </Text>
                  <Text
                      style={styles.paymentTipText}>
                      100
                    </Text>
                </View>
                <View
                  style={styles.paymentCostContainer}>
                  <Text
                    style={styles.paymentCost}>
                    Cost
                  </Text>
                  <Text
                    style={styles.paymentCostText}>
                    320
                  </Text>
                </View>
                <View
                  style={styles.paymentTotalContainer}>
                  <Text
                    style={styles.paymentTotal}>
                    Total
                  </Text>
                  <Text
                    style={styles.paymentTotalText}>
                    420.00
                  </Text>
                </View>
                <View
                  style={styles.paymentMethodContainer}>
                  <Text
                    style={styles.paymentMethod}>
                    Payment Method
                  </Text>
                  <Text
                    style={styles.paymentMethodText}>
                    Paypal
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={styles.carDetailsContainer}>
            <Text
              style={styles.carDetailsTitle}>
              Car Details
            </Text>
            <View
              style={styles.carDetailsContainer1}>
              <View
                style={styles.carDetailsContainer2}>
                <MaterialCommunityIcons name={'car-seat'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  4
                </Text>
              </View>
              <View
                style={styles.carDetailsContainer2}>
                <MaterialCommunityIcons name={'gas-station'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  23 MPG
                </Text>
              </View>
              <View
                style={styles.carDetailsContainer2}>
                <MaterialCommunityIcons name={'car-shift-pattern'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  Automatic
                </Text>
              </View>
              <View
                style={styles.carDetailsContainer2}>
                <MaterialIcons name={'device-thermostat'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  Yes
                </Text>
              </View>
              <View
                style={styles.carDetailsContainer2}>
                <Ionicons name={'md-speedometer-sharp'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  22 k
                </Text>
              </View>
              <View
                style={styles.carDetailsContainer2}>
                <MaterialIcons name={'luggage'} size={16} color={'#dc143c'}/>
                <Text
                  style={styles.carDetailsText}>
                  3
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.tripContainer}>
            <View
              style={styles.tripTitleContainer}>
              <Text
                style={styles.tripTitle}>
                Trip Details
              </Text>
            </View>
            <View
              style={styles.tripContainer1}>
              <View
                style={styles.tripContainer2}>
                <Text
                  style={styles.tripDetailsTitle}>
                  Trip Destination
                </Text>
                <Text
                  style={styles.textTrip}>
                  <Ionicons name={'location-outline'} size={16} color={'#dc143c'}/>
                  Tiwi, Albay
                </Text>
              </View>
              <View
                style={styles.tripContainer2}>
                <Text
                  style={styles.tripDetailsTitle}>
                  Drop Location
              </Text>
              <Text
                style={styles.textTrip}>
                <Ionicons name={'location-outline'} size={16} color={'#dc143c'}/>
                San Vicente Grande, Daraga, Albay
              </Text>
            </View>
          </View>
          <View
            style={styles.tripDateContainer}>
              <View
                style={styles.tripContainer2}>
                <Text
                  style={styles.tripDetailsTitle}>
                  Trip Start
                </Text>
                <Text
                  style={styles.textTrip}>
                  07/02/2021 5:05 PM
                </Text>
              </View>
              <View
                style={styles.tripContainer2}>
                <Text
                  style={styles.tripDetailsTitle}>
                  Trip End
              </Text>
              <Text
                style={styles.textTrip}>
                07/04/2021 5:05 PM
              </Text>
            </View>
          </View>
        </View>
        <View
          style={styles.statusContainer}>
          <View
            style={styles.statusContainer1}>
            <Text
              style={styles.statusText}>
              ONGOING TRIP
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
  },
  carNameTitleContainer: {
    height: 30,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  carNameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    marginTop: 5,
  },
  locationText: {
    fontSize: 14,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    resizeMode: 'center',
    borderRadius: 10,
  },
  ratingContainer: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentDetailsContainer: {
    flexDirection: 'column',
    borderColor: '#006161',
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 0,
    width: wp('95%'),
  },
  paymentDetailsTitleContainer: {
    alignItems: 'center',
    width: wp('100%'),
  },
  paymentDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentDetailsContainer1: {
    flexDirection: 'column',
  },
  paymentDetailsContainer2: {
    flexDirection: 'column',
  },
  paymentSummaryContainer: {
    marginLeft: 10,
  },
  paymentSummary: {
    fontSize: 14,
  },
  paymentSummaryText: {
    fontSize: 14,
    color: '#C0C0C0',
    margin: 5,
  },
  paymentTipContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  paymentTip: {
    fontSize: 14,
    color: '#C0C0C0',
  },
  paymentTipText: {
    fontSize: 14,
    color: '#C0C0C0',
    marginLeft: 215,
  },
  paymentCostContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  paymentCost: {
    fontSize: 14,
    color: '#C0C0C0',
  },
  paymentCostText: {
    fontSize: 14,
    color: '#C0C0C0',
    marginLeft: 215,
  },
  paymentTotalContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  paymentTotal: {
    fontSize: 14,
  },
  paymentTotalText: {
    fontSize: 14,
    color: '#006161',
    marginLeft: 200,
  },
  paymentMethodContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  paymentMethod: {
    fontSize: 14,
  },
  paymentMethodText: {
    fontSize: 14,
    marginLeft: 125,
  },
  carDetailsText: {
    fontSize: 16,
  },
  carDetailsContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    padding: 10,
  },
  carDetailsContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95%'),
    marginBottom: 15,
  },
  carDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: '#006161',
    marginRight: 10,
    marginLeft: 10,
    borderLeftWidth: 5,
    width: wp('95%'),
  },
  tripTitleContainer: {
    width: wp('100%'),
    alignItems: 'center',
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  tripDetailsTitle: {
    fontSize: 16,
    color: '#C0C0C0',
  },
  tripContainer: {
    flexDirection: 'column',
    borderColor: '#006161',
    marginLeft: 10,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 10,
    width: wp('95%'),
  },
  tripContainer1: {
    flexDirection: 'column',
    width: wp('95%'),
    justifyContent: 'space-between',
    padding: 5,
  },
  tripDateContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    width: wp('95%'),
    justifyContent: 'space-between',
    padding: 5,
  },
  tripContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textTrip: {
    fontSize: 14,
    marginTop: 5,
    marginRight: 10,
  },
  statusContainer: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('5%'),
  },
  statusContainer1: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('5%'),
    backgroundColor: '#006161',
    borderRadius: 5,
    marginTop: 10,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
  },
});

export default PostDetails;
