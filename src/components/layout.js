import React from "react";
import "./layout.css";
import Header from '../components/header';
import Footer from '../components/footer';
import AlanBtn from '../components/alanbtn';


export default ({ children }) => <div><Header />{children}<Footer /><AlanBtn /></div>