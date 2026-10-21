import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

/**
 * Component Card
 * Nhiệm vụ: Khung chứa nội dung với padding, borderRadius và đổ bóng.
 *
 * @param {React.ReactNode} children - Nội dung nằm bên trong Card
 * @param {number} padding - Khoảng đệm bên trong (mặc định 20)
 * @param {number} borderRadius - Bo góc của khung (mặc định 16)
 * @param {object} style - Style tùy biến thêm
 */
export default function Card({
  children,
  padding = 20,
  borderRadius = 16,
  style,
}) {
  return (
    <View
      style={[
        styles.card,
        {
          padding: padding,
          borderRadius: borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
});
