import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

/**
 * Component AppHeader
 * Nhiệm vụ: Hiển thị tiêu đề màn hình và đoạn mô tả ngắn.
 *
 * @param {string} title - Tiêu đề chính của màn hình
 * @param {string} subtitle - Mô tả ngắn giải thích hoặc hướng dẫn
 * @param {object} containerStyle - Style tùy chỉnh cho khung header (nếu cần)
 */
export default function AppHeader({ title, subtitle, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
  },
});
