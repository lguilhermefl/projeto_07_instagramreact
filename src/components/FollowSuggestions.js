function UserIg(props) {
    return (
        <div class="your-ig">
            <img src={props.userImgLink} alt="" />
            <div class="ig-profile">
                <a href={props.userIgLink}>{props.userIg}</a>
                <div>{props.userName}</div>
            </div>
        </div>
    );
}

function SuggestionsItem(props) {
    return (
        <div class="follow-suggestions">
            <div class="ig-suggestions">
                <img src={props.igLinkImg} />
                <div class="suggestions-profile">
                    <a href={props.igLink}>{props.ig}</a>
                    <div>{props.status}</div>
                </div>
            </div>
            <a href="">seguir</a>
        </div>
    );
}

function HelpLinks(props) {
    return (
        <>
            <a href="">{props.subject}</a><span>&#183;</span>
        </>
    );
}


export default function FollowSuggestions() {

    const user =
        {
            userImgLink: 'images/catanacomics.jpg',
            userIgLink: 'https://www.instagram.com/catanacomics/',
            userIg: 'catanacomics',
            userName: 'Catana'
        };

    const items = [
        {
            igLinkImg: 'images/bad.vibes.memes.jpg',
            igLink: 'https://www.instagram.com/bad.vibes.memes/',
            ig: 'bad.vibes.memes',
            status: 'Segue você'
        },
        {
            igLinkImg: 'images/chibirdart.jpg',
            igLink: 'https://www.instagram.com/chibirdart/',
            ig: 'chibirdart',
            status: 'Segue você'
        },
        {
            igLinkImg: 'images/razoesparaacreditar.jpg',
            igLink: 'https://www.instagram.com/razoesparaacreditar/',
            ig: 'razoesparaacreditar',
            status: 'Novo no Instagram'
        },
        {
            igLinkImg: 'images/adorable.animalvideos.jpg',
            igLink: 'https://www.instagram.com/adorable.animalvideos/',
            ig: 'adorable.animalvideos',
            status: 'Segue você'
        },
        {
            igLinkImg: 'images/smallcutecats.jpg',
            igLink: 'https://www.instagram.com/smallcutecats/',
            ig: 'smallcutecats',
            status: 'Segue você'
        }
    ];

    const help = ['Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras', 
        'Privacidade', 'Termos', 'Localizações', 'Contas mais relevantes', 
        'Hashtags', 'Idioma'];

    return (
        <div class="sidebar desktop">
            <UserIg userImgLink={user.userImgLink} userIgLink={user.userIgLink} 
               userIg={user.userIg} userName={user.userName} />
            <div class="all-suggestions">
                <div>Sugestões para você</div>
                <a href="">Ver tudo</a>
            </div>
            <div class="list-suggestions">
                { items.map(item => <SuggestionsItem igLinkImg={item.igLinkImg} 
                    igLink={item.igLink} ig={item.ig} status={item.status} />) }
            </div>
            <div class="help-links">
                <ul>
                    { help.map(item => <li><HelpLinks subject={item} /></li>) }
                </ul>
            </div>
            <span class="instagram-brand">© 2021 INSTAGRAM DO FACEBOOK</span>
        </div>
    );
}