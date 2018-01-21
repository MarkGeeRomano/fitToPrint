import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SubsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        const { availScripts, subscriptions } = this.props;
        availScripts.forEach(s => subscriptions.includes(s) ? this.state[s] = true : this.state[s] = false);
    };

    render() {
        const { availScripts, subscriptions } = this.props;
        
        let clickHandler;        
        const subs = availScripts.map(script => {
            clickHandler = e => this.setState({...this.state, [script] : !this.state[script]});
            return [
                <label htmlFor={script}>{script}</label>,
                <Field 
                    onClick={clickHandler} 
                    key={script} 
                    component="input" 
                    type="checkbox" 
                    checked={this.state[script]} 
                    name={script} />,
                <br />,
            ]
        });


        return [
            <form>
                {subs}
                <button type="submit">Submit</button>
            </form>
        ];

    };
};

// let SubsForm = ({ handleSubmit, availScripts, }) => {
//     const subs = availScripts.map(script =>
//         [
//             <label htmlFor={script}>{script}</label>,
//             <Field key={script} component="input" type="checkbox" name={script} />,
//             <br />,
//         ]
//     );

//     return [
//         <form onSubmit={handleSubmit}>
//             {subs}
//             <button type="submit">Submit</button>
//         </form>
//     ];
// };

SubsForm = reduxForm({
    // a unique name for the form
    form: 'subsform'
})(SubsForm);

export default SubsForm