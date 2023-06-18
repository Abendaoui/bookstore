import {useState,useEffect} from "react";
import SingleUnit from "./SingleUnit"
import axiosClient from "../../../server/axiosClient";
import Load from "../../../components/Load";
import { useTranslation } from "react-i18next";
const MainLatest = () => {
    const { t } = useTranslation();
    const [Loading, setLoad] = useState(false);
    const [books, setBooks] = useState([]);
    const getNewBooks = async () => {
        setLoad(true);
        await axiosClient
            .get("/mainlatestbooks")
            .then(({ data }) => {
                if (data) {
                    setBooks(data.data);
                    setLoad(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoad(false);
            });
    };
    useEffect(() => {
        getNewBooks();
    }, []);
    return (
        <section className="mx-auto mb-10 max-w-7xl p-5">
            <div className="px-10 flex flex-col lg:flex-row justify-between">
                <div>
                    <h1 className="text-gray-700 text-2xl text-bold capitalize">
                        {t("Latest Books.1")}
                    </h1>
                    <p className="text-[18px] capitalize">
                        {t("Discoverd New Books.1")}
                    </p>
                </div>
            </div>
            <div className="flex flex-row overflow-x-auto scroll-container p-3">
                {Loading ? (
                    <Load />
                ) : (
                    books.map((book) => {
                        return <SingleUnit key={book.id} {...book} />;
                    })
                )}
            </div>
        </section>
    );
};

export default MainLatest;
