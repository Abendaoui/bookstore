import React from "react";
import {
    BooksContainer,
    Hero,
    NewBooks,
    ToDiscoverd,
    ArabicBooks,
    KidsBooks,
    AdulsBooks,
    ByAuthor,
    NewsLetter,
    Footer,
} from "../../components";
const Home = () => {
    return (
        <main>
            <Hero />
            <BooksContainer />
            <NewBooks />
            <ToDiscoverd />
            <ArabicBooks />
            <KidsBooks />
            <AdulsBooks />
            <ByAuthor />
            <NewsLetter />
        </main>
    );
};

export default Home;
