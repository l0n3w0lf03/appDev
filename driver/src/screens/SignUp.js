/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Image, TextInput, Pressable, Platform} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const SignUp = () => {
    const navigation = useNavigation();
    const [username, onChangeUsername] = useStatsht rgrgrfe('');
    const [password, onChangePassword] = useState('');
    const [firstname, onChangeFirstName] = useState('');
    const [lastname, onChangeLastName] = useState('');
    const [middlename, onChangeMiddleName] = useState('');
    const [birthdate, onChangeBirthdate] = useState('');
    const [gender, onChangeGender] = useState('');
    const [nationality, onChangeNationality] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [licensetype, onChangeLicenseType] = useState('');
    const [licenserestriction, onChangeLicenseRestriction] = useState('');
    const [address, onChangeAddress] = useState('');
    const [zipcode, onChangeZipCode] = useState('');
    const [city, onChangeCity] = useState('');
    const [province, onChangeProvince] = useState('');
    const [country, onChangeCountry] = useState('');

  return (
    <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: 'white',
        }}>
        <View
            style={{
                width: wp('95%'),
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                marginTop: 10,
            }}>
            <Text
                style={{
                    fontSize: 24,
                }}>
                Sign-up
            </Text>
        </View>
        <View>
            <View
                style={{
                    flexDirection: 'column',
                    padding: 10,
                }}>
                <Text
                    style={{
                        color: '#525252',
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginTop: 5,
                    }}>
                    Tell us about yourself.
                </Text>
                <Text
                    style={{
                        color: '#525252',
                        fontSize: 18,
                    }}>
                    Provide true information only.
                </Text>
            </View>
            <View
                style={{
                    width: wp('95%'),
                    marginTop: 5,

                }}>
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <TextInput
                        style = {{
                            height: 40,
                            width: wp('45%'),
                            borderBottomWidth: 1,
                            borderBottomColor: '#525252',
                            marginLeft: 10,
                        }}
                        onChangeText = {onChangeFirstName}
                        value = {firstname}
                        placeholder = "First Name"
                    />
                    <TextInput
                        style = {{
                            height: 40,
                            width: wp('45%'),
                            borderBottomWidth: 1,
                            borderBottomColor: '#525252',
                            marginLeft: 10,
                        }}
                        onChangeText = {onChangeLastName}
                        value = {lastname}
                        placeholder = "Last Name"
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 15,
                    }}>
                    <TextInput
                        style = {{
                            height: 40,
                            width: wp('45%'),
                            borderBottomWidth: 1,
                            borderBottomColor: '#525252',
                            marginLeft: 10,
                        }}
                        onChangeText = {onChangeEmail}
                        value = {email}
                        placeholder = "Email"
                    />
                    <TextInput
                        style = {{
                            height: 40,
                            width: wp('45%'),
                            borderBottomWidth: 1,
                            borderBottomColor: '#525252',
                            marginLeft: 10,
                        }}
                        onChangeText = {onChangePhone}
                        value = {phone}
                        placeholder = "Phone Number"
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 15,
                    }}>
                    <View>
                    <DatePicker
                        date={birthdate}
                        onDateChange={onChangeBirthdate}
                        />
                    </View>



                    <TextInput
                        style = {{
                            height: 40,
                            width: wp('45%'),
                            borderBottomWidth: 1,
                            borderBottomColor: '#525252',
                            marginLeft: 10,
                        }}
                        onChangeText = {onChangePhone}
                        value = {phone}
                        placeholder = "Phone Number"
                    />
                </View>
            </View>
        </View>

    </View>
  );
};

export default SignUp;
