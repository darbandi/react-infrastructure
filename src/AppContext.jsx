import React, { useState } from "react"

const AppContext = React.createContext();

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;

export const withAppContext = (WrappedComponent) => {
    return (props) => (
        <AppContextConsumer>
            {contextProps => {
                const { state, methods, ...otherProps } = props;
                return (
                    <WrappedComponent
                        AppContext={{
                            ...contextProps.state,
                            ...state,
                            ...contextProps.methods,
                            ...methods
                        }}
                        {...otherProps}
                    />
                )
            }}
        </AppContextConsumer>
    )
}

export const initializer = () => {
    const [title, setTitle] = useState("ali")
    const temp = {
        methods: {
            setTitle: (title) => {
                setTitle(title)
            }
        },
        state: {
            title: title
        }
    }
    return (temp)
}
