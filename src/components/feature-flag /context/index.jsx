import {createContext, useEffect, useState} from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});


    const fetchFeatureFlags = async () => {
        setLoading(true);
        try {
            // Original service call
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            // const data = await response.json();
            setEnabledFlags(response);
        } catch (e) {
            console.error(e);
            throw new Error('Failed to fetch feature flags');
        }
        setLoading(false);

    }
    useEffect (() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    )

}