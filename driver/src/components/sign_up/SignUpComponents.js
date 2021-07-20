/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

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

export default CustomInput;
