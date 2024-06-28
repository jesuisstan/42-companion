import 'react-native-reanimated';
import { Pressable, StyleSheet } from 'react-native';
import { Moon, Sun } from 'lucide-react-native';
import { C42_GREEN_DARK, C42_TEXT, C42_BACKGROUND } from '@/style/Colors';

const ButtonTheme = ({ theme, setTheme }: { theme: any; setTheme: any }) => {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Pressable style={styles.floatingButton} onPress={toggleTheme}>
      {theme === 'dark' ? (
        <Moon size={21} color={'#151718'} />
      ) : (
        <Sun size={21} color={'#151718'} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    marginLeft: -15, // Half of the button's width to center it
    width: 30,
    height: 30,
    borderRadius: 28, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: C42_GREEN_DARK, // Default background color
    elevation: 4, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    zIndex: 100, // Ensure it's above other components
    opacity: 0.9 // Make it slightly transparent
  }
});

export default ButtonTheme;
