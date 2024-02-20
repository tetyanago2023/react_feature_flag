import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import {useContext} from "react";
import {FeatureFlagContext} from "./context";

const FeatureFlags = () => {
    const {} = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        }
    ]


    return (
        <h1>Feature Flags</h1>
    );
};

export default FeatureFlags;