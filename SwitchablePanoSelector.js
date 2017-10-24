import React from 'react';
import {Image, VideoPano, View, VrButton, asset, MediaPlayerState} from 'react-vr';

export default class SwitchablePanoSelector extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.time = 0
        this.state = {
            currentPano: this.props.panos[0],
            playerState: new MediaPlayerState({autoPlay:true}),
        };
        this.state.playerState.onTimeUpdate = (e) => {
            this.time = e.nativeEvent.currentTime;
        }
    }

    componentDidUpdate() {
        this.state.playerState.seekTo(this.time);
    }

    switchPano(switchToPano) {
        this.setState({
            currentPano: this.props.panos.find(p => p.id === switchToPano)
        });
    }

    render() {
        return (
            <View>
                <VideoPano playerState={this.state.playerState} source={{uri: this.state.currentPano.source}}/>
                <VrButton
                    style={{width: 0.7}}
                    onClick={() => this.switchPano(this.state.currentPano.link)}>
                    <Image style={{width: 1, height: 1, transform: [{translate:[0,0,-5]}]}}
                           source={asset(this.state.currentPano.linkImage)}
                           inset={[0.2, 0.2, 0.2, 0.2]}
                           insetSize={[0.05, 0.45, 0.55, 0.15]}
                    >
                    </Image>
                </VrButton>
            </View>
        );
    }
};

