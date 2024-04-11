import * as yup from 'yup';

export const loginInitialValue = {
  username: '',
  password: '',
};

// export const validationSchema = yup.object().shape({
//   username: yup.string().required('Username is required'),
//   password: yup.string().required('Password is required'),
// });

export interface SignupFormValues {
  mobileNumber: string;
}

export const signupInitialValue: SignupFormValues = {
  mobileNumber: '',
};

export const SignupValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `Mobile number must be ${min} characters`)
    .required('Mobile Number is required')
    .matches(/^[789]\d{9}$/, 'Mobile number should start from 7, 8, or 9'),
});
