// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config });
export default theme