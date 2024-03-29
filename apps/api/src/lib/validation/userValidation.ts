import * as Yup from 'yup';

export const signInValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Required password'),
});

export const signUpValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Required password'),
  confirm_password: Yup.string()
    .test(
      'isSame',
      'Confirm password must be the same as password',
      function (value) {
        return this.parent.password === value;
      }
    )
    .required('Required password'),
  phone: Yup.string()
    .required('Need to specify the phone number')
    .min(10, 'Phone number cannot be less than 10 characters')
    .max(15, 'Phone number cannot be more than 15 characters'),
});
