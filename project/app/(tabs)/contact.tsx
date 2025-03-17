import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Linkedin, Github } from 'lucide-react-native';

const contactMethods = [
  {
    id: 'email',
    title: 'Email',
    value: 'sakthi1000k@gmail.com',
    icon: Mail,
    action: () => Linking.openURL('mailto:sakthi1000k@gmail.com'),
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/sakthi-p-1a38002a3',
    icon: Linkedin,
    action: () => Linking.openURL('https://linkedin.com/in/sakthi-p-1a38002a3'),
  },
  {
    id: 'github',
    title: 'GitHub',
    value: 'github.com/sakthi1000k@gmail.com',
    icon: Github,
    action: () => Linking.openURL('https://github.com/sakthi1000k@gmail.com'),
  },
];

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>
          Feel free to reach out for collaborations or just a friendly hello
        </Text>

        <View style={styles.contactList}>
          {contactMethods.map((method) => (
            <Pressable
              key={method.id}
              style={({ pressed }) => [
                styles.contactCard,
                pressed && styles.contactCardPressed,
              ]}
              onPress={method.action}>
              <View style={styles.iconContainer}>
                <method.icon size={28} color="#89B4FA" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>{method.title}</Text>
                <Text style={styles.contactValue}>{method.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Looking forward to connecting with you!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#CDD6F4',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#BAC2DE',
    marginBottom: 40,
  },
  contactList: {
    gap: 20,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#313244',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#45475A',
  },
  contactCardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1E1E2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#45475A',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#CDD6F4',
    marginBottom: 6,
  },
  contactValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#89B4FA',
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#BAC2DE',
    textAlign: 'center',
  },
});