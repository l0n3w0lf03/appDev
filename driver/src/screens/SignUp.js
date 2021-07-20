/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Image, Pressable, Text, TextInput, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import { Formik, Field, useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native';

const LicenseRestrictionInput = (props) => {
    const {
        field: {name, onBlur, onChange, value},
        form: {errors, touched, setFieldTouched},
        ...inputProps
      } = props; 
      const hasError = errors[name] && touched[name];
      return (
        <>
          <TextInput
            style={[styles.textInput, hasError && styles.errorInput]}
            value={value}
            onChangeText={text => onChange(name)(text)}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            {...inputProps}
          />
          {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </>
      );
    };
const LicenseTypeInput = props => {
    const license_item = [
        {name: 'Non-Professional', id: '1'},
        {name: 'Professional', id: '2'},
        {name: 'Student', id: '3'},
    ];
    return (
        <View
            style={{
                width: wp('95%'),
                height: 40,
                marginBottom: 5,
                marginLeft: 10,
                backgroundColor: 'white',
                borderBottomWidth: 0.7,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    fontSize: 15,
                    color: 'gray',
                    marginLeft: 5,
                }}>
                License Type
            </Text>
            <Picker
                style={{
                    width: wp('50%'),
                    height: 40,
                    marginLeft: 10,
                    marginBottom: 5,
                }}
                    enabled={true}
                    mode = "dropdown"
                    placeholder="Select Gender"
                    >
                {license_item.map((item) => {
                    return (
                        <Picker.Item
                            label={item.name.toString()}
                            value={item.name.toString()}
                            key={item.id.toString()} />);
                        }
                    )
                }
            </Picker>
        </View>
    );
  };

const BirthdayInput = props => {
    const [birthdate, onChangeBirthdate] = useState('');
    return (
        <View
            style={{
                width: wp('95%'),
                height: 40,
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 10,
                backgroundColor: 'white',
                borderBottomWidth: 0.7,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    fontSize: 15,
                    color: 'gray',
                    marginLeft: 5,
                }}>
                Birthday
            </Text>
            <DatePicker
                style={{
                    width: 150,
                    height: 40,
                    marginLeft: 10,
                    marginBottom: 10,
                }}
                date={birthdate}
                mode="date"
                placeholder="Birthday"
                format="DD-MM-YYYY"
                minDate="01-01-1930"
                maxDate="01-12-2003"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    right: 0,
                    },
                }}
                onDateChange={(date) => {
                    onChangeBirthdate(date);
                }}
            />
        </View>
    );
  };

const GenderInput = props => {
    const gender_item = [
        {name: 'Male', id: '1'},
        {name: 'Female', id: '2'},
    ];
    return (
        <View
            style={{
                width: wp('95%'),
                height: 40,
                marginBottom: 5,
                marginLeft: 10,
                backgroundColor: 'white',
                borderBottomWidth: 0.7,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    fontSize: 15,
                    color: 'gray',
                    marginLeft: 5,
                }}>
                Gender
            </Text>
            <Picker
                style={{
                    width: 150,
                    height: 40,
                    marginLeft: 10,
                    marginBottom: 5,
                }}
                    enabled={true}
                    mode = "dropdown"
                    placeholder="Select Gender"
            >
                {gender_item.map((item) => {
                    return (
                        <Picker.Item
                            label={item.name.toString()}
                            value={item.name.toString()}
                            key={item.id.toString()} />);
                        }
                    )
                }
            </Picker>
        </View>
    );
  };

const CustomInput = props => {
    const {
      field: {name, onBlur, onChange, value},
      form: {errors, touched, setFieldTouched},
      ...inputProps
    } = props;
    const hasError = errors[name] && touched[name];
    return (
      <>
        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </>
    );
  };

const SignUp = () => {
    const navigation = useNavigation();

    const signUpValidationSchema = yup.object().shape({
        fullName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names.')
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Name must not have a special character.')
          .required('Full name is required.'),
        phoneNumber: yup
          .string()
          .matches(/(09)(\d){9}\b/, 'Enter a valid phone number.')
          .required('Phone number is required'),
        licenseRestriction: yup
            .string()
            .required('License restriction is required.'),
        email: yup
          .string()
          .email('Please enter valid email.')
          .required('Email is required.'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  'Password must have a small letter.')
          .matches(/\w*[A-Z]\w*/,  'Password must have a capital letter.')
          .matches(/\d/, 'Password must have a number.')
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
          .min(8, ({ min }) => `Password must be at least ${min} characters.`)
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match.')
          .required('Confirm password is required.'),
      });

    const formik = useFormik({
        initialValues: {
            fullName: '',
            gender: '',
            birthday: '',
            email: '',
            phone: '',
            confirmPassword: '',
            licenseType: '',
            licenseRestriction: '',

        },
        onSubmit: values => {
            axios({
                method: 'post',
                url: <domain-name/> + 'url',
                data: {
                    'fullName': values.fullName,
                    'gender': values.gender,
                    'birthday': values.birthday,
                    'email': values.email,
                    'phone': values.phone,
                    'confirmPassword': values.confirmPassword,
                    'licenseType': values.licenseType,
                    'licenseRestriction': values.licenseRestriction,
                },
             headers: {'Content-Type': 'application/json'},
              }).then(response => {
              }).catch(err => {
                  Alert.alert('An error occurred!', err.message,
                [{ text: 'Okay' }]);
     });},
     });
  return (
    <View
        style={{
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: 'white',
        }}>
        <View>
            <View
                style={{
                    width: wp('100%'),
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        marginTop: 20,
                    }}>
                    <Image
                        style={{
                            height: 40,
                            width: wp('20%'),
                            }}
                            source={require('../assets/images/logo.png')}
                    />
                    <Text
                        style={{
                            marginTop: 0,
                            fontSize: 18,
                        }}>
                        Transport App
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    Sign Up
                </Text>
            </View>
            <View>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{
                    fullName: '',
                    gender: '',
                    birthday: '',
                    email: '',
                    phone: '',
                    confirmPassword: '',
                    }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleSubmit, isValid }) => (
                    <>
                        <Field
                            component={CustomInput}
                            name="fullName"
                            placeholder="Full Name"
                        />
                        <Field
                            component={GenderInput}
                            name="gender"
                            placeholder="Gender"
                        />
                        <Field
                            component={BirthdayInput}
                            name="birthday"
                            placeholder="Birthday"
                        />
                        <Field
                            component={LicenseTypeInput}
                            name="licenseType"
                            placeholder="License Type"
                        />
                        <Field
                            component={LicenseRestrictionInput}
                            name="licenseRestriction"
                            placeholder="License Restriction (Example: 123)"
                        />
                        <Field
                            component={CustomInput}
                            name="email"
                            placeholder="Email Address"
                            keyboardType="email-address"
                        />
                        <Field
                            component={CustomInput}
                            name="phoneNumber"
                            placeholder="Phone Number"
                            keyboardType="numeric"
                        />
                        <Field
                            component={CustomInput}
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Field
                            component={CustomInput}
                             name="confirmPassword"
                            placeholder="Confirm Password"
                            secureTextEntry
                        />
                    </>
                    )}
                </Formik>
            </View>
            <View
                style={{
                    width: wp('100%'),
                    alignItems: 'center',
                }}>
                <Pressable
                    style={{
                        backgroundColor: 'blue',
                        height: 35,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                    //onPress={formik.handleSubmit}
                    onPress={()=> navigation.navigate('GetStarted')}
                    >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Submit
                    </Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    textInput: {
      height: 40,
      width: '95%',
      marginBottom: 5,
      marginLeft: 10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
    },
    errorText: {
      fontSize: 10,
      color: 'red',
      marginLeft: 10,
    },
    errorInput: {
      borderColor: 'red',
    },
  });
export default SignUp;
