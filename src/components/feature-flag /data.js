const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showGithubProfileSearch: true,
    showSearchAutocompleteWithApi: false
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error occurred! Please try again");
    });
};

export default featureFlagsDataServiceCall;