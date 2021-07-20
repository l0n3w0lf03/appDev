/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Pressable, Platform, Button, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
//import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input/react-native-input';
import { Formik, Field, useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/sign_up/SignUpComponents';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View
          style={{
            backgroundColor: '#e0e0e0',
            padding: 5,
            borderRadius: 50,
            marginRight: 15,
          }}>
          {data.description === 'HOME'
            ? <Entypo name="home" size={20} color={'#dc143c'} />
            : <Entypo name="location-pin" size={20} color={'#dc143c'} />
          }
        </View>
        <Text
          style={{}}>
          {data.description || data.vicinity}
        </Text>
      </View>
    );
  };

const license_input = (props) => {
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
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [firstname, onChangeFirstName] = useState('');
    const [lastname, onChangeLastName] = useState('');
    const [middlename, onChangeMiddleName] = useState('');
    const [birthdate, onChangeBirthdate] = useState(new Date(Date.now()));
    const [gender, onChangeGender] = useState('');
    const [nationality, onChangeNationality] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [licenseType, onChangeLicenseType] = useState('');
    const [licenseRestriction, onChangeLicenseRestriction] = useState('');
    const [address, onChangeAddress] = useState('');
    const [zipcode, onChangeZipCode] = useState('');
    const [city, onChangeCity] = useState('');
    const [province, onChangeProvince] = useState('');
    const [country, onChangeCountry] = useState('');
    const [location, setLocation] = useState('');

    const [isPickerShow, setIsPickerShow] = useState(false);
    const showPicker = () => {
        setIsPickerShow(true);
    };
    const onChange = (event, value) => {
        onChangeBirthdate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    const gender_item = [
        {name: 'Male', id: '1'},
        {name: 'Female', id: '2'},
    ];
    const license_item = [
        {name: 'Non-Professional', id: '1'},
        {name: 'Professional', id: '2'},
        {name: 'Student', id: '3'},
    ];

    const formik = useFormik({
        initialValues: {
            gender: '' ,
            licenseType: '',
            licenseRestriction: '',
            location: '',

    },
        onSubmit: values => {
            axios({
                method: 'post',
                url: <domain-name/> + 'url',
                data: {
                    'gender': values.gender,
                    'licenseType': values.licenseType,
                    'licenseRestriction': values.licenseRestriction,
                    'location': values.location,
                },
             headers: {'Content-Type': 'application/json'},
              }).then(response => {
              }).catch(err => {
                  Alert.alert('An error occurred!', err.message,
                [{ text: 'Okay' }]);
     });},
     });

    const signUpValidationSchema = yup.object().shape({
        fullName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Name must not have a special character')
          .required('Full name is required'),
        phoneNumber: yup
          .string()
          .matches(/(09)(\d){9}\b/, 'Enter a valid phone number')
          .required('Phone number is required'),
        licenseRestriction: yup
            .string()
            .required(<AntDesign name="closecircle" size={20} />),
        email: yup
          .string()
          .email('Please enter valid email')
          .required('Email is required'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  'Password must have a small letter')
          .matches(/\w*[A-Z]\w*/,  'Password must have a capital letter')
          .matches(/\d/, 'Password must have a number')
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
      });

  return (
    <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: 'white',
        }}>
        <View
            style={{
                margin: 10,
            }}>
            <View
                style={{
                    width: wp('100%'),
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        padding: 5,
                    }}>
                    Sign Up
                </Text>
            </View>
            <View>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{
                    fullName: '',
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
                    </>
                    )}
                </Formik>
                <View
                    style={{
                        flexDirection: 'column',
                        width: wp('95%'),
                        marginTop: 5,
                    }}>
                    <View
                        style={{
                            width: wp('90%'),
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
                                onValueChange={formik.handleChange('gender')}
                                selectedValue={formik.values.gender}
                            >
                            {gender_item.map((item) => {
                                return (
                                    <Picker.Item
                                        label={item.name.toString()}
                                        value={item.name.toString()}
                                        key={item.id.toString()} />);
                                })}
                        </Picker>
                    </View>
                    <View
                        style={{
                            width: wp('90%'),
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
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        width: wp('95%'),
                        marginTop: 5,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                        }}>
                        Please input your license type and restriction.
                    </Text>
                    <View
                        style={{
                            width: wp('90%'),
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
                                width: wp('40%'),
                                height: 40,
                                marginLeft: 10,
                                marginBottom: 5,
                            }}
                                enabled={true}
                                mode = "dropdown"
                                placeholder="Select Gender"
                                onValueChange={formik.handleChange('licenseType')}
                                selectedValue={formik.values.licenseType}
                            >
                            {license_item.map((item) => {
                                return (
                                    <Picker.Item
                                        label={item.name.toString()}
                                        value={item.name.toString()}
                                        key={item.id.toString()} />);
                                })}
                        </Picker>
                        <Formik
                            validationSchema={signUpValidationSchema}
                            initialValues={{
                            licenseRestriction: '',
                            }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleSubmit, isValid }) => (
                            <>
                                <Field
                                    component={license_input}
                                    name="licenseRestriction"
                                    placeholder="RES"
                                />
                            </>
                            )}
                        </Formik>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}>
                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{
                            userName: '',
                            email: '',
                            phoneNumber: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleSubmit, isValid }) => (
                        <>
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

                <Pressable
                    mode="contained"
                    title="submit"
                    onPress={formik.handleSubmit}
                >
                    <Text>
                        Enter
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
      width: wp('15%'),
      marginBottom: 5,
      marginLeft: 10,
      backgroundColor: 'white',
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
