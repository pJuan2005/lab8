import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../constants/colors';

// Import 4 component nhỏ đã được tách theo yêu cầu đề bài
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function RegisterScreen() {
  // State lưu giá trị nhập liệu
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State đánh dấu các trường đã được người dùng tương tác (touched)
  // Giúp giao diện ban đầu không bị đỏ rực, nhưng vẫn đảm bảo nút Submit bị disable
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  // --- LOGIC VALIDATION THEO YÊU CẦU ĐỀ BÀI ---
  // 1. Tên không rỗng
  const isNameValid = name.trim().length > 0;
  const nameError = touched.name && !isNameValid ? 'Họ và tên không được để trống' : '';

  // 2. Email có ký tự @
  const isEmailValid = email.trim().length > 0 && email.includes('@');
  let emailError = '';
  if (touched.email) {
    if (email.trim().length === 0) {
      emailError = 'Email không được để trống';
    } else if (!email.includes('@')) {
      emailError = 'Email phải chứa ký tự @';
    }
  }

  // 3. Mật khẩu từ 6 ký tự
  const isPasswordValid = password.length >= 6;
  let passwordError = '';
  if (touched.password) {
    if (password.length === 0) {
      passwordError = 'Mật khẩu không được để trống';
    } else if (password.length < 6) {
      passwordError = 'Mật khẩu phải có từ 6 ký tự trở lên';
    }
  }

  // 4. Kiểm tra toàn bộ form có hợp lệ hay không để Disable / Enable nút Submit
  const isFormValid = isNameValid && isEmailValid && isPasswordValid;

  // Xử lý khi nhấn nút Submit (Đăng ký)
  const handleSubmit = () => {
    if (!isFormValid) {
      // Đánh dấu touched tất cả để hiện lỗi nếu có
      setTouched({ name: true, email: true, password: true });
      return;
    }

    const successMessage = `Họ và tên: ${name.trim()}\nEmail: ${email.trim()}\nMật khẩu: ******\n\nForm đăng ký của bạn hoàn toàn hợp lệ!`;

    if (Platform.OS === 'web') {
      window.alert(`🎉 Đăng Ký Thành Công!\n\n${successMessage}`);
    } else {
      Alert.alert(
        '🎉 Đăng Ký Thành Công!',
        successMessage,
        [
          {
            text: 'OK',
            onPress: () => {
              // Tùy chọn: có thể reset form sau khi đăng ký
            },
          },
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Component 1: AppHeader */}
          <AppHeader
            title="Đăng Ký Tài Khoản"
            subtitle="Tạo tài khoản để trải nghiệm toàn bộ tính năng của ứng dụng"
          />

          {/* Component 2: Card chứa form đăng ký */}
          <Card padding={24} borderRadius={16}>
            {/* Component 3: InputField cho Họ và tên */}
            <InputField
              label="Họ và tên *"
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (!touched.name) setTouched((prev) => ({ ...prev, name: true }));
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              placeholder="Ví dụ: Nguyễn Văn A"
              error={nameError}
            />

            {/* Component 3: InputField cho Email */}
            <InputField
              label="Email *"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (!touched.email) setTouched((prev) => ({ ...prev, email: true }));
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              placeholder="Ví dụ: user@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              error={emailError}
            />

            {/* Component 3: InputField cho Mật khẩu */}
            <InputField
              label="Mật khẩu *"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (!touched.password) setTouched((prev) => ({ ...prev, password: true }));
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
              secureTextEntry
              error={passwordError}
            />

            {/* Component 4: PrimaryButton (Submit) */}
            <PrimaryButton
              title="Đăng Ký Ngay"
              onPress={handleSubmit}
              disabled={!isFormValid} // Disable khi chưa hợp lệ theo yêu cầu đề bài
              style={styles.submitBtn}
            />
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    ...(Platform.OS === 'web' ? { minHeight: '100vh', width: '100%' } : {}),
  },
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
    flexGrow: 1,
  },
  submitBtn: {
    marginTop: 8,
  },
});
