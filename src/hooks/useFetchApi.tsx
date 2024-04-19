import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../action/action";

export const useFetchApi = () => {
  const { data, loading, error } = useSelector((state:any) => state.apiShow);
  const { currentPage, perPage } = useSelector((state:any) => state.pagination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return { data, loading, error, currentPage, perPage };
};
