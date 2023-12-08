import './header.css'
export default function Header() {
    return (
        <section className="header-container" >
            <h1 className="title-container"> <img className="pokeball" src="public/Images/images_figma/pokeball.svg" alt="" /> Pokemon</h1>
            <div className="pokemon-search">
            <input className='pokemon-search' type="search" />
            <img src="public/Images/images_figma/sort.svg" alt="" />
            </div>
        </section>
    )
}