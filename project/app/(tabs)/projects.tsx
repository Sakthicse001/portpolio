import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const projects = [
  {
    id: 1,
    title: 'College Event Registration Website',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django'],
    description: 'A website for students to register for events. Includes authentication and payment integration.',
  },
  {
    id: 2,
    title: 'Love Calculator App',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=400&fit=crop',
    tech: ['React Native'],
    description: 'A fun mobile app to calculate love compatibility between two names.',
  },
  {
    id: 3,
    title: 'AI Chatbot & Voice Assistant',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
    tech: ['Python', 'NLP', 'React Native'],
    description: 'An AI-powered chatbot for answering queries and voice-based assistance.',
  },
];

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>My Projects</Text>
        
        {projects.map((project) => (
          <Pressable
            key={project.id}
            style={({ pressed }) => [
              styles.projectCard,
              pressed && styles.projectCardPressed,
            ]}>
            <Image
              source={{ uri: project.image }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <View style={styles.techContainer}>
                {project.tech.map((tech, index) => (
                  <View key={index} style={styles.techBadge}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
            </View>
          </Pressable>
        ))}
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
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#CDD6F4',
    marginBottom: 30,
  },
  projectCard: {
    backgroundColor: '#313244',
    borderRadius: 24,
    marginBottom: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#45475A',
  },
  projectCardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  projectImage: {
    width: '100%',
    height: 220,
  },
  projectContent: {
    padding: 24,
  },
  projectTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#CDD6F4',
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    marginHorizontal: -4,
  },
  techBadge: {
    backgroundColor: '#1E1E2E',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: '#45475A',
  },
  techText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#89B4FA',
  },
  projectDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#BAC2DE',
  },
});