import React from "react";

export const withSuspense = (Component: any) => {

    return (props: any) => {
        return <Component {...props} />

    };
}