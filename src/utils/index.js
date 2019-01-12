import Auth from 'j-toker';

Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
});

export const isValue = value => value || 'N/A';

export const toCutText = (value, size) => {
  if (value.length > size) {
    return value.slice(0, size) + '...';
  } else {
    return value;
  }
};

export const validationRules = {
  required: value => {
    return !value ? ['Required'] : undefined;
  },
  phone: value => {
    const length = value ? value.length : 0;
    if (value !== undefined && length > 0) {
      if (value.charAt(0) !== '+') {
        return ['Phone must start with +'];
      }
      if (value.length < 9 || !value.search(/[^+)(-\s0-9]/g)) {
        return ['Must be atleas 9 numbers'];
      }
    } else {
      return ['Phone is required.'];
    }
  },
  firstName: value => {
    const length = value ? value.length : 0;
    if (value === undefined || length === 0) {
      return ['Right Name'];
    }
  },
  lastName: value => {
    const length = value ? value.length : 0;
    if (value === undefined || length === 0) {
      return ['Right Name'];
    }
  },
  password: value => {
    const length = value ? value.length : 0;
    if (length < 8) {
      return ['Too short. Use at least 8 characters'];
    }
  },
  email: value => {
    const length = value ? value.length : 0;
    if (length > 0 && value !== undefined) {
      const re = /\S+@\S+\.\S+/;
      const replace = new RegExp(re);
      const res = value.search(replace);
      if (res) {
        return ['must be email@gmail.com'];
      }
    } else {
      return ['Check your email'];
    }
  },
};
