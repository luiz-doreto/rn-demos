import Mock from '@/mocks/matches.json';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const liveMatch = Mock.matches[0];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/profile.jpeg')}
          style={styles.logo}
          accessible
          accessibilityLabel='Foto de perfil do usuário'
        />
        <Text style={styles.title}>Accessibility App</Text>
        <MaterialIcons
          name='logout'
          size={40}
          color='black'
          accessible
          accessibilityLabel='Sair da aplicação'
        />
      </View>

      <View style={styles.liveGameSection}>
        <View
          style={styles.liveCard}
          accessible
          accessibilityLabel={`Partida em andamento, ${liveMatch.homeTeam.name} vs ${liveMatch.awayTeam.name}. Placar: ${liveMatch.score.home} a ${liveMatch.score.away}. ${liveMatch.currentMinute} minutos.`}
          importantForAccessibility='yes'
        >
          <View style={styles.liveHost}>
            <Image
              source={{ uri: liveMatch.homeTeam.logo }}
              style={styles.liveLogo}
            />
            <Text style={styles.liveTeamName}>{liveMatch.homeTeam.name}</Text>
          </View>
          <View style={styles.liveMatchInfo}>
            <Text style={styles.status}>{liveMatch.status}</Text>
            <Text
              style={styles.matchTime}
            >{`${liveMatch.currentMinute} '`}</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>{liveMatch.score.home}</Text>
              <Text style={styles.score}>-</Text>
              <Text style={styles.score}>{liveMatch.score.away}</Text>
            </View>
          </View>
          <View style={styles.liveVisitor}>
            <Image
              source={{ uri: liveMatch.awayTeam.logo }}
              style={styles.liveLogo}
            />
            <Text style={styles.liveTeamName}>{liveMatch.awayTeam.name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.matchSection}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveGameSection: {
    flex: 1,
    padding: 20,
  },
  liveCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  liveLogo: {
    width: 50,
    height: 50,
  },
  liveTeamName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  liveHost: {
    flex: 1,
    flexShrink: 1,
    gap: 8,
    alignItems: 'center',
  },
  liveMatchInfo: {
    flex: 1,
    flexShrink: 1,
    gap: 8,
    alignItems: 'center',
  },
  status: {
    fontSize: 18,
    color: 'red',
  },
  matchTime: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  liveVisitor: {
    flex: 1,
    flexShrink: 1,
    gap: 8,
    alignItems: 'center',
  },
  matchSection: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
});
