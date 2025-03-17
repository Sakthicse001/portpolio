import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const skills = [
  'React Native',
  'Django',
  'JavaScript',
  'HTML',
  'CSS',
  'Python',
  'Firebase',
  'REST APIs',
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'data:image/png;base64,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' }}
              style={styles.avatar}
            />
            <View style={styles.avatarRing} />
          </View>
          <Text style={styles.name}>Sakthi</Text>
          <Text style={styles.role}>Web Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              I am a passionate developer with experience in web and mobile app development.
              My expertise spans across various technologies and frameworks, allowing me to
              create comprehensive solutions for diverse client needs.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#89B4FA',
  },
  avatarRing: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#89B4FA',
    opacity: 0.3,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#CDD6F4',
    marginBottom: 4,
  },
  role: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#89B4FA',
    opacity: 0.9,
  },
  section: {
    marginBottom: 35,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#CDD6F4',
    marginBottom: 20,
  },
  aboutCard: {
    backgroundColor: '#313244',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#45475A',
  },
  aboutText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#BAC2DE',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  skillBadge: {
    backgroundColor: '#313244',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    margin: 6,
    borderWidth: 1,
    borderColor: '#45475A',
  },
  skillText: {
    fontFamily: 'Inter-SemiBold',
    color: '#89B4FA',
    fontSize: 14,
  },
});