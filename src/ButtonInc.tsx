type ButtonIncPropsType = {
    counter: number
    setCounter: (counter: number) => void
}

export const ButtonInc = (props: ButtonIncPropsType) => {

    const isAddBtnDisabled = () => {
        return props.counter === 5;
    }

    const nextCounter = () => {
        let newCounter = props.counter
        if(newCounter < 5){
            newCounter = newCounter + 1
        }
        props.setCounter(newCounter);
    }

    return (
            <button className ={'button'} onClick={nextCounter} disabled={isAddBtnDisabled()} >inc</button>
    );
};

