import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/Color.tsx';

interface CustomButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonTitle,
  onPress,
  disabled = false,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});
