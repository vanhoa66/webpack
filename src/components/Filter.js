import React from "react";
import { connect } from "react-redux";

class Filter extends React.Component {

    setFilter(actionType) {
       this.props.dispatch({ type: actionType });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setFilter("FILTER_SHOW_ALL")} >Show All</button>
                <button onClick={() => this.setFilter("FILTER_MEMORIZED")} >Memmorized</button>
                <button onClick={() => this.setFilter("FILTER_NEED_PRACTICE")} >Need practice</button>
            </div>
        )
    }
}

module.exports = connect(function (state) {
    return { filter: state.filter }
})(Filter);