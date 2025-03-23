type ButtonResetPropsType = {
    counter: number
    setCounter: (counter: number) => void
}

export const ButtonReset = (props: ButtonResetPropsType) => {

    const clearCounter = () => {
        return props.setCounter(0)
    }

    const isAddBtnDisabled = () => {
        return props.counter === 0;
    }



    return (
            <button className ={'button'} disabled = {isAddBtnDisabled()} onClick={clearCounter}>reset</button>
    );
};

