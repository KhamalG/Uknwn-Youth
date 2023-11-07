

export default function Navbar () {
    return (
        <div class="navbar">
            <div class="site-address">
                <h3 class="site-address-header">www.unknwn-youth.com</h3>
                <button class="site-address-minimize">minimize</button>
                <button class="site-address-close">close</button>
            </div>
            <div class="header">
                <img class="nav-logo"src="https://i.imgur.com/8dF98hJ.png"/>
                <ul class="mini-menu">
                    <li>home</li>
                    <li>about</li>
                    <li>cart</li>
                    <li>search</li>
                </ul>
            </div>
        </div>
    )
}