import { TOAST_POSITION, TOAST_STATUS } from './enums';

export const parseCssDark = (className: string, isDark?: boolean): string =>
  isDark ? `${className}-dark` : className;

export const createToast = (text?: string, status?: TOAST_STATUS) => {
  if (!text) {
    return {
      title: 'Unknown error',
      status,
      position: TOAST_POSITION.BOTTOM,
      isClosable: true,
    };
  }
  if (status) {
    return {
      title: text,
      status,
      position: TOAST_POSITION.BOTTOM,
      isClosable: true,
    };
  }
  return {
    title: text,
    position: TOAST_POSITION.BOTTOM,
    isClosable: true,
  };
};

export const createToastError = (error: any) => {
  return createToast(
    error.response?.data?.message || 'Unknown error',
    TOAST_STATUS.ERROR
  );
};
