import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

/**
 * Component InputField
 * Nhiệm vụ: Nhận label, value, onChangeText, error và hiển thị trường nhập dữ liệu kèm thông báo lỗi.
 *
 * @param {string} label - Nhãn hiển thị bên trên input
 * @param {string} value - Giá trị hiện tại của input
 * @param {function} onChangeText - Hàm callback khi thay đổi text
 * @param {string} error - Chuỗi thông báo lỗi (màu đỏ)
 * @param {string} placeholder - Placeholder hiển thị gợi ý
 * @param {boolean} secureTextEntry - Ẩn ký tự cho mật khẩu
 * @param {string} keyboardType - Kiểu bàn phím (default, email-address, ...)
 * @param {function} onBlur - Callback khi rời khỏi ô nhập
 * @param {object} containerStyle - Style bọc ngoài
 */
export default function InputField({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  onBlur,
  containerStyle,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  const hasError = Boolean(error);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          hasError && styles.inputError,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {hasError ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.white,
  },
  inputFocused: {
    borderColor: COLORS.borderFocused,
  },
  inputError: {
    borderColor: COLORS.errorBorder,
    backgroundColor: '#FEF2F2', // Đỏ rất nhạt làm nền khi lỗi
  },
  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: COLORS.error, // Lỗi hiển thị màu đỏ theo yêu cầu đề bài
    fontWeight: '500',
  },
});
