import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Layout from "./layouts/Layout.tsx";
import Home from "./views/Home.tsx";
import Posts from "./views/Posts/Posts.tsx";
import Post from "./views/Posts/Post.tsx";
import Users from "./views/Users/Users.tsx";
import User from "./views/Users/User.tsx";
import Albums from "./views/Albums/Albums.tsx";
import Album from "./views/Albums/Album.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/albums/:id" element={<Album />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
