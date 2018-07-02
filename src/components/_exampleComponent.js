// @Vendor
const React = require('react');
const {
    View,
    Text
} = require('react-native');

class ExampleComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'column'}}>
                <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'red', 
                    justifyContent: 'space-around', alignItems: 'center'}}>
                    <Text style={{fontSize: 50}}>
                        A
                    </Text>
                    <Text style={{fontSize: 50}}>
                        A
                    </Text>
                    <Text style={{fontSize: 50}}>
                        A
                    </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'green'}}>
                    <Text>
                        B
                    </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'blue'}}>
                    <Text>
                        C
                    </Text>
                </View>
            </View>
        )
    }
}

export default ExampleComponent;