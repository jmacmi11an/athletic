import { useContext } from "react";
import ArticlesContext from "../context/articles";

function useArticlesContext() {
    return useContext(ArticlesContext);
}

export default useArticlesContext; 