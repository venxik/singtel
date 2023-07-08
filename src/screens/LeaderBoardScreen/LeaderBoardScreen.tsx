import { StyleSheet, FlatList } from 'react-native';
import { ComicText, LeaderboardItem, View } from '../../components';
import { useReduxSelector } from '../../redux';
import { useCallback } from 'react';

const LeaderBoardScreen = () => {
  const { leaderboards } = useReduxSelector((s) => s.main);

  const renderItem = useCallback(({ item, index }: { item: number; index: number }) => {
    return <LeaderboardItem text={`${index + 1}. ${item}`} />;
  }, []);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <ComicText>No data. Please play one round first!</ComicText>
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

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  flatlistContainer: { flex: 1, paddingHorizontal: 20 },
});
