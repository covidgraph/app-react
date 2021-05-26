import React, { useState,  lazy, Suspense } from "react";
import {Navigation} from "./components";

// Code Splitting
const PaperPage = lazy(() => import('./pages/PaperPage/PaperPage'));
const GenePage = lazy(() => import('./pages/GenePage/GenePage'));
const PatentPage = lazy(() => import('./pages/PatentPage/PatentPage'));

export const App: React.FunctionComponent = () => {
  return (
    <>
        <Navigation />
    </>
  );
};
