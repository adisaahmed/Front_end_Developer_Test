import React from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Starships extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      starship: [],
      search: ""
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/')
    .then( res => {
      console.log(res);
      this.setState({ starship: res.data.results });
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredStarships = this.state.starship.filter(
      (starship) => {
        return starship.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
            placeholder="Search For Starship"
          />
        </div>

        <h2>
          List Of Starships
        </h2>

        {filteredStarships.map(starship => {
          return (
            <Accordion className="Accordion_Accordion">
              <Card className="Card_Card">
                <Card.Header className="Card_Header">
                  <Container className="Card_Header_container">
                    <Row key={starship.url}>
                      <Col>
                        <b>Name:</b>&nbsp;&nbsp;
                        {starship.name}
                      </Col>
                      <Col>
                        <b>Model:</b>&nbsp;&nbsp;
                        {starship.model}
                      </Col>
                      <Col>
                        <b>Cargo Capacity:</b>&nbsp;&nbsp; 
                        {starship.cargo_capacity}
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

export default Starships
