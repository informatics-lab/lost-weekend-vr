import React from 'react';
import {Image, VideoPano, View, VrButton, Sound, asset} from 'react-vr';

export default class SwitchablePanoSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPano: this.props.panos[0]
        };

    }

    switchPano(switchToPano) {
        this.setState({
            currentPano: this.props.panos.find(p => p.id === switchToPano)
        });
    }

    render() {
        return (
            <View>
                {
                    this.props.panos.map((p)=>{
                        let opacity = 1.0;
                        if(p.id === this.state.currentPano.id) {
                            opacity = 0.0;
                        }
                        return (<VideoPano key={p.id} source={{uri: p.source}} style={{opacity: opacity}} muted={true}/>)
                    })

                }
                <Sound source={{uri: "https://s3.eu-west-2.amazonaws.com/lostweekend-3d-video/audio/public_service_broadcasting.mp3"}} />
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

