import {DrawResultProps} from "../Data/DrawResultProps";
import {useLocation, useNavigate} from "react-router-dom";


export function DrawResult({drawnCards, isFlipped}: DrawResultProps) {
    const navigate = useNavigate()
    const location = useLocation();
    let {tone, username, draw} = location.state

    function resetFirstname() {
        navigate("/draws",
            {
                replace: true, state: {username, tone, draw: "firstname"},
            })
        window.location.reload()
    }

    function reset3cards() {
        navigate("/draws",
            {
                replace: true, state: {username, tone, draw: "3cards"},
            })
        window.location.reload()
    }

    return (
        <div className="draw-result text-center">
            <h1> Voici votre tirage ...</h1>
            {drawnCards &&
                (
                    <div className="card-group" role="group" aria-label="cards">
                        <div className="cards-images">
                            {
                                isFlipped.map((id) => {
                                    const card = drawnCards[id]

                                    return card ?
                                        (<div key={id} className="card">
                                            <img src={`/assets/cards-${tone}/${card.id}.png`}
                                                 className="card-img"
                                                 alt={`selectedCard ${card.name}`} id={`${card.id}`}/>
                                        </div>)
                                        : null
                                })
                            }
                        </div>
                        <div>
                            {
                                isFlipped.map((id) => {
                                    const card = drawnCards[id]

                                    return card ?
                                        (<div key={`interpretation-${id}`}>
                                            <p className="interpretation text-center "> {card.interpretation}</p>
                                        </div>)
                                        : null
                                })
                            }</div>
                        <div/>

                    </div>

                )}

            <div className="retryButton">
                <button className="btn btn-dark" onClick={() => resetFirstname()}> Nouveau tirage prénom</button>
                <button className="btn btn-dark" onClick={() => reset3cards()}> Nouveau tirage trois cartes</button>
            </div>

            <div>
            </div>

        </div>

    )
}


