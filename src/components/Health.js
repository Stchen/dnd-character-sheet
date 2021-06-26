import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    selectHealth
} from "../selectors/health.selector";
import { gainHealth, loseHealth, loseDirectHealth} from "../reducers/health.reducer";

class Health extends React.Component {
    constructor(props){
        super(props);
        this.state = { healthChange: 0};
        this.handleHealthChange = this.handleHealthChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHealthChange(event) {
        this.setState({healthChange: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render(){
        return(
            <div className="health">
                HP: {this.props.health}
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.healthChange} onChange={this.handleHealthChange} />
                    <button className="gainHealth" onClick={() => this.props.gainHealth(this.state.healthChange)}> Gain Health </button>
                    <button className="loseHealth" onClick={() => this.props.loseHealth(this.state.healthChange)}>
                        Lose Health
                    </button>
                    <button className="loseDirectHealth" onClick={() => this.props.loseDirectHealth(this.state.healthChange)}>
                        Lose Direct Health
                    </button>
                </form>

            </div>
        );
    }
}

Health.defaultProps = {
    health: 0,
};

Health.propTypes = {
    health: ptypes.number
};

export const mapStateToProps = state => ({
    health: selectHealth(state),
});

export const mapDispatchToProps = dispatch => ({
    gainHealth: bindActionCreators(gainHealth, dispatch),
    loseHealth: bindActionCreators(loseHealth, dispatch),
    loseDirectHealth: bindActionCreators(loseDirectHealth, dispatch)
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Health)