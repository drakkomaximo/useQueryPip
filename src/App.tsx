import { FC } from "react";
import MainTabs from "./containers/MainTabs";
import { MainProvider } from "./providers/MainProvider";

const App: FC = () => {
  return (
    <MainProvider>
      <MainTabs />
    </MainProvider>
  );
}

export default App;
