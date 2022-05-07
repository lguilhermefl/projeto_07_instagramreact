export default function Author(props) {
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