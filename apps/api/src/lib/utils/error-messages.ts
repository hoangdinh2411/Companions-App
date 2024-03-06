export const ERROR_MESSAGES = {
  USER: {
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    PASSWORD_WRONG: 'Passwords is wrong',
    EMAIL_WRONG: 'Email is wrong',
    BANNED: 'User is banned',
    MISSING_TOKEN: 'Missing token',
    INVALID_TOKEN: 'Invalid token',
    NOT_FOUND: 'User not found',
    SIGN_IN_BY_BANK_ID_FAILED: 'Sign in by bank id failed',
    INVALID_ID_NUMBER: 'This id number is not yours',
    NEED_TO_VERIFY_IDENTITY: 'You need to verify your identity',
    INVALID_VERIFICATION_CODE: 'Invalid verification code',
  },
  JOURNEY: {
    NOT_FOUND: 'Journey not found',
    DUPLICATE_JOURNEY: 'Cannot create duplicate journey',
    MISSING_JOURNEY_ID: 'Missing journey id',
    HAS_JOINED: 'You have joined this journey',
  },
  DELIVERY_ORDER: {
    NOT_FOUND: 'Delivery order not found',
    DUPLICATE_DELIVERY_ORDER: 'Cannot create duplicate delivery order',
    HAS_TAKEN: 'You have taken this delivery order',
    MISSING_DELIVERY_ORDER_ID: 'Missing delivery order id',
  },
};
