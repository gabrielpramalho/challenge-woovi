import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { Parcels } from "./pages/app/parcels";
import { Entrance } from "./pages/app/entrance";
import { OtherParcel } from "./pages/app/other-parcel";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Parcels /> },
      { path: '/entrance', element: <Entrance /> },
      { path: '/other-parcel', element: <OtherParcel /> },
    ],
  }
])