import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';

/**
 * Component PrimaryButton
 * Nhiệm vụ: Nhận title, onPress, disabled để làm nút bấm chính (Submit).
 *
 * @param {string} title - Tiêu đề hiển thị trên nút
 * @param {function} onPress - Hàm thực thi khi bấm
 * @param {boolean} disabled - Trạng thái vô hiệu hóa nút
 * @param {boolean} loading - Trạng thái đang tải dữ liệu (nếu có)
 * @param {object} style - Style tùy chỉnh thêm cho nút
 */
export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={[styles.title, disabled && styles.titleDisabled]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: COLORS.primaryDisabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  titleDisabled: {
    color: '#E0E7FF',
  },
});
