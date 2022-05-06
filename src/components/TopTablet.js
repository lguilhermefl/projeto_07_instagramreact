export default function TopTablet() {
    return (
        <div class="top tablet">
            <div class="menu">
                <div class="menu-left">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="menu-bar"></div>
                    <div class="logo"><img src="images/logo.png" /></div>
                </div>

                <input type="text" placeholder="Pesquisar" name="search" />

                    <div class="menu-right">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
            </div>
        </div>
    );
}