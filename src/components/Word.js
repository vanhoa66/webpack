import React from "react";
import { connect } from "react-redux";

class Word extends React.Component {
    memmorizedWord() {
        // alert(this.props.arrWord[0].en);
        this.props.dispatch({
            type: "MEMORIZED",
            id: this.props.myWord.id
        });
    }
    showWord() {
        this.props.dispatch({
            type: "SHOW",
            id: this.props.myWord.id
        })
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.myWord;
        const btnText = memorized ? "forget" : "memorized";
        const btnShow = isShow ? vn : "-----------";
        const stylecss = memorized ? null : { textDecoration: 'line-through', }
        return (
            <div>
                <p style={stylecss}>{en}</p>
                <p>{btnShow}</p>
                <button onClick={this.showWord.bind(this)}>Show</button>
                <button onClick={this.memmorizedWord.bind(this)}>{btnText}</button>

            </div>
        )
    }
}

module.exports = connect()(Word);