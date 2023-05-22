export interface Headersscale {
  HTTP_VERSION: string;
  HTTP_HOST: string;
  HTTP_X_REAL_IP: string;
  HTTP_X_3SCALE_PROXY_SECRET_TOKEN: string;
  CONTENT_LENGTH: string;
  HTTP_USER_AGENT: string;
  CONTENT_TYPE: string;
  HTTP_ACCEPT: string;
  HTTP_X_FORWARDED_FOR: string;
  HTTP_X_FORWARDED_PROTO: string;
  HTTP_X_ENVOY_EXTERNAL_ADDRESS: string;
  HTTP_X_REQUEST_ID: string;
  HTTP_X_ENVOY_EXPECTED_RQ_TIMEOUT_MS: string;
}
