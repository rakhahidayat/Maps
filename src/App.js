// import logo from './logo.svg';
import './App.css';
import { Map, Marker, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import camera from './icon/cam.png';
import video from './icon/video.png'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      triangleCoords: [],
      triangleCoordsTemp: [],
      addMark: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    
    if(this.state.markers.length > 4){
      this.setState({ addMark: false })
    }
    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "Location",
            name: "Location",
            position: { lat, lng }
          }
        ],
        triangleCoordsTemp: {
          lat, lng
        }
      };
    });
    let tempLat = 0;
    let tempLeng = 0;
    for( let i = 0; i < 1; i++){
      tempLat = this.state.triangleCoordsTemp.lat
      tempLeng = this.state.triangleCoordsTemp.lng
    }
    for( let i = 0; i < 1; i++){
      this.state.triangleCoords.push({ lat: tempLat, lng: tempLeng },)
    }
  }

  clearMark(){
    this.setState({
      markers: [], triangleCoords: []
    })
  }

  addMark(){
    if(this.state.markers.length > 4){
      this.setState({
        addMark: false
      })
    } else {
      this.setState({
        addMark: true
      })
    }
  }

  endMark() {
    this.setState({
      addMark: false
    })
  }

  viewPolygon() {
    if(this.state.triangleCoords.length >= 5){
      return(
          <Polygon
            paths={this.state.triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35} />
      )
    }
  }

  showList(){
    if(this.state.triangleCoords.length === 0){
      return(null)
    } else if(this.state.triangleCoords.length === 1){
      return(
        <div className="d-flex2 flex-column">
          <div className="p-2 col-example text-right">1. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
        </div>
      )
    } else if (this.state.triangleCoords.length === 2){
      return(
        <div className="d-flex2 flex-column">
          <div className="p-2 col-example text-right">1. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">2. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
        </div>
      )
    } else if (this.state.triangleCoords.length === 3){
      return(
        <div className="d-flex2 flex-column">
          <div className="p-2 col-example text-right">1. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">2. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">3. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
        </div>
      )
    } else if (this.state.triangleCoords.length === 4){
      return(
        <div className="d-flex2 flex-column">
          <div className="p-2 col-example text-right">1. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">2. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">3. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">4. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
        </div>
      )
    } else {
      return(
        <div className="d-flex2 flex-column">
          <div className="p-2 col-example text-right">1. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">2. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">3. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">4. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
          <div className="p-2 col-example text-right">5. Map Location<img src={video} style={{width: 20, height: 20, marginRight: 10, marginLeft: 130}} /><img src={camera} width="20" height="20" /></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App flex-column">
        <Col md="12">
        <Row className="mb-3">
          <div className="d-flex flex-column">
            <div className="p-2 col-example text-right">Mission</div>
            <div onClick={() => { this.addMark() }} className="p-2 col-example text-left">Add</div>
            <div className="p-2 col-example text-left">Start</div>
            <div onClick={() => { this.endMark() }} className="p-2 col-example text-left">End</div>
            <div onClick={() => { this.clearMark() }} className="p-2 text-right">Clear</div>
          </div>
          
          </Row>
          <Row className="mt-1">
            <div className="Maps">
              <Map google={this.props.google}
                  initialCenter={{lat: -6.2710423,lng: 106.7962754}}
                style={{width: '70%', height: '100%', position: 'relative', marginTop: '-22%'}}
                className={'map'}
                zoom={16}
                onClick={ this.state.addMark === true ? this.onClick : null}>
                {this.viewPolygon()}
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div className="TitleWindow">
                    <h4>Ambulance</h4>
                    <img src={video} style={{width: 20, height: 20, marginRight: 10}} /><img src={camera} width="20" height="20" />
                    </div>
                </InfoWindow>
                
                {this.state.markers.map((marker, index) => (
                  <Marker
                    onClick={this.onMarkerClick}
                    key={index}
                    title={marker.title}
                    name={marker.name}
                    position={marker.position}
                  />
                ))}
              </Map>
            </div>
          </Row>
        </Col>
        {this.showList()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI')
})(App)
