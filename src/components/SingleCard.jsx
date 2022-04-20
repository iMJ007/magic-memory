import './SingleCard.css'
export default function SingleCard({card, handleChoice, flipped, disabled}) {
    const handleClick = () => {
        if(!disabled) {
            handleChoice(card);
        }
    }
  return (
    <div className="card">
        <div className={flipped ? 'flipped' : ''}>
          <img src={card.src} className="front" alt="card front"/>
          <img 
          src="/img/cover.png" 
          alt="card cover" 
          className="back" 
          onClick={handleClick}
          />
        </div>
    </div>
  )
}