import React from 'react'
import "./StoryReel.css"
import Story from "./Story"
function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/DBED/production/_114110365_lionel_messi_getty.jpg"
                profileSrc="https://tmssl.akamaized.net//images/foto/newsansicht/whats-my-value-game-english-1587383618-36719.jpg"
                title="stephen Thomas"
            />
            <Story
                profileSrc="https://pbs.twimg.com/media/EQlWMRyXUAI72PU.jpg"
                image="https://tmssl.akamaized.net/images/foto/newsansicht/edicion-serie-a-whats-my-value-1590579733-39689.jpg"
                title="Aubameyang"
            />
            <Story
                profileSrc="https://i2-prod.mirror.co.uk/incoming/article22147628.ece/ALTERNATES/s1200/0_Chelsea-in-talks-with-Leipzig-forward-Timo-Werner-Germany-18-Jan-2020.jpg"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThkIs36SO_rxpTGDNFyMtiEDlnK_pXk-H2GcQsnypFGQYLrN1p0QdOUAgO7wgIffDlGOOn68zF0JjimIbH8G65rtES_67dVQ3xHQ&usqp=CAU&ec=45699844"
                title="Ronaldo"
            />
            <Story
                profileSrc="https://the4thofficial.net/wp-content/uploads/2020/06/arsenal-fc-v-everton-fc-premier-league-1024x670.jpg"
                image="https://tmssl.akamaized.net/images/foto/big/whats-my-value-klose-ballack-spotlight-1592814756-41939.jpg"
                title="Fabrizio"
            />
             <Story
                profileSrc="https://the4thofficial.net/wp-content/uploads/2020/06/arsenal-fc-v-everton-fc-premier-league-1024x670.jpg"
                image="https://tmssl.akamaized.net/images/foto/big/whats-my-value-klose-ballack-spotlight-1592814756-41939.jpg"
                title="Florenzi"
            />
        </div>
    )
}

export default StoryReel
