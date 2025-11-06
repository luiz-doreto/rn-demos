import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import { GlassView, GlassContainer } from 'expo-glass-effect';
import { MeshGradientView } from 'expo-mesh-gradient';
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Advanced = () => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const morphAnim = useRef(new Animated.Value(0)).current;
  const breatheAnim = useRef(new Animated.Value(1)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  // Dynamic state
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Slide in animation
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Continuous rotation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    ).start();

    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Morphing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(morphAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(morphAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Breathing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(breatheAnim, {
          toValue: 1.08,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(breatheAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Wave animation
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Rotation interpolation
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Morph interpolations
  const morphWidth = morphAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 250],
  });

  const morphHeight = morphAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 100],
  });

  const morphRadius = morphAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [75, 20],
  });

  // Wave animations for multiple elements
  const wave1 = waveAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -20, 0],
  });

  const wave2 = waveAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -20, 0],
  });

  const wave3 = waveAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -20, 0],
  });

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Animated Mesh Gradient Background */}
      <MeshGradientView
        style={styles.meshGradient}
        columns={3}
        rows={3}
        colors={[
          '#667EEA',
          '#764BA2',
          '#F093FB',
          '#4FACFE',
          '#00F2FE',
          '#43E97B',
          '#FA709A',
          '#FEE140',
          '#30CFD0',
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with fade in */}
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <GlassView style={styles.headerGlass} glassEffectStyle="regular">
            <Text style={styles.title}>Advanced Glass</Text>
            <Text style={styles.subtitle}>Animations & Interactions</Text>
          </GlassView>
        </Animated.View>

        {/* 1. Fade & Scale Animation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Fade & Scale Animation</Text>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
          >
            <GlassView style={styles.demoCard} glassEffectStyle="regular">
              <Text style={styles.cardText}>Animated Entrance</Text>
              <Text style={styles.cardDescription}>
                Fades in and scales up on mount
              </Text>
            </GlassView>
          </Animated.View>
        </View>

        {/* 2. Slide In Animation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Slide Animation</Text>
          <Animated.View
            style={{
              transform: [{ translateX: slideAnim }],
            }}
          >
            <GlassView
              style={styles.demoCard}
              glassEffectStyle="clear"
              isInteractive
            >
              <Text style={styles.cardText}>Slide In Effect</Text>
              <Text style={styles.cardDescription}>
                Slides from left with spring physics
              </Text>
            </GlassView>
          </Animated.View>
        </View>

        {/* 3. Continuous Rotation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Continuous Rotation</Text>
          <View style={styles.centerContent}>
            <Animated.View
              style={{
                transform: [{ rotate: rotation }],
              }}
            >
              <GlassView
                style={styles.rotatingGlass}
                glassEffectStyle="regular"
              >
                <Text style={styles.rotatingText}>🌟</Text>
              </GlassView>
            </Animated.View>
          </View>
          <Text style={styles.cardDescription}>
            Glass element rotating continuously
          </Text>
        </View>

        {/* 4. Pulse Animation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Pulse Effect</Text>
          <View style={styles.centerContent}>
            <Animated.View
              style={{
                transform: [{ scale: pulseAnim }],
              }}
            >
              <GlassView
                style={styles.pulseGlass}
                glassEffectStyle="clear"
                isInteractive
              >
                <Text style={styles.pulseText}>💎</Text>
              </GlassView>
            </Animated.View>
          </View>
          <Text style={styles.cardDescription}>
            Pulsing scale animation (like a heartbeat)
          </Text>
        </View>

        {/* 5. Morphing Shape */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Morphing Shape</Text>
          <View style={styles.centerContent}>
            <Animated.View
              style={{
                width: morphWidth,
                height: morphHeight,
                borderRadius: morphRadius,
              }}
            >
              <GlassView style={styles.morphGlass} glassEffectStyle="regular">
                <Text style={styles.morphText}>MORPH</Text>
              </GlassView>
            </Animated.View>
          </View>
          <Text style={styles.cardDescription}>
            Shape morphs between square and wide rectangle
          </Text>
        </View>

        {/* 6. Breathing Animation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Breathing Effect</Text>
          <Animated.View
            style={{
              transform: [{ scale: breatheAnim }],
            }}
          >
            <GlassView style={styles.demoCard} glassEffectStyle="clear">
              <Text style={styles.cardText}>Breathing Glass</Text>
              <Text style={styles.cardDescription}>
                Subtle scale animation (calm, meditative)
              </Text>
            </GlassView>
          </Animated.View>
        </View>

        {/* 7. Wave Container */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Wave Animation</Text>
          <GlassContainer spacing={15} style={styles.waveContainer}>
            <Animated.View
              style={{
                transform: [{ translateY: wave1 }],
              }}
            >
              <GlassView style={styles.waveShape} />
            </Animated.View>
            <Animated.View
              style={{
                transform: [{ translateY: wave2 }],
              }}
            >
              <GlassView style={styles.waveShape} />
            </Animated.View>
            <Animated.View
              style={{
                transform: [{ translateY: wave3 }],
              }}
            >
              <GlassView style={styles.waveShape} />
            </Animated.View>
          </GlassContainer>
          <Text style={styles.cardDescription}>
            Multiple glass shapes in wave motion
          </Text>
        </View>

        {/* 8. Layered Parallax */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Parallax Layers</Text>
          <View style={styles.parallaxContainer}>
            <Animated.View
              style={[
                styles.parallaxLayer,
                {
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <GlassView style={styles.parallaxGlass1} glassEffectStyle="clear">
                <Text style={styles.parallaxText}>Back</Text>
              </GlassView>
            </Animated.View>
            <Animated.View
              style={[
                styles.parallaxLayer,
                {
                  transform: [{ scale: pulseAnim }],
                },
              ]}
            >
              <GlassView
                style={styles.parallaxGlass2}
                glassEffectStyle="regular"
              >
                <Text style={styles.parallaxText}>Middle</Text>
              </GlassView>
            </Animated.View>
            <Animated.View
              style={[
                styles.parallaxLayer,
                {
                  transform: [{ scale: breatheAnim }],
                },
              ]}
            >
              <GlassView style={styles.parallaxGlass3} glassEffectStyle="clear">
                <Text style={styles.parallaxText}>Front</Text>
              </GlassView>
            </Animated.View>
          </View>
          <Text style={styles.cardDescription}>
            Three layers animating at different speeds
          </Text>
        </View>

        {/* 9. Interactive Expand/Collapse */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Interactive Toggle</Text>
          <Animated.View>
            <GlassView
              style={[styles.expandableCard, isExpanded && styles.expandedCard]}
              glassEffectStyle="regular"
              isInteractive
            >
              <Text
                style={styles.cardText}
                onPress={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? '▼' : '▶'} Tap to{' '}
                {isExpanded ? 'Collapse' : 'Expand'}
              </Text>
              {isExpanded && (
                <View style={styles.expandedContent}>
                  <Text style={styles.expandedText}>
                    This content appears when expanded!
                  </Text>
                  <Text style={styles.expandedText}>
                    Glass maintains its effect during the transition.
                  </Text>
                </View>
              )}
            </GlassView>
          </Animated.View>
        </View>

        {/* 10. Staggered Entrance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10. Staggered Cards</Text>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            }}
          >
            <GlassView style={styles.staggerCard} glassEffectStyle="clear">
              <Text style={styles.staggerText}>Card 1</Text>
            </GlassView>
          </Animated.View>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
          >
            <GlassView style={styles.staggerCard} glassEffectStyle="regular">
              <Text style={styles.staggerText}>Card 2</Text>
            </GlassView>
          </Animated.View>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: breatheAnim }],
            }}
          >
            <GlassView style={styles.staggerCard} glassEffectStyle="clear">
              <Text style={styles.staggerText}>Card 3</Text>
            </GlassView>
          </Animated.View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <GlassView style={styles.footerGlass} glassEffectStyle="regular">
            <Text style={styles.footerText}>
              Advanced animations powered by React Native Animated API
            </Text>
            <Text style={styles.footerSubtext}>
              Combine with expo-glass-effect for stunning results
            </Text>
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
    textAlign: 'center',
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  rotatingGlass: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotatingText: {
    fontSize: 40,
  },
  pulseGlass: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseText: {
    fontSize: 50,
  },
  morphGlass: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  morphText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  waveContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  waveShape: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  parallaxContainer: {
    height: 250,
    position: 'relative',
  },
  parallaxLayer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parallaxGlass1: {
    width: 280,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  parallaxGlass2: {
    width: 240,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    top: 75,
  },
  parallaxGlass3: {
    width: 200,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
  },
  parallaxText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  expandableCard: {
    padding: 20,
    borderRadius: 16,
    minHeight: 80,
  },
  expandedCard: {
    minHeight: 160,
  },
  expandedContent: {
    marginTop: 16,
    gap: 8,
  },
  expandedText: {
    fontSize: 14,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  staggerCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  staggerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
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

export default Advanced;
