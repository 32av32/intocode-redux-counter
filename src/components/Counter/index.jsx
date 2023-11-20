import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {plusAction, minusAction, resetAction} from "../../store/actionCreators/counter";

function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{counter.count}</div>
            <Button name={'+'} action={() => dispatch(plusAction())} />
            <Button name={'-'} action={() => dispatch(minusAction())} />
            <Button name={'reset'} action={() => dispatch(resetAction())} />
        </div>
    )
}

export default Counter