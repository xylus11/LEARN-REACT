import React  from "react";
import Reactdom from "react-dom/client"
import {Chat} from "./init/App";
// import { createButton } from "./App.js";
const root = Reactdom.createRoot(document.getElementById('root'));


root.render(<Chat/>);


