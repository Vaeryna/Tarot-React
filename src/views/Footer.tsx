import '../scss/footer.scss'


function Footer() {
    return (
        <footer className="styleFooter">
            <div className="container-fluid mb-3">
                <p> Toutes les images et prédictions ont été générées par Intelligence Artificielle (Gencraft et
                    ChatGPT)</p>
                <p> Hebergeur : Vercel, San Francisco (États-Unis) </p>
            </div>
            <div className="container-fluid mb-3">
                <p> Ce site ne collecte ni ne stocke aucune données personnelle. Aucun coookie n'est déposé </p>
                <p> Les tirages sont purement ludiques, ils n'ont aucune valeur prédictive ou juridique </p>
            </div>

            <div className="container-fluid mb-3">
                <a href="https://www.frekinor.com" >
                    <p>
                    <img src="/assets/Frekinor.png" className="styleImg" alt="Frekinor logo"/> Frekinor
                    </p>
                </a>
                <p> ©2025 Arcanomancie. Tous droits réservés</p>
            </div>


        </footer>
    )
}

export default Footer;

