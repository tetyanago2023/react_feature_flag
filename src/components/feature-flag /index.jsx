import {useContext} from "react";
import {FeatureFlagContext} from "./context";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import SearchAutocompleteWithApi from "../search-autocomplete-with-api";
import GithubProfileSearch from "../github_profile_search";

const FeatureFlags = () => {
    const { loading, enabledFlags } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode key={"showLightAndDarkMode"}/>,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe key={"showTicTacToeBoard"}/>,
        },
        {
            key: "showSearchAutocompleteWithApi",
            component: <SearchAutocompleteWithApi key={"showSearchAutocompleteWithApi"}/>,
        },
        {
            key: "showGithubProfileSearch",
            component: <GithubProfileSearch key={"showGithubProfileSearch"}/>,
        },
    ];

    const checkEnabledFlags = (getCurrentKey) => {
        return enabledFlags[getCurrentKey];
    }

    if(loading) { return <h1>Loading...</h1> }

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
            )}
        </div>
    );
};

export default FeatureFlags;
