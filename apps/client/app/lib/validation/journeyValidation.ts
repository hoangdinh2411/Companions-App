import dayjs from 'dayjs';
import * as yup from 'yup';

export const journeyFormDataValidation = yup.object().shape({
  title: yup
    .string()
    .required('Need to specify the title')
    .max(50, 'Title cannot be more than 50 characters'),
  from: yup.string().required('Need to specify the starting point'),
  to: yup.string().required('Need to specify the destination'),
  message: yup.string(),
  start_date: yup
    .string()
    .test(
      'start_date',
      'Start date cannot be less than today',
      (start_date) => {
        return (
          dayjs(start_date).format('YYYY-MM-DD') >= dayjs().format('YYYY-MM-DD')
        );
      }
    )
    .required('Need to specify the start date'),
  end_date: yup
    .string()
    .test(
      'end_date',
      'End date cannot be less than start date',
      (end_date, context) => {
        return (
          dayjs(end_date).format('YYYY-MM-DD') >=
          dayjs(context.parent.start_date).format('YYYY-MM-DD')
        );
      }
    )
    .required('Need to specify the end date'),
  price: yup
    .number()
    .min(0, 'Price cannot be less than 0')
    .required('Need to specify the price'),
  seats: yup
    .number()
    .min(1, 'Seats cannot be less than 1')
    .required('Need to specify the number of seats'),
  time: yup.string().required('Need to specify the time'),
  be_in_touch: yup
    .boolean()
    .test(
      'isBoolean',
      'Need to specify if you want to be in touch',
      (value) => {
        return typeof value === 'boolean';
      }
    )
    .required('Need to specify if you want to be in touch'),
});

export const journeyRequestValidation = yup
  .object()
  .concat(journeyFormDataValidation)
  .shape({
    // phone: yup
    //   .string()
    //   .required('Need to specify the phone number')
    //   .min(10, 'Phone number cannot be less than 10 characters')
    //   .max(15, 'Phone number cannot be more than 15 characters'),
  });
