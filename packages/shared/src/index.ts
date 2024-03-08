import { UserEnum, UserStatusEnum, UserRoleEnum } from './enums/user';
import {
  UserDocument,
  SignInAPIResponse,
  SignInFormData,
  SignUpFormData,
  GetUserAPIResponse,
  ResponseWithPagination,
  HistoryAPIResponse,
} from './interfaces/user';
import {
  signInValidation,
  signUpValidation,
} from './validation/userValidation';

import {
  journeyFormDataValidation,
  journeyRequestValidation,
} from './validation/journeyValidation';

import { queryValidation } from './validation/queryValidation';
import { JourneyDocument, JourneyFormData } from './interfaces/journey';
import { JourneyStatusEnum } from './enums/journey';

import {
  TypeOfCommodityEnum,
  DeliveryOrderStatusEnum,
} from './enums/delivery-order';

import {
  DeliveryOrderDocument,
  DeliveryOrderFormData,
} from './interfaces/delivery-order';

import {
  deliveryOrderFormDataValidation,
  deliveryOrderRequestValidation,
} from './validation/deliveryOrderValidation';

export {
  signInValidation,
  signUpValidation,
  journeyFormDataValidation,
  journeyRequestValidation,
  queryValidation,
  deliveryOrderFormDataValidation,
  deliveryOrderRequestValidation,
};
export {
  UserEnum,
  UserStatusEnum,
  UserRoleEnum,
  JourneyStatusEnum,
  TypeOfCommodityEnum,
  DeliveryOrderStatusEnum,
};

//User
export type {
  UserDocument,
  SignInAPIResponse,
  SignInFormData,
  SignUpFormData,
  GetUserAPIResponse,
  HistoryAPIResponse,
  ResponseWithPagination,
};

//Journey
export type { JourneyDocument, JourneyFormData };

//Delivery Order
export type { DeliveryOrderDocument, DeliveryOrderFormData };
