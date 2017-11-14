import React from 'react';
import {AppRegistry, View} from 'react-vr';
import SwitchablePanoSelector from "./SwitchablePanoSelector";

export default class lost_weekend_vr extends React.Component {
    render() {
        return (
            <View>
                <SwitchablePanoSelector panos={[
                    {   id: "stage",
                        source: "https://s3.eu-west-2.amazonaws.com/lostweekend-3d-video/sliced/psb/virb_psb_1.m4v",
                        link: "crowd",
                        linkImage: "cam_icon_crowd.svg"
                    },
                    {
                        id: "crowd",
                        source: "https://s3.eu-west-2.amazonaws.com/lostweekend-3d-video/sliced/psb/theta_psb_1.mp4",
                        link: "stage",
                        linkImage: "cam_icon_stage.svg"
                    }
                ]} />
            </View>
        );
    }
};

AppRegistry.registerComponent('lost_weekend_vr', () => lost_weekend_vr);
