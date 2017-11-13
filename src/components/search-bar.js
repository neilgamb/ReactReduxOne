import React, { Component } from 'react';

// { Component } = const Component = React.Component // syntactic sugar

// currently this is a functional or 'presentational' component.
// because we need it to have some awareness (ie, hey, the user has typed something, do this with that input...)
// we need to upgrade it to a class-based on 'container' component

/*
const SearchBar = () => {
    return <input />;
};
*/

class SearchBar extends Component {  // see line 3 comments
    constructor(props) {
        super(props)

        this.state = { term: '' }; // only time you use this syntax to set value of state! otherwise, use setState()
    }
    render() {  // what is run when a component is re-renders
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                Value of input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;

// state: a plain JS object used to RECORD and REACT to user events
// each class-based component has its own state.  whenver its state changes, it 
// automatically re-renders and forces all children to re-render.