import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  const Home = lazy(() => import("./screens/home/Home"));
  const GantCharts = lazy(() => import("./screens/gant-charts"));
  const Currying = lazy(() => import("./screens/tesmp/Currying"));

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route element={<Outlet />}>
              <Route
                index
                element={
                  <Suspense>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="gant-charts"
                element={
                  <Suspense>
                    <GantCharts />
                  </Suspense>
                }
              />
              <Route
                path="currying"
                element={
                  <Suspense>
                    <Currying />
                  </Suspense>
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Route>
        )
      )}
    />
  );
}

export default App;
