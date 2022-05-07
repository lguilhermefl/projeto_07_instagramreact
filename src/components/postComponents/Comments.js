export default function Comments(props) {
    return (
        <div class="post-comments">
            <div class="post-subtitle"><b>{props.author}</b> {props.title}</div>
            <div class="comments-count gray">Ver todos os {props.commentsCount} comentários</div>
            { props.comments.map(item => 
                <div class="comment">
                    <h6><b>{item.author}</b> {item.comment}</h6>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            ) }
            <div class="post-time gray">{props.time}</div>
        </div>
    );
}