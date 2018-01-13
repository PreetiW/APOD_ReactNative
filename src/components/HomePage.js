import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {getApodData} from "../actions";
import { connect } from 'react-redux';

export class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
           imageUti : "https://facebook.github.io/react/logo-og.png"
        }

    }

    componentWillMount() {

        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson);
               this.setState({ imageUri: responseJson.url});
            })
            .catch((error) => {
                console.error(error);
            });
        this.props.onPageLoad({});
    }

    render() {
        let { imageUri } =  this.state;

        return (
            <View style={styles.container}>
                <Text>Preeti</Text>
                <Image
                    style={{width: 500, height: 500}}
                    source={{uri: imageUri}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const mapStateToProps = state => {
    return {
        robotDetails: state.Commands
    }
}
const mapDispatchToProps = (dispatch) => ({
    onPageLoad: (payload) => { dispatch(getApodData(payload)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
