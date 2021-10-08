import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingTop: 19,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 0,
    paddingTop: 19,
    position: 'absolute',
  },
  text: {
    fontWeight: '600',
    color: 'black',
    fontSize: 17,
  },
  rightText: {
    fontWeight: '300',
  },
  rightNumber: {
    backgroundColor: '#FF5349',
    color: 'white',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
