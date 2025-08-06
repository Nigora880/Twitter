import Notifications from "./Notification";
import Messages from "./Messages";
import Bookmarks from "./Bookmarks";
import Lists from "./Lists";
import Profile from "./Profile";
import More from "./More";
import { lazy } from "react";

const Login = lazy(() => new Promise((resolve) =>{
    return setTimeout(() => resolve(import("../Auth/Login")),1500)
}))

const Home = lazy(() => new Promise((resolve) =>{
    return setTimeout(() => resolve(import("./Home")),1500)
}))

const Explore = lazy(() => new Promise((resolve) =>{
    return setTimeout(() => resolve(import("./Explore")),1500)
}))

export {Login, Home, Explore, Notifications, Messages, Bookmarks, Lists, Profile, More}