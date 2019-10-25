export default (
    state = {
        goto:0
    },
    action
) => {
    switch (action.type) {
        case 'isRegister':
            return {
                goto:state.goto + 1
            }
        case 'isForget':
            return {
                goto:'isForget'
            }
        default:
            return state
    }
}