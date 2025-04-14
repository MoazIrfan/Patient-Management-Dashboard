import { createBrowserRouter } from "react-router-dom";
import PatientListPage from "./pages/PatientListPage";
import PatientDetailPage from "./pages/PatientDetailPage";
import AppointmentsPage from "./pages/AppointmentsPage"
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <>
            <SignIn />
          </>
        ),
      },
    ]
  },
  {
    path: "patients",
    children: [
      {
        index: true,
        element: <PatientListPage />,
      },
      {
        path: ":id",
        element: <PatientDetailPage />,
      },
    ]
  },
  {
    path: "appointments",
    children: [
      {
        index: true,
        element: <AppointmentsPage />,
      }
    ]
  }
], {
  future: {
    v7_relativeSplatPath: true
  }
});

export default router;