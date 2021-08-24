import React,{useEffect, useState} from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

import NewsCards from "./components/NewsCards/NewsCards"
import useStyles from './styles.js'

const alanKey = 'bd6b7f79557736ec573ceda1e25300f72e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    const classes = useStyles()

    const [newsArticles,setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle]  = useState(-1)

    useEffect(() => {

        alanBtn({
            key:alanKey,
            onCommand:({command,articles}) =>{
                if(command === 'newHeadlines') {
                    setNewsArticles(articles)
                    setActiveArticle(-1)
                }else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle +1)
                }
            }

        })
        
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/static/alan-logo-medium.79f960a7.svg" className={classes.alanLogo} alt="logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App
