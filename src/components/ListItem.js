import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ListItem = ({ library }) => {
  return (
  <CardSection>
    <Text>{library.item.title}</Text>
  </CardSection>
)};

export default ListItem;
