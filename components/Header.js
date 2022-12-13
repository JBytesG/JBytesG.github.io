class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>
                Senior Portfolio
            </h1>
        </header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li>
                    <div class="dropdown">
                        <a href="../reflections">Reflections</a>
                        <div class="dropdown_content">
                            <a href="../reflections/high-school-reflection.html">High School</a>
                        </div>
                    </div>
                </li>
                <li><a href="../artifacts.html">Artifacts</a></li>
                <li><a href="../letters.html">Letters of Recomendation</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define("header-and-nav", Header);