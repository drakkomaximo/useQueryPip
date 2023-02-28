import { FC, useState } from "react";
import { AxiosInstance } from "../../config/axios.config";
import { useQueryPip } from "../../hooks/useQueryPip";

type Bank = {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
};

export const FooComponent: FC = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  return (
    <>
      <button onClick={() => setActiveComponent(1)}>ChangeComponent 1</button>
      <button onClick={() => setActiveComponent(2)}>ChangeComponent 2</button>
      <button onClick={() => setActiveComponent(3)}>ChangeComponent 3</button>
      {activeComponent === 1 && <FreeComponent />}
      {activeComponent === 2 && <TestComponent />}
      {activeComponent === 3 && <BarComponent />}
    </>
  );
};
export const FreeComponent: FC = () => {
  const { data, status } = useQueryPip("component1", () =>
    AxiosInstance.get<Bank>("https://random-data-api.com/api/v2/banks")
  );
  if (!status) {
    return <>is loading</>;
  }
  if (!data) {
    return <>No data</>;
  }
  return <>{data.data.id}</>;
};
export const TestComponent: FC = () => {
  const { data, status } = useQueryPip("component2", () =>
    AxiosInstance.get<Bank>("https://random-data-api.com/api/v2/banks")
  );
  if (!status) {
    return <>is loading</>;
  }
  if (!data) {
    return <>No data</>;
  }
  return <>{data.data.id}</>;
};

export const BarComponent: FC = () => {
  const { data, status } = useQueryPip("component1", () =>
    AxiosInstance.get<Bank>("https://random-data-api.com/api/v2/banks")
  );
  if (!status) {
    return <>is loading</>;
  }
  if (!data) {
    return <>No data</>;
  }
  return <>{data.data.id}</>;
};

export default FooComponent