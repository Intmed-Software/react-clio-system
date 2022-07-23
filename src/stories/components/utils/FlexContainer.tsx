import React, { PropsWithChildren } from 'react';

export function FlexContainer(props: PropsWithChildren<any>) {
    return (
        <div>
            {props.children}
        </div>
    );
}