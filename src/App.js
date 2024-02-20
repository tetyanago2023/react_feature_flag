import './App.css';
import FeatureFlagGlobalState from "./components/feature-flag /context";
import FeatureFlags from "./components/feature-flag ";

function App() {
  return (
    <div className="App">
      {/* Feature Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
