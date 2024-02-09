import { View, StyleSheet } from 'react-native';
import { TextInput, Text, useTheme } from 'react-native-paper';

interface InputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  password: boolean;
}

const Input = ({ value, onChange, placeholder, password }: InputProps) => {
  const theme = useTheme();
  return (
    <View style={{ alignItems: 'center' }}>
      <Text variant='labelSmall' style={{ fontFamily: "Lato-Bold", width: "100%" }}>{placeholder?.toUpperCase()}</Text>
      <TextInput
        outlineStyle={{ borderRadius: 7, borderColor: theme.colors.outlineVariant }}
        style={styles.input}
        label={placeholder}
        value={value}
        secureTextEntry={password}
        onChangeText={onChange}

        mode="outlined"
        right={password ? <TextInput.Icon icon="eye" color={theme.colors.primary} /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    fontFamily: "Lato-Regular",
    width: '100%',
  }
})

export default Input;
