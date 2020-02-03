import React from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class People extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      search: ""
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then( res => {
      console.log(res);
      this.setState({ people: res.data.results });
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredPeople = this.state.people.filter(
      (people) => {
        return people.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
            placeholder="Search For People"
          />
        </div>

        <h2>
          List Of People
        </h2>

        {filteredPeople.map(people => {
          return (
            <Accordion className="Accordion_Accordion">
              <Card className="Card_Card">
                <Card.Header className="Card_Header">
                  <Container className="Card_Header_container">
                    <Row key={people.url}>
                      <Col>
                        <b>Full Name:</b>&nbsp;&nbsp;
                        {people.name}
                      </Col>
                      <Col>
                        <b>Date Of Birth:</b>&nbsp;&nbsp;
                        {people.birth_year}
                      </Col>
                      <Col>
                        <b>Gender:</b>&nbsp;&nbsp; 
                        {people.gender}
                      </Col>
                      <Col>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="Card_Header_container_button_button">
                          Click to see full details
                        </Accordion.Toggle> 
                      </Col>
                    </Row>
                  </Container>  
                </Card.Header>

                <Accordion.Collapse eventKey="0" className="Card_Body">
                  <ul>
                    <li>
                      <b>Url:</b> &nbsp;&nbsp;
                      {people.url}
                    </li>
                    <li>
                      <b>Height:</b> &nbsp;&nbsp;
                      {people.height}
                    </li>
                    <li>
                      <b>Mass:</b> &nbsp;&nbsp;
                      {people.mass}
                    </li>
                    <li>
                      <b>Hair Color:</b> &nbsp;&nbsp;
                      {people.hair_color}
                    </li>
                    <li>
                      <b>Skin Color:</b> &nbsp;&nbsp;
                      {people.skin_color}
                    </li>
                    <li>
                      <b>Eye Color:</b> &nbsp;&nbsp;
                      {people.eye_color}
                    </li>
                    <li>
                      <b>Homeworld:</b> &nbsp;&nbsp;
                      {people.homeworld}
                    </li>
                    <li>
                      <b>First 3 Films:</b> &nbsp;&nbsp;
                      {people.films[0]} <br /> {people.films[1]} <br /> {people.films[2]}
                    </li>
                    <li>
                      <b>Species:</b> &nbsp;&nbsp;
                      {people.species}
                    </li>
                    <li>
                      <b>Vehicles:</b> &nbsp;&nbsp;
                      {people.vehicles}
                    </li>
                    <li>
                      <b>Date Created:</b> &nbsp;&nbsp;
                      {people.created}
                    </li>
                    <li>
                      <b>Date Edited:</b> &nbsp;&nbsp;
                      {people.edited}
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

export default People
