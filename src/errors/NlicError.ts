import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export default class NlicError<T = unknown, D = unknown> extends AxiosError<T, D> {
  isNlicError = true;

  constructor(
    message?: string,
    code?: string,
    config?: InternalAxiosRequestConfig<D>,
    request?: unknown,
    response?: AxiosResponse<T, D>,
    stack?: string,
  ) {
    super(message, code, config, request, response);
    this.isNlicError = true;

    if (stack) {
      this.stack = stack;
    }
  }
}
