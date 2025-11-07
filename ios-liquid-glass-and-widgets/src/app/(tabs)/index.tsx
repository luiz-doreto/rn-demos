import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  GlassView,
  GlassContainer,
  isLiquidGlassAvailable,
} from 'expo-glass-effect';
import { MeshGradientView } from 'expo-mesh-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExtensionStorage } from '@bacons/apple-targets';
import { useEffect } from 'react';

const widgetStorage = new ExtensionStorage('group.com.doretoluiz.widget.data');

const Favorites = () => {
  const liquidGlassAvailable = isLiquidGlassAvailable();

  useEffect(() => {
    widgetStorage.set('title', 'Luiz Doreto');
    widgetStorage.set('description', 'SwiftUI • React Native');
    ExtensionStorage.reloadWidget();
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Mesh Gradient Background */}
      <MeshGradientView
        style={styles.meshGradient}
        columns={3}
        rows={3}
        colors={[
          '#FF6B6B',
          '#4ECDC4',
          '#45B7D1',
          '#FFA07A',
          '#98D8C8',
          '#6C5CE7',
          '#FDCB6E',
          '#00B894',
          '#A29BFE',
        ]}
        points={[
          [0.0, 0.0],
          [0.5, 0.0],
          [1.0, 0.0],
          [0.0, 0.5],
          [0.5, 0.5],
          [1.0, 0.5],
          [0.0, 1.0],
          [0.5, 1.0],
          [1.0, 1.0],
        ]}
      />

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <GlassView style={styles.headerGlass} glassEffectStyle="regular">
            <Text style={styles.title}>iOS 26 Liquid Glass</Text>
            <Text style={styles.subtitle}>UI Showcase</Text>
            <Text style={styles.availability}>
              {liquidGlassAvailable ? '✓ Available' : '✗ Not Available'}
            </Text>
          </GlassView>
        </View>

        {/* Regular Glass Effect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Regular Glass Effect</Text>
          <GlassView style={styles.demoCard} glassEffectStyle="regular">
            <Text style={styles.cardText}>Regular Frosted Glass</Text>
            <Text style={styles.cardDescription}>
              Standard glass effect with frosted appearance
            </Text>
          </GlassView>
        </View>

        {/* Clear Glass Effect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Clear Glass Effect</Text>
          <GlassView style={styles.demoCard} glassEffectStyle="clear">
            <Text style={styles.cardText}>Clear Glass</Text>
            <Text style={styles.cardDescription}>
              Transparent glass with minimal blur
            </Text>
          </GlassView>
        </View>

        {/* Interactive Glass Effect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interactive Glass</Text>
          <GlassView
            style={styles.demoCard}
            glassEffectStyle="regular"
            isInteractive
          >
            <Text style={styles.cardText}>Interactive Glass</Text>
            <Text style={styles.cardDescription}>
              Responds to user interactions
            </Text>
          </GlassView>
        </View>

        {/* Tinted Glass Effects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tinted Glass Effects</Text>
          <View style={styles.tintedRow}>
            <GlassView
              style={styles.tintedGlass}
              glassEffectStyle="regular"
              tintColor="#FF6B6B"
            >
              <Text style={styles.tintLabel}>Red</Text>
            </GlassView>
            <GlassView
              style={styles.tintedGlass}
              glassEffectStyle="regular"
              tintColor="#4ECDC4"
            >
              <Text style={styles.tintLabel}>Teal</Text>
            </GlassView>
            <GlassView
              style={styles.tintedGlass}
              glassEffectStyle="regular"
              tintColor="#6C5CE7"
            >
              <Text style={styles.tintLabel}>Purple</Text>
            </GlassView>
          </View>
        </View>

        {/* Glass Container - Morphing Shapes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Glass Container (Morphing)</Text>
          <GlassContainer spacing={10} style={styles.containerDemo}>
            <GlassView style={styles.morphShape1} isInteractive />
            <GlassView style={styles.morphShape2} />
            <GlassView style={styles.morphShape3} />
          </GlassContainer>
          <Text style={styles.cardDescription}>
            Multiple glass views that morph together
          </Text>
        </View>

        {/* Stacked Glass Layers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stacked Glass Layers</Text>
          <View style={styles.stackedContainer}>
            <GlassView style={styles.stackLayer1} glassEffectStyle="clear">
              <Text style={styles.stackText}>Layer 1</Text>
            </GlassView>
            <GlassView style={styles.stackLayer2} glassEffectStyle="regular">
              <Text style={styles.stackText}>Layer 2</Text>
            </GlassView>
            <GlassView style={styles.stackLayer3} glassEffectStyle="clear">
              <Text style={styles.stackText}>Layer 3</Text>
            </GlassView>
          </View>
        </View>

        {/* Complex Glass Layout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Complex Layout</Text>
          <View style={styles.complexLayout}>
            <GlassView style={styles.complexCard1} glassEffectStyle="regular">
              <Text style={styles.complexTitle}>Card 1</Text>
              <Text style={styles.complexSubtitle}>Regular glass</Text>
            </GlassView>
            <View style={styles.complexRow}>
              <GlassView style={styles.complexCard2} glassEffectStyle="clear">
                <Text style={styles.complexTitle}>Card 2</Text>
              </GlassView>
              <GlassView
                style={styles.complexCard3}
                glassEffectStyle="clear"
                isInteractive
              >
                <Text style={styles.complexTitle}>Card 3</Text>
              </GlassView>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <GlassView style={styles.footerGlass} glassEffectStyle="regular">
            <Text style={styles.footerText}>
              Built with expo-glass-effect & expo-mesh-gradient
            </Text>
            <Text style={styles.footerSubtext}>iOS 26+ • Xcode 26+</Text>
          </GlassView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meshGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  headerGlass: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  availability: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 12,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  demoCard: {
    padding: 20,
    borderRadius: 16,
    minHeight: 100,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  tintedRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  tintedGlass: {
    flex: 1,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tintLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  containerDemo: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  morphShape1: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  morphShape2: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  morphShape3: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  stackedContainer: {
    height: 200,
    position: 'relative',
  },
  stackLayer1: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stackLayer2: {
    position: 'absolute',
    top: 60,
    left: 40,
    right: 40,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stackLayer3: {
    position: 'absolute',
    top: 120,
    left: 60,
    right: 60,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stackText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  complexLayout: {
    gap: 12,
  },
  complexCard1: {
    padding: 20,
    borderRadius: 16,
    minHeight: 100,
  },
  complexRow: {
    flexDirection: 'row',
    gap: 12,
  },
  complexCard2: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  complexCard3: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  complexTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  complexSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
    opacity: 0.8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
  },
  footerGlass: {
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Favorites;
