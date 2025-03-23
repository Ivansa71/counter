type CounterPropsType = {
    counter: number,
}


export const Counter = (props: CounterPropsType) => {
    return (
        <div className={'containerCounter'}>
            <span className={props.counter === 5 ? 'counter': ''} >{props.counter}</span>
        </div>
    );
};

