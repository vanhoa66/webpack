import React from "react";
import Filter from "./Filter";
import Word from "./Word";
import AddWord from "./AddWord";
import { connect } from "react-redux";

class Main extends React.Component {

    getArrWord() {
        const { arrWord, filter } = this.props;
        if (filter === "MEMORIZED") return arrWord.filter(e => e.memorized);
        if (filter === "NEED_PRACTICE") return arrWord.filter(e => !e.memorized);
        return arrWord;
    }

    render() {
        return (
            <div>
                <AddWord />
                {this.getArrWord().map((e, i) => <Word key={i} myWord={e} ></Word>)}
                <Filter />
            </div>
        )
    }
}

module.exports = connect(function (state) {
    return { arrWord: state.arrWord, filter: state.filter }
})(Main);