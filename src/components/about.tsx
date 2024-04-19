import { useDispatch } from "react-redux";
import { decreasePage, incrementPage, pagination } from "../action/action";
// import "./_about.scss";
import { useFetchApi } from "../hooks/useFetchApi";

export const About = () => {
  const dispatch = useDispatch();

  // yo tala ko code haru (custom hook = useFetchApi) ma haleko xa

  // const { data, loading, error } = useSelector((state) => state.apiShow);
  // const { currentPage, perPage } = useSelector((state) => state.pagination);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  const { data, loading, currentPage, perPage } = useFetchApi();

  if (loading) {
    return <h1>Loading......</h1>;
  }

  const handlePrevious = () => {
    dispatch(decreasePage());
  };
  const handleNext = () => {
    dispatch(incrementPage());
  };

  const startIndex = (currentPage - 1) * perPage;
  const lastIndex = startIndex + perPage;
  const displayData = data.slice(startIndex, lastIndex);

  const totalPage = data.length / perPage;

  return (
    <>
      <div className="main-container">
        <div className="pagination-container">
          {/* <span>Current Page:{currentPage} </span> */}
          <button
            className={currentPage === 1 ? "disabled" : "previous-btn"}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array(totalPage)
            .fill(0)
            .map((a, index) => (
              <button
                className="index-btn"
                style={{
                  background: currentPage === index + 1 ? "cornflowerblue" : "",
                  color: currentPage === index + 1 ? "white" : "",
                }}
                onClick={() =>
                  dispatch(
                    pagination({ currentPage: index + 1, perPage: perPage })
                  )
                }
              >
                {index + 1}
              </button>
            ))}

          <button
            className={totalPage === currentPage ? "disabled" : "next-btn"}
            onClick={handleNext}
            disabled={totalPage === currentPage}
          >
            &gt;
          </button>
        </div>

        <div className="list-container">
          {displayData.map((pro) => {
            return (
              <div className="content-container">
                <p>id{pro.id}</p>
                <p>title{pro.title}</p>
                <p>body{pro.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
