import React from 'react';

export default function PublicationAndReactions(props) {

    const [nameLikeButton, setNameLikeButton] = React.useState('heart-outline');
    const [classLikeButton, setClassLikeButton] = React.useState('like-animation');


    function ChangeStateLikeButton(location) {

        if(location === 'publication') {
            setNameLikeButton('heart-sharp');
            setClassLikeButton('like-clicked like-animation');
        } else {
            if(nameLikeButton === 'heart-outline') {
                setNameLikeButton('heart-sharp');
                setClassLikeButton('like-clicked like-animation');
            }
    
            if(nameLikeButton === 'heart-sharp') {
                setNameLikeButton('heart-outline');
                setClassLikeButton('like-animation');
            }
        }
    }

    return (
        <>
            { props.type === "post-video" ? 
                <div onClick={() => ChangeStateLikeButton('publication')} class="post-video">
                    <video autoPlay muted loop playsInline>
                        <source src={props.linkMp4} type="video/mp4" />
                        <source src={props.linkOgg} type="video/mp4" />
                    </video>
                </div> : 
                <div onClick={() => ChangeStateLikeButton('publication')} class="post-img">
                    <img src={props.linkImg} />
                </div>
            }
            <div class="post-react">
                <div class="react-buttons">
                    <div class="react-left">
                        <ion-icon onClick={ChangeStateLikeButton}
                            class={classLikeButton} name={nameLikeButton}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="react-right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                {props.type === 'post-video' ?
                    <div class="react-count">
                        <div class="react-by">
                            <b>{props.visualizations} Visualizações</b>
                        </div>
                    </div> :
                    <div class="react-count">
                        <div class="react-ig">
                            <img src={props.likedLink} />
                        </div>
                        <div class="react-by">Curtido por
                            <b> {props.likedBy}</b> e
                            <b> outras {props.likesCount} pessoas</b>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}