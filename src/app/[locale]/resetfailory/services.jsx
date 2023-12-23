export const IS_PROD =
  process.browser && (window?.location?.hostname === 'cb.abb-bank.az' || window?.location?.hostname === 'cb.ibar.az');
export const IS_TEST = process.browser && window?.location?.hostname === 'corporate-banking-test.ibar.az';
export const IS_DEV = process.browser && window?.location?.hostname === 'corporate-banking-dev.ibar.az';
export const IS_LOCAL = process.env.NEXT_PUBLIC_ENV === 'local' || process.env.NODE_ENV === 'test';

export const IS_IMAGE_HOST =
  process?.browser &&
  (window?.location?.hostname === 'localhost' ? 'corporate-banking-dev.ibar.az' : window?.location?.hostname);

const prodUrl = 'https://cb.abb-bank.az';
export const testUrl = 'https://corporate-banking-test.ibar.az';
export const devUrl = 'https://corporate-banking-dev.ibar.az';

export const baseUrl = () => {
  if (IS_PROD) return prodUrl;
  if (IS_TEST) return testUrl;
  if (IS_DEV) return devUrl;
};

export const cookieOptions = {
  httpOnly: false
};

export const servicesList = {
  auth: 'auth/v1/auth',
  mail: 'auth/v1/mail',
  user: 'user/v1/users'
};

export const services = new Proxy(servicesList, {
    get: function (target, name) {
      const base = IS_LOCAL ? 'http://localhost/login/backend' : baseUrl();
      return `${base}/${target[name]}`;
    }
  });