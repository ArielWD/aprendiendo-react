import { useState } from "react";
export function TwitterFollowCard({userName , children}) {
    const [isFollowing, setIsFollowing] = useState(false);


    const srcImg = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'is-following' : ''

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            src = {srcImg}
            alt="Avatar"
            className="tw-followCard-avatar"    
            />
            <div>
                <strong>{children}</strong>
                <span>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>
   </article>
    )
}