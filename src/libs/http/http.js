import { defer } from 'rxjs';
import { initializeAxios } from './axiosSetup';
import { axiosRequestConfiguration } from './axiosConfig';
import { map } from 'rxjs/operators';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = (url, queryParams) => {
  return defer(() => axiosInstance.get(url, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

export default { get };
