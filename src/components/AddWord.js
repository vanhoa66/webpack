import React from "react";
import { connect } from "react-redux";

class AddWord extends React.Component {

    addWord(e) {
        e.preventDefault();
       
        this.props.dispatch({
            type: "ADD_WORD",
            en: this.refs.en.value,
            vn: this.refs.vn.value
        }); 
      //  console.log(this.refs.en.value); 
        this.props.dispatch({
            type: "ADD"
        });
     
        // this.refs.en.value = '';
        // this.refs.vn.value = '';
    };
    toggle() {
        this.props.dispatch({
            type: "ADD"
        })
    }
    render() {
        if (this.props.isAdding) return (
            <form onSubmit={this.addWord.bind(this)}>
                <input type="text" ref="en" />
                <br></br>
                <input type="text" ref="vn" />
                <br></br>
                <button>Add</button>
            </form>
        )
        return (<button onClick={this.toggle.bind(this)}>+</button>)
    }
}

module.exports = connect(function (state) {
    return { isAdding: state.isAdding }
})(AddWord);