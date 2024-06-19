import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CamperList } from "./camper/CamperList";
import { CamperCreate } from "./camper/CamperCreate";
import { CamperEdit } from "./camper/CamperEdit";
import { CamperShow } from "./camper/CamperShow";
import { OwnerList } from "./owner/OwnerList";
import { OwnerCreate } from "./owner/OwnerCreate";
import { OwnerEdit } from "./owner/OwnerEdit";
import { OwnerShow } from "./owner/OwnerShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { CampingSpaceList } from "./campingSpace/CampingSpaceList";
import { CampingSpaceCreate } from "./campingSpace/CampingSpaceCreate";
import { CampingSpaceEdit } from "./campingSpace/CampingSpaceEdit";
import { CampingSpaceShow } from "./campingSpace/CampingSpaceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CampEase"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Camper"
          list={CamperList}
          edit={CamperEdit}
          create={CamperCreate}
          show={CamperShow}
        />
        <Resource
          name="Owner"
          list={OwnerList}
          edit={OwnerEdit}
          create={OwnerCreate}
          show={OwnerShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="CampingSpace"
          list={CampingSpaceList}
          edit={CampingSpaceEdit}
          create={CampingSpaceCreate}
          show={CampingSpaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
