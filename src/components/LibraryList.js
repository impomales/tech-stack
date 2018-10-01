import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const LibraryList = ({ libraries }) => (
  <View>
    <Text>LibraryList</Text>
  </View>
);

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
