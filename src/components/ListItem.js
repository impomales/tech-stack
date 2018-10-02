import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const ListItem = ({ library, selectLibrary }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress => selectLibrary(library.item.id)}
    >
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{library.item.title}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};



export default connect(
  null,
  actions
)(ListItem);
