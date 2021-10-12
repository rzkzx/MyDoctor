const mainColors = {
  white1: 'white',
  white2: '#F3F3F3',
  whiteTransparent: 'rgba(255, 255, 255, 0.7)',
  black1: 'black',
  green1: '#1EA0BD',
  green2: '#24BBDD',
  green3: '#EDFCFD',
  green4: '#CEF2F4',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#DFDFDF',
  grey4: '#EDEEF0',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: mainColors.white1,
  black: mainColors.black1,
  disable: mainColors.grey4,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white1,
      underlay: mainColors.green2,
    },
    secondary: {
      background: mainColors.whiteTransparent,
      text: mainColors.dark1,
      underlay: mainColors.white2,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green3,
  cardRipple: mainColors.green4,
  rippleWhite: mainColors.grey3,
  rippleSendBtn: mainColors.dark2,
};
