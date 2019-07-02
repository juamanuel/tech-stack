import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, UIManager, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
        UIManager.setLayoutAnimationEnabledExperimental
         && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    renderDescription() {
        const { expanded } = this.props;
        const { description } = this.props.library.item;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{description}</Text>
                </CardSection>
                
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

const mapStateToProps = (state, ownProps) => {
     const expanded = state.selectedLibraryId === ownProps.library.item.id;
     return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
