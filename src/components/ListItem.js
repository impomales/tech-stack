import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { library, selectLibrary, expanded } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(library.item.id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{library.item.title}</Text>
          </CardSection>
          <CardSection>
            {expanded && (
              <Text style={{ flex: 1 }}>{library.item.description}</Text>
            )}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
