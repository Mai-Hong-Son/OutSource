import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {getListTinhSagaAction} from '../../store/actions/ttl';

const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTinhSagaAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>{}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
