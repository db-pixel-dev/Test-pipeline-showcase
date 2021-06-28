import { createGlobalStyle } from "styled-components";

export const ThemeColour = {
    default: "#000000",
    black: "#000000",
    white: "#ffffff",
};

const GlobalStyles = createGlobalStyle(() => {
    const windowSizes = {
        width: "100%",
        height: "100%",
    };

    return {
        "*": {
            boxSizing: "border-box",
            margin: "0",
            padding: "0",

            "&:focus": {
                outline: "none",
            },
        },

        // Why do we use percentage here?
        // The default fontsize of a browser is 16px, if we want to use rem for the all children element
        // to make the app maintainable we set the root font size as 10px. 10/16 = 62.5%
        // This respects users' configured preference for font size in their browser while also sizing our app
        // consistently and clearly.
        html: {
            ...windowSizes,
            fontSize: "62.5%",
        },

        body: {
            ...windowSizes,
        },

        "#root": {
            ...windowSizes,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& > *": {
                backgroundColor: ThemeColour.white,
            },
        },

        img: {
            width: "100%",
            userDrag: "none"
        },
    }
});

export default GlobalStyles;
