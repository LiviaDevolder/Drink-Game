import { extendTheme, ThemeOverride, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './constants/colors.constants';
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme: ThemeOverride = {
  config,
  styles: {
    global: {
      color: 'primary.black.default',
      'html,body': {
        height: '100%',
        margin: 0,
        padding: 0,
        bgColor: mode('linear-gradient(243.18deg, #B552A5 0%, #CF6529 100%)', 'linear-gradient(243.18deg, #B552A5 0%, #CF6529 100%)')
      },
      '.sb-show-main.sb-main-padded': {
        padding: 0,
      },
      '::-webkit-scrollbar': {
        w: '8px'
      },
      '::-webkit-scrollbar-track': {
        bgColor: '#f2f2f2',
        borderRadius: '10px'
      },
      '::-webkit-scrollbar-thumb': {
        bgColor: '#8c8c8b',
        borderRadius: '10px'
      },
    }
  },
  colors,
}

export default extendTheme(theme);