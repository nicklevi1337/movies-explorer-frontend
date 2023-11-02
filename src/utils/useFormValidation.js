import React, { useCallback, useState } from 'react';

function useFormValidation () {
    const [value, setValue] = useState('');
    const [isValid, setIsValid ] = useState(false);
    const [isInputValid, setInputValid] = useState(false);
    const [isError, setIsError] = useState('');
    const onChange = useCallback((event, setErrorRequest) => {
        if (event.target.value === '') {
            setInputValid(false);
        }

        setValue(event.target.value);
        setIsValid(event.target.validity.valid);
        setIsError(event.target.validationMessage);

        setErrorRequest(false);
    }, []);

    return { value, isValid, isError, isInputValid, setValue, setIsValid, setInputValid, onChange };
}

export default useFormValidation