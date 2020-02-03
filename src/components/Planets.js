import React from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Planets extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
      search: ''
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
    .then( res => {
      console.log(res);
      this.setState({ 
        planet: res.data.results,
      });
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredPlanets = this.state.planet.filter(
      (planet) => {
        return planet.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return( 
      <div>
        <div className="input_parent">
          <input 
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            className="Search_form"
            placeholder="Search For Planet"
          />
        </div>

        <h2>
          List Of Planets
        </h2>

        {filteredPlanets.map(planet => {
          return (
            <Accordion className="Accordion_Accordion">
              <Card className="Card_Card">
                <Card.Header className="Card_Header">
                  <Container className="Card_Header_container">
                    <Row key={planet.url}>
                      <Col>
                        <b>Name:</b>&nbsp;&nbsp;
                        {planet.name}
                      </Col>
                      <Col>
                        <b>Temperature:</b>&nbsp;&nbsp;
                        {planet.climate}
                      </Col>
                      <Col>
                        <b>Population:</b>&nbsp;&nbsp; 
                        {planet.population}
                      </Col>
                    </Row>
                  </Container>  
                </Card.Header>
              </Card>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

export default Planets
