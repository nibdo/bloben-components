// tslint:disable-next-line:cyclomatic-complexity
const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'isMobile':
      return {
        ...state,
        isMobile: action.payload,
      };
    case 'isDark':
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
