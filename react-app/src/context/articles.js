import React, { createContext, useState  } from "react";

const ArticlesContext = createContext();

function Provider({ children }) {
    const [articleIdArray, setArticleIdArray] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedLeagues, setSelectedLeagues] = useState([])
    const [page, setPage] = useState(0)

    const increasePage = () => setPage(page + 1)
    const decreasePage = () => setPage(page -1)
    const resetPage = () => setPage(0)
    const updateArticleIdArray = (idArray) => setArticleIdArray(idArray)

    const valueToShare = {
        articleIdArray,
        updateArticleIdArray,
        selectedTeams,
        selectedLeagues,
        setSelectedTeams,
        setSelectedLeagues,
        page,
        increasePage,
        decreasePage,
        resetPage
    };



    return <ArticlesContext.Provider value={valueToShare}>
        {children}
    </ArticlesContext.Provider>
}

export { Provider };
export default ArticlesContext;