function StoriesItem(props) {
    return (
        <>
            <div class="stories-icons">
                <img src="images/stories.png" />
                <div class="stories-ig">
                    <img src={props.link} />
                </div>
            </div>
            <div class="stories-name">{props.ig}</div>
        </>
    );
}

export default function Stories() {

    const items = [
        {
            link: "images/9gag-logo.png",
            ig: "9gag"
        },
        {
            link: "images/meoewd.jpg",
            ig: "meowed"
        },
        {
            link: "images/barked.jpg",
            ig: "barked"
        },
        {
            link: "images/nathanwpylestrangeplanet.jpg",
            ig: "nathanwpylestrangeplanet"
        },
        {
            link: "images/wawawiwacomics.jpg",
            ig: "wawawiwacomics"
        },
        {
            link: "images/respondeai.jpg",
            ig: "respondeai"
        },
        {
            link: "images/filomoderna.jpg",
            ig: "filomoderna"
        },
        {
            link: "images/memeriago.jpg",
            ig: "memeriago"
        }
    ];

    return (
        <div class="stories">
            <ul>
                { items.map(item => <li><StoriesItem link={item.link} ig={item.ig} /></li>) }
            </ul>
            <div class="stories-arrow tablet">
                <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
            </div>
        </div>
    );
}