import React from 'react';

const useOnChange = (value: string): [string, React.ChangeEventHandler<HTMLInputElement>, any] => {
    const [state, setState] = React.useState(value);
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setState(e.target.value);
    }
    const reset = () => {
        setState("")
    }
    return [state, onChangeHandler, reset];
};
export default useOnChange;