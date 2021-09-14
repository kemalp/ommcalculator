import React, {Component} from 'react';

class Pad extends Component {
    render(){
        return(
            <div className="Pad">
                {this.props.children}
            </div>
        );
    }
}

export default Pad;