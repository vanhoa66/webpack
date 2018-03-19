
const isAddingReducer = (state = false, action) => {
    if (action.type === "ADD") return !state;
    return state;
}

module.exports = isAddingReducer;