const defaultState = {
    inputValue: '123',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}
export default (state = defaultState ,action)=> {
    console.log(state,action);
    return state;
}