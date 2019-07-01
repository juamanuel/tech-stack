import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        console.log(this.props);
        const { id, description } = this.props.library.item;
        const { selectedLibraryId } = this.props;
        if (id === selectedLibraryId) {
            return (
                <Text>{description}</Text>
            );
        }
    }

    render() {
        const { id, title } = this.props.library.item;
        const { titleStyle } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });

export default connect(mapStateToProps, actions)(ListItem);
