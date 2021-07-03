import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './HealthBar.scss'
import { Sigmund as sigmundInfo } from '../constants/Characters';
import {
    selectHealth,
    selectDelayedDamage
} from "../selectors/health.selector";
import { gainHealth, takeDamage, loseDirectHealth, resetDelayDamage} from "../reducers/health.reducer";

class HealthBar extends React.Component {
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
                HP: {this.props.health}/{sigmundInfo.maxHealth}
                <progress id="healthBar" value={this.props.health} max={sigmundInfo.maxHealth}></progress>
                <br/>
                Delayed Damage: {this.props.delayedDamage}/{sigmundInfo.delayedDamagePool}
                <progress id="delayedDamageBar" value={this.props.delayedDamage} max={sigmundInfo.delayedDamagePool}></progress>
                <form onSubmit={this.handleSubmit}>
                    <input className="healthBarInput" type="number" value={this.state.healthChange} onChange={this.handleHealthChange} />
                    <button className="healthBarButton gainHealth" onClick={() => this.props.gainHealth(this.state.healthChange)}> + </button>
                    <button className="healthBarButton takeDamage" onClick={() => this.props.takeDamage(this.state.healthChange)}> - </button>
                    <button className="loseDirectHealth takeDamage" onClick={() => this.props.loseDirectHealth(this.state.healthChange)}>
                        Lose Direct Health
                    </button>
                    <button className="applyDelayedDamage takeDamage" onClick={() => this.props.applyDelayedHealth()}>
                        Apply Delayed Damage
                    </button>
                </form>

            </div>
        );
    }
}

HealthBar.defaultProps = {
    health: 0,
};

HealthBar.propTypes = {
    health: ptypes.number
};

export const mapStateToProps = state => ({
    health: selectHealth(state),
    delayedDamage: selectDelayedDamage(state)
});

export const mapDispatchToProps = dispatch => ({
    gainHealth: bindActionCreators(gainHealth, dispatch),
    takeDamage: bindActionCreators(takeDamage, dispatch),
    loseDirectHealth: bindActionCreators(loseDirectHealth, dispatch),
    applyDelayedHealth: bindActionCreators(resetDelayDamage, dispatch)
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(HealthBar)