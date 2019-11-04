import React from 'react'
import { Form, Input, Button } from 'react-bootstrap'
import './styles.scss'

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    

    render(){
        return (
            <div>
                <Form className="contancs">
                    <h1>Send me an E-mail</h1>
                    <div className="email">
                    <textarea
                        id="text-email"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Write here"
                        required
                        value={this.state.feedback}
                        style={{width: '100%', height: '150px'}}
                    />
                    </div>
                    <Button variant="primary" size="lg" type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit}>Send</Button>
                </Form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
      }
    
      handleSubmit() {
      }
}

