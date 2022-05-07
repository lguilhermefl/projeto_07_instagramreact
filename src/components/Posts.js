import Author from './postComponents/Author';
import PublicationAndReactions from './postComponents/PublicationAndReactions';
import Comments from './postComponents/Comments';

export default function Posts() {

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
                    <PublicationAndReactions type={item.type} linkMp4={item.linkMp4} 
                        linkOgg={item.linkOgg} linkImg={item.linkImg} 
                        visualizations={item.visualizations} 
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