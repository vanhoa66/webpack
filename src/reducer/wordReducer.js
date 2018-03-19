
const arrWord = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false }
];

const wordReducer = (state = arrWord, action) => {
    if (action.type === "MEMORIZED")
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, memorized: !e.memorized };
        });
    if (action.type === "SHOW")
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, isShow: !e.isShow };
        });
    if (action.type === "ADD_WORD")
        return [
        {
            id: state.length + 1,
            en: action.en,
            vn: action.vn,
            memorized: false,
            isShow: false
        }].concat(state);
    return state;
}

module.exports = wordReducer;
