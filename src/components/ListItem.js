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

const ListItem = ({ library, selectLibrary, expanded }) => (
  <TouchableWithoutFeedback onPress={() => selectLibrary(library.item.id)}>
    <View>
      <CardSection>
        <Text style={styles.titleStyle}>{library.item.title}</Text>
      </CardSection>

      {expanded && <Text>{library.item.description}</Text>}
    </View>
  </TouchableWithoutFeedback>
);

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
