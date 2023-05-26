import SoMeButton from "../Button/SoMeButton";

export default function PortfolioItem() {
    return (
        
        <div className="portfolio-item">
            <SoMeButton githubUrl={$customUrl} showLinkedIn={false} />
        </div>
    )
}