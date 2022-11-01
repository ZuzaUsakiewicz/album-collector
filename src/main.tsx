import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import AlbumDetails from "./pages/AlbumDetails";
import EditAlbum from "./pages/EditAlbum";
import NewAlbum from "./pages/NewAlbum";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="create" element={<NewAlbum />} />
      <Route path="edit/:id" element={<EditAlbum />} />
      <Route path="details/:id" element={<AlbumDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
