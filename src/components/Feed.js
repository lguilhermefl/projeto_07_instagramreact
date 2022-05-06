function Author(props) {
    return (
        <div class="author">
            <div class="author-ig">
                <img src={props.authorImgLink} />
                <div class="author-name">{props.author}</div>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    );
}

function Publication(props) {
    return (
        <>
            { props.type === "post-video" ? 
                <div class="post-video">
                    <video autoPlay muted loop playsInline>
                        <source src={props.linkMp4} type="video/mp4" />
                        <source src={props.linkOgg} type="video/mp4" />
                    </video>
                </div> : 
                <div class="post-img">
                    <img src={props.linkImg} />
                </div>
            }
        </>
    );
}

function Reactions(props) {
    return (
        <div class="post-react">
            <div class="react-buttons">
                <div class="react-left">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="react-right">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            { props.type === 'post-video' ? 
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
    );
}

function Comments(props) {
    return (
        <div class="post-comments">
            <div class="post-subtitle"><b>{props.author}</b> {props.title}</div>
            <div class="comments-count gray">Ver todos os {props.commentsCount} comentários</div>
            <div class="comment">
                <h6><b>{props.comments[0].author}</b> {props.comments[0].comment}</h6>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div class="comment">
                <h6><b>{props.comments[1].author}</b> {props.comments[1].comment}</h6>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div class="post-time gray">{props.time}</div>
        </div>
    );
}

function Post() {

    const postItems = [
        {
            authorImgLink: 'images/9gag-logo.png',
            author: '9gag',
            type: 'post-video',
            linkMp4: 'videos/moves-like-jagger.mp4',
            linkOgg: 'videos/moves-like-jagger.ogg',
            visualizations: '253.715',
            linkImg: '',
            likedLink: '',
            likedBy: '',
            likesCount: '',
            title: 'Moves like Jagger!',
            commentsCount: '1.753',
            comments: [
                {
                    author: 'meowed',
                    comment: 'WTF'
                },
                {
                    author: 'catanacomics',
                    comment: 'Great moves bro 👏'
                }
            ],
            time: 'HÁ 1 HORA'
        },
        {
            authorImgLink: 'images/meoewd.jpg',
            author: 'meoewd',
            type: 'post-img',
            linkMp4: '',
            linkOgg: '',
            visualizations: '',
            linkImg: 'images/cat-woman.jpg',
            likedLink: 'images/respondeai.jpg',
            likedBy: 'respondeai',
            likesCount: '101.523',
            title: 'A better catwoman than the original 🔥🔥🔥',
            commentsCount: '987',
            comments: [
                {
                    author: 'respondeai',
                    comment: 'yayyy 🤓'
                },
                {
                    author: 'chibirdart',
                    comment: 'Such detail 👌'
                }
            ],
            time: 'HÁ 3 HORAS'
        },
        {
            authorImgLink: 'images/catanacomics.jpg',
            author: 'catanacomics',
            type: 'post-img',
            linkMp4: '',
            linkOgg: '',
            visualizations: '',
            linkImg: 'images/catanacomics-feed.jpg',
            likedLink: 'images/barked.jpg',
            likedBy: 'barked',
            likesCount: '10.178',
            title: "DON'T-YOU-DARE-BABE",
            commentsCount: '224',
            comments: [
                {
                    author: '9gag',
                    comment: 'nice habits! 😂🤣'
                },
                {
                    author: 'chibirdart',
                    comment: 'My girlfriend everysingleday 😒'
                }
            ],
            time: 'HÁ 3 HORAS'
        },
        {
            authorImgLink: 'images/9gag-logo.png',
            author: '9gag',
            type: 'post-img',
            linkMp4: '',
            linkOgg: '',
            visualizations: '',
            linkImg: 'images/9gag-feed.jpg',
            likedLink: 'images/filomoderna.jpg',
            likedBy: 'filomoderna',
            likesCount: '62.259',
            title: "Just another Bunny",
            commentsCount: '357',
            comments: [
                {
                    author: 'filomoderna',
                    comment: 'so cute ❤️'
                },
                {
                    author: 'memeriago',
                    comment: 'A toast to you bunny'
                }
            ],
            time: 'HÁ 4 HORAS'
        }
    ];

    return (
        <>
            {postItems.map(item =>
                <div class="post">
                    <Author authorImgLink={item.authorImgLink} author={item.author} />
                    <Publication type={item.type} linkMp4={item.linkMp4} 
                        linkOgg={item.linkOgg} linkImg={item.linkImg} />
                    <Reactions type={item.type} visualizations={item.visualizations} 
                        likedLink={item.likedLink} likedBy={item.likedBy} 
                        likesCount={item.likesCount} />
                    <Comments author={item.author} title={item.title} 
                        commentsCount={item.commentsCount} comments={item.comments} />
                    <div class="add-comment">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                        <a href="">Publicar</a>
                    </div>
                </div>

            )}
        </>

    );
}

export default function Feed() {
    return (
        <div class="feed">
            <Post />
        </div>
    );
}