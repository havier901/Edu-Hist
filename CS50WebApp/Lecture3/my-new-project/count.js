import React from 'react';
import {StyleSheet, Text} from 'react-native';
// PropTypes is deprecated, why we use TypeScript instead of regular JSX

const styles = StyleSheet.create({
    text: {
        fontSize: 72,
    }
})

const Count = props => (
    <Text style={styles.text}>{props.count}</Text>
)

export default Count



