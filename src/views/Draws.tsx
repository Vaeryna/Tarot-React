import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {shuffle} from "../methods/shuffle";
import '../scss/draw.scss';
import getCard from "../methods/get-card"
import {TarotCard} from "../Data/TarotCard";
import {DrawResult} from "./draw-result";


function Draws() {
    const location = useLocation();
    const {tone, username, draw} = location.state

    const [, setCard] = useState<TarotCard | null>(null);
    const [shuffleIDS, setShuffleIDS] = useState<number[]>([])
    const [cardImg, setCardImg] = useState<Record<number, string>>({})
    const backCard = "/assets/back-4.jpg"
    const [isFlipped, setIsFlipped] = useState<Array<number>>([])
    const letters: Array<string> = Array.from(username)
    const [selectedCards, setSelectedCards] = useState<Record<number, TarotCard>>({})
    const [lastCard, setLastCard] = useState<TarotCard>()


    useEffect(() => {
        setShuffleIDS(shuffle())
    }, [])

    function flip(cardID: number, card: TarotCard) {
        if (draw === "firstname" && isFlipped.length < letters.length && !isFlipped.includes(cardID)) {
            setIsFlipped([...isFlipped, cardID])
            setSelectedCards(prev => ({...prev, [cardID]: card}))
            setLastCard(card)
        }
        if (draw === "3cards" && isFlipped.length < 3 && !isFlipped.includes(cardID)) {
            setIsFlipped([...isFlipped, cardID])
            setSelectedCards(prev => ({...prev, [cardID]: card}))
            setLastCard(card)
        }
        window.scrollTo(0, 20)
    }

    function Cards() {
        return (<>
            <h1 id="title" className="text-md-center"> Bien, {username}, tirez vos cartes et laissez l'Arcanomancie vous
                révéler votre avenir...</h1>

            {selectedCards && lastCard &&
                (<div className="card text-center" id="last-card" role="group" aria-label="cards">
                    <img src={`/assets/cards-${tone}/${lastCard.id}.png`} className="card-img"
                         alt={`selectedCard ${lastCard.name}`} id={`${lastCard.id}`}/>
                    <div className="card-body">
                        <h5 className="card-title">{lastCard.name}</h5>
                        {lastCard.color &&
                            (<h6> {lastCard.element} - {lastCard.color}</h6>)
                        }
                        <p className="card-text"> {lastCard.interpretation}</p>
                    </div>
                </div>)}
            <br/>

            <div className="btn-group" role="group" aria-label="cards">
                {shuffleIDS.map((cardID, index) =>
                    (
                        <button key={index} onClick={async () => {
                            const card: any = await getCard(tone, cardID)
                            flip(cardID, card)

                            if (card) {
                                setCard(card)
                                setCardImg(
                                    prev => ({
                                        ...prev, [cardID]: `/assets/cards-${tone}/${cardID}.png`
                                    })
                                );
                            }
                        }
                        }>
                            {isFlipped.includes(cardID) ? (<img src={cardImg[cardID]} alt={`image_${cardImg[cardID]}`}/>) :
                                <img className="backcard" src={backCard} alt="dos"/>
                            }
                        </button>
                    )
                )}
            </div>
        </>)
    }


    return (<>
        {((draw === "firstname" && isFlipped.length === letters.length) || (draw === "3cards" && isFlipped.length === 3)) && (

            <DrawResult drawnCards={selectedCards} tone={tone} isFlipped={isFlipped} draw={draw} username={username} ></DrawResult>
        )}

        {((draw === "firstname" && isFlipped.length < letters.length) || (draw === "3cards" && isFlipped.length !== 3)) &&
            <Cards></Cards>
        }
    </>)
}

export default Draws;
