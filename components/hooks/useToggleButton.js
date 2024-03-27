import React, { useMemo, useState } from "react";
import SButton from "../SButton";
import { Text } from "react-native";


export function useToggleButton({ defaultValue, buttonTitle}) {

    const [status, setStatus] = useState(defaultValue);

    const button = useMemo(() => {
        return (
        <SButton onPress={() => setStatus(!status)}>
            {/* {buttonTitle}: {`${status}`} */}
            <button><Text>Hello</Text></button>
        </SButton>
        );
    }, [status, buttonTitle]);

    return {
        status,
        button,
    };
}