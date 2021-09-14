import React, {Component} from 'react';

class View extends Component {
    render(){
        const string = this.props.data.join('')
        return(
            <div className="View">
                {string}
            </div>
        );
    }
}

export default View;