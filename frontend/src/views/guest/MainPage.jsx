import React from "react";
import {
    MainArabic,
    MainHero,
    MainKids,
    MainLatest,
    MainNav,
    MainRandom,
} from "./include";
import { Footer } from "../../components";
const MainPage = () => {
    return (
        <main>
            <MainNav />
            <MainHero />
            <MainRandom />
            <MainLatest />
            <MainArabic />
            <MainKids />
            <Footer />
        </main>
    );
};

export default MainPage;
