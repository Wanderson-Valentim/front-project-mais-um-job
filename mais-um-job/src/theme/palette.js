import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

theme = createTheme(theme, {
  palette: {
    main: theme.palette.augmentColor({
      color: {
        main: '#800000',
        contrastText: '#FFFFFA',
      },
      name: 'main',
    }),
    background: theme.palette.augmentColor({
      color: {
        main: '#FFFFFA',
        contrastText: '#1D1D1B',
      },
      name: 'background',
    }),
    auxiliary: theme.palette.augmentColor({
      color: {
        main: '#918080',
        contrastText: '#FFFFFA',
      },
      name: 'auxiliary',
    }),
    customBlack: theme.palette.augmentColor({
      color: {
        main: '#1D1D1B',
        contrastText: '#FFFFFA',
      },
      name: 'customBlack',
    }),
  },
});

export default theme;
