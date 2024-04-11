import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {Formik, FormikProps} from 'formik';
import {loginInitialValue} from './Utils.tsx';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addUser, login} from '../../redux/authActions.jsx';
import CustomButton from '../../components/CustomButton.tsx';
import PushNotification from 'react-native-push-notification';

interface InputBoxProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  touched: boolean;
  errors: string | undefined;
  secureTextEntry?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  touched,
  errors,
  secureTextEntry,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <TextInput
        style={[styles.inputBox, touched && errors && {borderColor: 'red'}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        placeholderTextColor={styles.placeholder.color}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityToggle}>
          <Text style={{color: 'grey'}}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      )}
      {touched && errors && <Text style={{color: 'red'}}>{errors}</Text>}
    </View>
  );
};

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: FormValues) => {
    setLoading(true);
    console.log(values);
    try {
      const result = await axios.post(
        'https://dummyjson.com/auth/login',
        values,
      );

      console.log('first', result.data);
      dispatch(login(result.data.token));
      dispatch(addUser(result.data));

      // Show local notification
      PushNotification.localNotification({
        channelId: 'default-channel-id',
        title: 'Login Successful',
        message: 'You have successfully logged in.',
      });

      navigation.navigate('Dashboard');
    } catch (err) {
      console.log("doesn't working", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/Instagram.png')}
          style={styles.logoImage}
        />
        <Formik<FormValues>
          initialValues={loginInitialValue}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }: FormikProps<FormValues>) => {
            return (
              <View style={styles.inputContainer}>
                <InputBox
                  placeholder={'Username, email address or mobile number'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  secureTextEntry={true}
                />
                <CustomButton
                  buttonTitle={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid || loading} // Disable button while loading
                />
                {loading && (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                )}
                <TouchableOpacity style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPasswordText}>
                    Forgotten Password?
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.createAccountText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '84%',
  },
  logoImage: {
    marginBottom: 40,
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    paddingBottom: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: '100%',
    fontSize: 16,
    color: '#333',
  },
  forgotPasswordContainer: {
    alignSelf: 'center',
    paddingTop: 30,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#555',
  },
  createAccountContainer: {
    alignSelf: 'center',
    marginTop: 20,
    paddingBottom: 30,
  },
  createAccountText: {
    fontSize: 16,
    color: '#555',
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  placeholder: {
    color: '#999',
  },
  visibilityToggle: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});
