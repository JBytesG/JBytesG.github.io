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
                            <a href="../reflections/high-school.html">High School</a>
                            <a href="../reflections/personal-development.html">Personal Development</a>
                            <a href="../reflections/service.html">Service</a>
                            <a href="../reflections/math.html">Math</a>
                            <a href="../reflections/english.html">English</a>
                            <a href="../reflections/social-studies.html">Social Studies</a>
                            <a href="../reflections/science.html">Science and Tech</a>
                            <a href="../reflections/robotics.html">Robotics</a>
                            <a href="../reflections/post-high-school.html">Post High School</a>
                        </div>
                    </div>
                </li>
                <li><a href="../artifacts">Artifacts</a></li>
                <li><a href="../letters">Letters of Recomendation</a></li>
                <li><a href="../images">Pictures</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define("general-header-and-nav", Header);

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul>
                <li><a href="https://github.com/JBytesG">Github</a></li>
            </ul>
        </footer>
        `;
    }
}

customElements.define("general-footer", Footer)