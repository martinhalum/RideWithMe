import {Ride} from '@redux/types';

export type AppParamList = {
  AuthNav: undefined;
  MainNav: {data: Ride[] | null | undefined};
};
