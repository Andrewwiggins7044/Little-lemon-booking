import food from "../../icons_assets/restauranfood.jpg"
import greeksalad from "../../icons_assets/greek salad.jpg"
import bruchetta from "../../icons_assets/bruchetta.svg"
import lemoncake from "../../icons_assets/lemon dessert.jpg"
import customer1 from "../../icons_assets/customer1.jpg"
import customer2 from "../../icons_assets/customer2.jpg"
import customer3 from "../../icons_assets/customer3.jpg"
import customer4 from "../../icons_assets/customer4.jpg"
import marioandadrian from "../../icons_assets/mario and adrian.jpg"

const Home = () => {
    return (
        <>
            <section className="banner">
                <div id="banner-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Based in Chicago, Illinois, Little Lemon is a family-owned
                        Mediterranean restaurant, focused on traditional recipes served with
                        a modern twist.
                    </p>
                    <button id="button">Reserve a Table</button>
                </div>
                <img src={food} id="banner-img" alt="someone holding some food" />
            </section >
            <section>
                <article>
                    <div id="section-header">
                        <h2>Specials</h2>
                        <button id="button">Order online</button>
                    </div>
                    <div className="specials-section">
                        <div className="specials">
                            <img src={greeksalad} id="card-img" alt="greek salad" />
                            <div className="title">
                                <h3>Greek Salad</h3>
                                <h4>$12.99</h4>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers,
                                    olives and our Chicago style feta cheese, garnished with crunchy garlic and
                                    rosemary croutons.
                                </p>
                                <a href="/">order a delivery</a>
                            </div>
                        </div>
                        <div className="specials">
                            <img src={bruchetta} id="card-img" alt="greek salad" />
                            <div className="title">
                                <h3>Bruchetta</h3>
                                <h4>$5.99</h4>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers,
                                    olives and our Chicago style feta cheese, garnished with crunchy garlic and
                                    rosemary croutons.
                                </p>
                                <a href="/">order a delivery</a>
                            </div>
                        </div>
                        <div className="specials">
                            <img src={lemoncake} id="card-img" alt="greek salad" />
                            <div className="title">
                                <h3>Lemon Dessert</h3>
                                <h4>$4.99</h4>
                            </div>
                            <div>
                                <p>The famous greek salad of crispy lettuce, peppers,
                                    olives and our Chicago style feta cheese, garnished with crunchy garlic and
                                    rosemary croutons.
                                </p>
                                <a href="/">order a delivery </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section id="section-bg" >
                <div id="section-header">
                    <h2>Testimonials</h2>
                </div>
                <article id="test-layout">
                    <div className="test-card">
                        <div>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div>
                            <img src={customer1} id="avatar" alt="customer avatar" />
                            <h3>John Peters</h3>
                        </div>
                        <div>
                            <p>"food was great! loved the lemon Dessert".</p>
                        </div>
                    </div>
                    <div className="test-card">
                        <div>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div>
                            <img src={customer2} id="avatar" alt="customer avatar" />
                            <h3>Sarah Smith</h3>
                        </div>
                        <div>
                            <p>"I wish i knew about little lemon earlier".</p>
                        </div>
                    </div>
                    <div className="test-card">
                        <div>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div>
                            <img src={customer3} id="avatar" alt="customer avatar" />
                            <h3>Joan Kennedy</h3>
                        </div>
                        <div>
                            <p>"The Bruchetta is to die for!".</p>
                        </div>
                    </div>
                    <div className="test-card">
                        <div>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div>
                            <img src={customer4} id="avatar" alt="customer avatar" />
                            <h3>Greg Clark</h3>
                        </div>
                        <div>
                            <p>"Tastiest place in Chicago, can't wait to go again".</p>
                        </div>
                    </div>
                </article>
            </section>
            <section id="about-bg">
                <div id="section-header">
                    <h2>About Little Lemon</h2>
                </div>
                <article id="about">
                    <div id="about-text" >
                        <p>
                            Mario and Adrian, two ambitious and passionate culinary enthusiasts,
                            embarked on a remarkable journey when they decided to open their own restaurant.
                            Fueled by their shared love for exquisite cuisine and a burning desire to create a
                            unique dining experience,
                            they introduced "Little Lemon" to the world. Nestled in a charming corner of the city,
                            the restaurant exuded an inviting and warm
                            ambiance that instantly won the hearts of its patrons.<br></br>
                            At Little Lemon, Mario and Adrian showcased their culinary prowess, crafting a menu
                            that celebrated
                            the vibrant flavors of seasonal produce and locally sourced ingredients.
                            The duo's
                            unwavering commitment to quality and innovation was reflected in every dish they
                            presented.<br></br>
                            From their tantalizing appetizers to their mouthwatering main courses,
                            each creation bore the unmistakable stamp of their creativity and attention to detail.
                            Through their dedication, talent, and unwavering commitment to excellence, Mario and Adrian
                            had created more than just a restaurant; they had crafted a haven for food lovers,
                            a place where passion and flavor merged to create unforgettable experiences.
                            Little Lemon had become a destination, a testament to the indomitable spirit of
                            two culinary dreamers who turned their shared vision into a remarkable reality.
                        </p>
                        <div id="about-img">
                            <img src={marioandadrian} alt="mario and adrian cooking" />
                        </div>
                    </div>
                </article>
            </section >
        </>
    );
};

export default Home;