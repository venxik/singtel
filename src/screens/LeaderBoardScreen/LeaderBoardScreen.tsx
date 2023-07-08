import { StyleSheet, FlatList } from 'react-native';
import { ComicText, LeaderboardItem, View } from '../../components';
import { useReduxSelector } from '../../redux';
import { useCallback } from 'react';

const LeaderboardScreen = () => {
  const { leaderboards } = useReduxSelector((s) => s.main);

  const renderItem = useCallback(({ item, index }: { item: number; index: number }) => {
    return (
      <LeaderboardItem testID="leaderboard-item" text={`${index + 1}. ${item}`} score={item} />
    );
  }, []);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <ComicText testID="text-empty">No data. Please play one round first!</ComicText>
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={{ height: 10 }} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={leaderboards}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  flatlistContainer: { flex: 1, paddingHorizontal: 20 },
});
