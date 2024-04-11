import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputBoxProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: () => void; // Corrected signature
  value: string;
  maxLength?: number;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  touched?: boolean;
  errors?: string | null | undefined;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  maxLength,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    height: 68,
    marginBottom: 10,
  },
  inputText: {
    borderWidth: 1,
    width: 350,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMsg: {
    color: 'red',
    paddingLeft: 5,
  },
});
