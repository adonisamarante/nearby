import {Stack} from 'expo-router'
import { colors } from '@/styles/theme'

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'
import { Loading } from '@/components/loading'

// this will be the first file checked, even before index.tsx
export default function Layout() {
  // loading the fonts making them available in the project
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })

  // usefonts allow you to check if the fonts are still loading
  // it's recommended to check before loading the rest of the app to avoid crashing
  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Stack
      screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] }, 
      }}
    />
  )
}
