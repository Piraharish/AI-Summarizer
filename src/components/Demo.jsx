import { useState, useEffect } from "react";
import { copy, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFileContract } from "@fortawesome/free-solid-svg-icons";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState();

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("article", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col gap-2">
        {/* Search Section */}

        <div className="search">
          <form
            className="relative flex justify-center item-center"
            onSubmit={handleSubmit}
          >
            <FontAwesomeIcon
              icon={faLink}
              className="absolute left-0 my-2 ml-3 w-5"
              style={{ color: "grey", top: "5px" }}
            />
            <input
              type="url"
              placeholder="Paste your URL here"
              value={article.url}
              onChange={(e) =>
                setArticle({
                  ...article,
                  url: e.target.value,
                })
              }
              required
              className="url_input peer border-animation"
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-300 peer-focus:text-gray-600 peer-focus:bg-gray-300"
            >
              <FontAwesomeIcon icon={faFileContract} />
            </button>
          </form>
        </div>

        {/* History Section */}

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*Results Section */}

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-blue-100 text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-400">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-blue-100 text-xl">
                Article&nbsp;
                <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
