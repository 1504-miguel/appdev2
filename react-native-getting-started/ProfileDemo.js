import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileDemo = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header Section with Gradient Effect */}
      <View style={styles.headerContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>ND</Text>
        </View>
        <Text style={styles.header}>Nathaniel Miguel David</Text>
        <Text style={styles.subHeader}>Information Systems Student</Text>
      </View>

      {/* Quick Info Cards */}
      <View style={styles.quickInfoContainer}>
        <View style={styles.quickInfoCard}>
          <Text style={styles.quickInfoLabel}>Age</Text>
          <Text style={styles.quickInfoValue}>22</Text>
        </View>
        <View style={styles.quickInfoCard}>
          <Text style={styles.quickInfoLabel}>Section</Text>
          <Text style={styles.quickInfoValue}>A</Text>
        </View>
        <View style={styles.quickInfoCard}>
          <Text style={styles.quickInfoLabel}>Course</Text>
          <Text style={styles.quickInfoValue}>BSIS 3</Text>
        </View>
      </View>

      {/* Hobby Section */}
      <View style={styles.section}>
        <View style={styles.iconLabelContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>🎤</Text>
          </View>
          <Text style={styles.sectionTitle}>Favorite Hobby</Text>
        </View>
        <Text style={styles.value}>Singing and dancing, but only in private.</Text>
      </View>


      {/* Pet Peeves Section */}
      <View style={styles.section}>
        <View style={styles.iconLabelContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>😤</Text>
          </View>
          <Text style={styles.sectionTitle}>Pet Peeves in Class</Text>
        </View>
        <View style={styles.peeveItem}>
          <View style={styles.peeveBullet}>
            <Text style={styles.peeveBulletText}>1</Text>
          </View>
          <Text style={styles.peeveText}>
            When people don't mute their microphones during online lectures
          </Text>
        </View>
        <View style={styles.peeveItem}>
          <View style={styles.peeveBullet}>
            <Text style={styles.peeveBulletText}>2</Text>
          </View>
          <Text style={styles.peeveText}>
            Group members who don't contribute equally to team projects
          </Text>
        </View>
        <View style={styles.peeveItem}>
          <View style={styles.peeveBullet}>
            <Text style={styles.peeveBulletText}>3</Text>
          </View>
          <Text style={styles.peeveText}>
            Classmates who talk loudly during lectures
          </Text>
        </View>
      </View>

      {/* Footer Spacing */}
      <View style={styles.footer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  contentContainer: {
    paddingBottom: 30,
  },
  // Header Styles
  headerContainer: {
    backgroundColor: '#4a90e2',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#5ba3f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: '#e3f2fd',
    fontWeight: '500',
  },
  // Quick Info Cards
  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  quickInfoCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#4a90e2',
  },
  quickInfoLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  quickInfoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  // Section Styles
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  iconLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconEmoji: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  value: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
  },
  bio: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 26,
    textAlign: 'justify',
  },
  // Pet Peeves Styles
  peeveItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingLeft: 5,
  },
  peeveBullet: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  peeveBulletText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  peeveText: {
    flex: 1,
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
  },
  footer: {
    height: 20,
  },
});

export default ProfileDemo;