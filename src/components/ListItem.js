import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const ListItem = ({ library }) => {
  return (
    <CardSection>
      <Text style={styles.titleStyle}>{library.item.title}</Text>
    </CardSection>
  );
};

export default ListItem;
