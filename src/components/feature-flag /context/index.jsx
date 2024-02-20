import {createContext, useEffect, useState} from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});


    const fetchFeatureFlags = async () => {

        try {
            setLoading(true);
            // Original service call
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            // const data = await response.json();
            setEnabledFlags(response);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
            throw new Error('Failed to fetch feature flags');
        }
    }
    useEffect (() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    )

}