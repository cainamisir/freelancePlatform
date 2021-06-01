import {
    Grid,
    Button,
    Container,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@material-ui/core";
import "./LandingStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

export default function Landing() {
    return (
        <div class="landing">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item lg={6} sm={12} className="text-pitch">
                    <h2>
                        Colaborari simple, de calitate si la preturi accesibile
                        intre tineri pasionati si companii.
                    </h2>
                    <p className="mt-3" style={{ color: "#707070" }}>
                        {" "}
                        Cu ajutorul platformei, in doar cateva clickuri puteti
                        gasi <span className="highlight">un colaborator</span>.
                        Plata se face prin intermediul aplicatiei, fara
                        birocratie, cu{" "}
                        <span className="highlight">siguranta totala</span> atat
                        pentru programator cat si pentru persoana juridica.
                    </p>
                    <Button variant="contained" className="button">
                        {" "}
                        Incercati Symbio{" "}
                    </Button>
                </Grid>
                <Grid item lg={6} sm={6} className="grid-images">
                    <img
                        src="undraw_business_deal_cpi9.svg"
                        alt="Symbio"
                        className="picture-two"
                    />
                    <img
                        src="undraw_referral_4ki4.svg"
                        alt="Symbio"
                        className="picture-one"
                    />
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={12} className="mb-5">
                        <h2 className="ml-auto mr-auto">
                            {" "}
                            Cei mai buni elevi din tara{" "}
                        </h2>

                        <h3>
                            <span className="highlight">
                                pregatiti sa va ajute.
                            </span>
                        </h3>
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3">
                        <img
                            className="logo"
                            alt="Politehnica"
                            src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/51/Logo_Universitatea_Politehnica_din_Bucure%C8%99ti.svg/1024px-Logo_Universitatea_Politehnica_din_Bucure%C8%99ti.svg.png"
                        />
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3 mt-3">
                        <img
                            className="logo"
                            alt="Universitatea Bucuresti"
                            src="https://i0.wp.com/unibuc.ro/wp-content/uploads/2018/12/Logo-UB-vertical-COLOR-limba-romana.jpg?resize=1024%2C914&ssl=1"
                        />
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3 mt-3">
                        <img
                            className="logo"
                            alt="Iasi"
                            src="https://www.uaic.ro/wp-content/uploads/2018/06/sigla_uaic_ro_color3.png"
                        />
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3 mt-3">
                        <img
                            className="logo"
                            alt="Cluj"
                            src="https://upload.wikimedia.org/wikipedia/ro/archive/b/ba/20170820012049%21Logo_Universitatea_Babe%C8%99-Bolyai.svg"
                        />
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3 mt-3">
                        <img
                            className="logo"
                            alt="ASE"
                            src="https://upload.wikimedia.org/wikipedia/ro/a/a3/Logo_ASE.png"
                        />
                    </Grid>
                    <Grid item xl={2} xs={4} className="mb-3 mt-3">
                        <img
                            className="logo"
                            alt="Vianu"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Vianu.png"
                        />
                    </Grid>
                    <Grid item xs={12} className="mt-5">
                        {" "}
                        <h2>La ce se pricep?</h2>{" "}
                    </Grid>
                    {/* <Grid item sm={4} spacing={1} className="p-5">
                        <h2>Siteuri web</h2>
                        <p>
                            De la Wordpress si Wix la React.js, Angular si
                            Vue.js, suntem pregatiti pentru{" "}
                            <span className="highlight">orice provocare</span>.
                            In cel mai scurt timp veti gasi un student care va
                            pune siteul dumneavoastra pe roate.
                        </p>
                    </Grid> */}
                    <Grid item xs={12} className="carusel">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            dotListClass="custom-dot-list-style"
                            transitionDuration={500}
                        >
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Websiteuri"
                                        className="img"
                                        image="pexels-format-1029757.jpg"
                                    />
                                    <CardContent>
                                        {" "}
                                        <h4> Siteuri web </h4>
                                        Fie ca este vorba de un simplu site de
                                        prezentare sau de o platforma complexa,
                                        studentii sunt pregatiti.
                                        <p style={{ lineHeight: "1.8em" }}>
                                            <span class="highlight telefon-none">
                                                #wordpress
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #wix
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #HTML
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #CSS
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #React.js
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #Angular
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #Node.js
                                            </span>{" "}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Websiteuri"
                                        className="img"
                                        image="design.jpg"
                                    />
                                    <CardContent>
                                        {" "}
                                        <h4> Design </h4>
                                        Aveti nevoie de un logo sau de un design
                                        modern pentru produsele dumneavoastra?
                                        <br></br> Ei sunt pregatiti.
                                        <p style={{ lineHeight: "1.8em" }}>
                                            <span class="highlight telefon-none">
                                                #Photoshop
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #Illustrator
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #AfterEffects
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #PremierePro
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #Canva
                                            </span>{" "}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Websiteuri"
                                        className="img"
                                        image="ads.jpg"
                                    />
                                    <CardContent>
                                        {" "}
                                        <h4> Reclame </h4>
                                        Social media este mediul lor natural.
                                        Stiu ce reclame capteaza atentia si duc
                                        la conversii. <br></br>Ei sunt
                                        pregatiti.
                                        <p style={{ lineHeight: "1.8em" }}>
                                            <span class="highlight telefon-none">
                                                #GoogleAnalytics
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #AdWords
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #FacebookAds
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #InstagramAds
                                            </span>{" "}
                                            <span class="highlight telefon-none">
                                                #TikTokAds
                                            </span>{" "}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} className="categorii m-3">
                        <img
                            src="websites.svg"
                            alt="Siteuri Web"
                            width="90%"
                            style={{ padding: "1em" }}
                        ></img>
                        <h4>Siteuri Web</h4>
                        Fie ca este vorba de un simplu site de prezentare sau de
                        o platforma complexa, studentii sunt pregatiti.
                        <br></br>
                        <Button variant="contained" className="button mt-3">
                            {" "}
                            Vezi ofertele
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="categorii  m-3">
                        <img
                            src="design.svg"
                            alt="Siteuri Web"
                            width="90%"
                            style={{ padding: "1em" }}
                        ></img>
                        <h4>Design</h4>
                        Aveti nevoie de un logo sau de un design modern pentru
                        produsele dumneavoastra? Ei sunt pregatiti.
                        <br></br>
                        <Button variant="contained" className="button mt-3">
                            {" "}
                            Vezi ofertele
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="categorii  m-3">
                        <img
                            src="reclame.svg"
                            alt="Siteuri Web"
                            width="90%"
                            style={{ padding: "1em" }}
                        ></img>
                        <h4>Reclame</h4>
                        Social media este mediul lor natural. Stiu ce reclame
                        capteaza atentia si duc la conversii.
                        <br></br>
                        <Button variant="contained" className="button mt-3">
                            {" "}
                            Vezi ofertele
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
