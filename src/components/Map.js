import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                zoom={14}
                style={{ width: "100vw", height: '100vh' }}
            >


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBgJLw7qB1QT2-dc6ka5a3Tl4o2mIumOOc")
})(MapContainer)