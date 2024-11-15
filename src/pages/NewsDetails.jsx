import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = (data.data[0]);
    console.log(news);
    return (
        <div>

            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-10">
                <section className="col-span-8">
                    <h3 className="font-semibold mb-5">Latest News Details</h3>
                    <div className="card card-compact bg-base-100  shadow-xl">
                        <figure>
                            <img className="w-full"
                                src={news?.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-3xl text-gray-600">{news?.title}</h2>
                            <p className="font-medium text-gray-500 my-2">{news?.details}</p>
                            <div className="card-actions justify-start">
                                <Link to={`/category/${news?.category_id}`} className="btn bg-red-600 text-white font-medium"> <FaArrowLeft size={24} />All News In This Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;