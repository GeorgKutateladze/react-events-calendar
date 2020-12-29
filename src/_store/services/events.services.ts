import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import { IEvent } from '../types/events.types';

/** Get Events */
export const GetEvents = (): Observable<IEvent[]> => {
  return Axios.get(`localhost:400/events`).pipe(map(({ data }: AxiosResponse<IEvent[]>) => data));
};
