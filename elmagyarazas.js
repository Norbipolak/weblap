/*
És ha készen van már ez a css szerkezet, akkor könnyen tudunk ilyet csinálni azzal, hogy megadjuk csak a div-ekben 
class-val, amit csináltunk 

<div class="container-xl">
    <div class="grid-col-4 gap-md">
        <div class="p-md bg-light-brown"></div>
        <div class="p-md bg-light-brown"></div>
        <div class="p-md bg-light-brown"></div>
        <div class="p-md bg-light-brown"></div>
    </div>
</div>

fontos, hogy van egy variables, ahol meghatározzuk a méretek ilyen formában 

:root {
    --spacing-xs: 3px;
    --spacing-sm: 5px;
    --spacing-md: 10px;
    --spacing-lg: 15px;
    --spacing-xl: 20px;
    --width-xs: 640px;
    --width-sm: 720px;
    --width-md: 920px;
    --width-lg: 1080px;
    --width-xl: 1280px;
    --grey: #efefef;
}

és fontos, hogy ez a variables majd be legyen @import-álva, amit majd megadunk a html-ben link-ként
@import "variables.css";

és akkor ha meg vannak ezek a méretek, akkor ezekből könnyebben tudunk class-okat
******************************************************************************************************************************
Weblap csinálás
Kell nekünk egy fejléc, ami 100-szélességű 
-Középen az van rajta, hogy Free shipping és bal oldalon pedig ikonok instagram, facebook, tiktok

Legyen ez mondjuk egy div, aminek megadunk egy upperline class-t 
<body>
    <div class="upper-line">
        
    </div>
</body>
ezeket a dolgokat, hogy pl. upper-line class, ezeket a style.css-ben fogjuk megszerkezteni
.upper-line {
    height: 40px;
    background-color: var(--dark-grey);
}

ebben az upper-line div-ben van egy középső valami, amiben ki lesz írva az, hogy Free Shipping 

<div class="upper-line">
    <div class="upper-center-text"></div>
</div>

A weblapon olyan, hogy baloldalon is van valami, de abba nincsen semmi írva, középen van egy free shipping, jobboldalt pedig a linkek
ezt valószínű, hogy úgy csinálták meg, hogy flex és akkor space-between  

    <div class="upper-line">
        <div class="upper-center-text">

        </div>

        <div class="social-media-links">

        </div>
    </div>

Ebben az upper-line-ba beletettük a upper-center-text-et meg a social-media-links-eket 

.upper-line {
    height: 40px;
    background-color: var(--dark-grey);
    position: relative;
}

.upper-center-text {
    position: absolute;
    margin: auto;
    height: 40px;
    left: 0;
    right: 0;
    max-width: 300px; így már bemegy középre, ha van szélessége
    text-align: center;
    line-height: 40px;
}

Azért fontos, hogy a szűlőelem az relative legyen a gyerek, ami benne van pedig absolute, mert így el tudjuk elhelyezni őket 
a szűlőelemben, ha ezt nem adnánk meg, akkor alapból static lenne és nem lennének érvényesek a right, left, top, bottom!!!!!!!
Ez az upper-center-text-nek fehér a betűszíne és ezt itt nem kell megadni, mert van rá nekünk egy class és azt majd rögtön meg tudjuk adni 
ennek az elemnek egy class-ként!! 

az jó ha height-ja a gyereknek az ugyanakkora, mint a szűlőelemnek, mert akkor be tudjuk állítani a gyereknél a line-height-ot 
ennek is ugyanakkorának kell lennie mint a magasságoknak és akkor a benne lévő szöveg az középre kerül 
(vagy ez még úgy is meg lehet csinálni, hogy a gyerekelemnek megadunk egy margin: ..px, auto)
auto, hogyha azt szeretnénk, hogy középre kerüljön vizszintesen is 

.container {
  position: relative;
  width: 200px;  Example width 
}

.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

ha a szűlőelem relative és a gyerekelem abszolút 
akkor left: 50%-val középre lehet hozni de ez még nem lesz teljesen középen azért kell a transform: translateX(-50%)
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Itt most az a probléma, hogy helyezzük ezt középre, mert ez most így 100% széles és nem tudjuk így középre helyezni 
(elöző amit írtam left: 50% az lehet, hogy müködik, de akkor még ezt nem tudtuk)
ha meg adunk ennek a gyerekelemnek egy szélességet, akkor meg nem biztos, hogy kifér a text, de valőszínüleg így fogjuk megoldani 

position: absolute-val még az a probléma, hogyha összehúzzuk a képernyőt akkor egymásba fognak menni a text meg a linkek, amik majd jobb
oldalon lesznek 
***************************
megcsináljuk az upper-right-text-et a linkeknek
majdnem ugyanaz, csak a szélessége az kisebb lesz 

leírás: 
position: absolute;
- hogy meg tudjunk neki adni right, left stb.
right: 0;
left: 0;
margin: auto;
- ezzel a hárommal tudjuk középre helyezni a szűlőelemben, ha van egy szélessége 
max-width: 300px;
- ezzel a kettővel pedig középre tudjuk helyezni a felíratot horizontálisan is vertikálisan is 
text-align: center; horizontális 
line-height: 40px; vertikális
- van még egy height-ja is, de nem az a fontos, hogy itt legyen ugyanakkora height, mint a line-height, hanem a szűlőelemnek kell ugyanakkora 
height mint a gyereknek a line-height vagyis jobb ha szűlőnél és a gyereknél is meg van adva egy ugyanakkora height és akkor biztos, hogy 
nem lesz gond

.upper-right-text {
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    max-width: 200px;
}
****************************************************************************************************************
még nagyon fontos, hogy be kell majd linkelni a fontAwesome-os dolgokat is!!!!
ezt a sima css-es linkelés alatt tudjuk majd megtenni

<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/fontawesome/css/all.min.css">
<link rel="stylesheet" href="assets/fontawesome/js/all.min.css">

        <div class="social-media-links color-white">
            <a class="white-link" href="#">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a class="white-link" href="#">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a class="white-link" href="#">
                <i class="fa-brands fa-tiktok"></i>
            </a>
        </div>

Az a baj, hogyha ezeket az ikonokat beletesszük link-ekbe (a), akkor aláhúzással fognak rendelkezni és a színük pedig kék lesz, 
ezért majd adunk mindegyik link-nek egy white link class-t, ami egy color: white; illetve egy text-decoration: none;

.social-media-links {
    position: absolute;
    right: 15px;
    height: 40px;
    width: 100px;
    line-height: 40px;
    display: flex; 
    justify-content: space-evenly;
}

Ennek megadtunk egy 100px-es szélességet és mivel azt szeretnénk, hogy ezek a link-ek, amik ebben a social-media-links-ekben találhatóak 
ezek legyen ugyanolyan távolságra egymástól és kitelítsék a fennállásra lévő 100px szélességet 
erre kell, a social-media-links-nek a display: flex illetve hogy justify-content: space-evenly!!!!  

.white-link {
    color: white;
    text-decoration: none;
}
************************************************************************
Ezalatt majd készítünk egy nav menüt 
Weboldal úgy néz ki
-> 
    HOMEˇ   PAGESˇ   ARTICLESˇ                      itt van egy logo, amit lementettünk                  WHOLESALEˇ   SHOPˇ   LOCATIONˇ 
    
Ezt meg lehet oldani, hogy van 3 ul egymás alatt, a holnap ezt div-ekkel oldotta meg, de az azért nem feltétlen jó, mert sokkal jobban 
szeretik a keresőmotorok meg a képernyőfelismerő szoftverek, hogy úgy jelőlöd meg a navigaációs menüt, hogy nav, mert akkor abban keres 
linkeket 

Tehát a nav-van lesz egy center-nav class div-ünk és abban 3 ul, inkább 2 ul és egy div a logo-nak 
    <nav>
        <div class="center-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Location</a></li>
            </ul>
            <div class="menu-logo">
                <img src="">
            </div>
            <ul>
                <li><a href="#">Wholesale</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Location</a></li>
            </ul>
        </div>
    </nav>

Navigációs menü kap egy magasságot

nav {
    height: 92px;
    display: flex;
    align-items: center;
}

.center-nav {
    width: 95%; azért, mert ott is kicsit beljebb kezdődik, nem teljesen a szélén kezdődik az első link
    margin: auto; 
    display: flex;
    justify-content: space-between; 
    height: 60px;

}

nav ul {
    display: flex; emiatt az li-k egymás mellet fognak elhelyezkedni, nem egymás alatt
    justify-content: center;
}

nav li {
    height: 60px;
    display: flex;
    align-items: center;

}

nav a {
    text-decoration: none;
    color: black;
    padding: 15px; ezzel fognak eltávolodni egymástól
    text-transform: uppercase; fontos, hogy ezzel lehet beállítani, hogy nagybetűs legyen
}


nav az azért lett flex, meg align-items: center, mert így tudjuk középre helyezni vele a bennelévő dolgokat vertikálisan 
tehát most ami benne van .center-nav az középen van a 92px height-os nav-ban, ha ez nem lenne, akkor nem lenne középen vertikálisan,
hanem feljebb lenne!!!! 

nav alapból teljes szélességet vesz fel 

.center-nav 
width: 95%;
margin: auto;
- mert ez egy div ami 100%-os szélességű, mi meg azt szeretnénk, hogy ne teljesen a jobboldal kezdje a dolgokat, amik ezekben van 
persze ehhez kell az is hogy margin: auto legyen, tehát ne úgy legyen, hogy 95% az teljesen a jobboldalról indul, hanem úgy, hogy ez az 
hogy legyen 2,5% hely a jobboldalon és legyen 2.5% hely a baloldalon is!!!!
display: flex;
justify-content: space-between
Ezek azért kellenek, hogy a három dolog ami benne van a két ul és a div, azok bemenenek egymás mellé és ne egymás alatt legyenek 
space-between meg az, hogy ne full egymás mellett legyenek, hanem úgy kb., hogy az ul legyen a baloldalt logo középen és a másik
ul pedig legyen jobboldalt!!!!!! 

nav ul 
display: flex;
az meg azért kell, hogy a 3 dolog, ami benne van ebben az ul-ben az is bemenjen egymás mellé, mert ezek alapból ugye egymás alatt vannak

nav-li
height: 60px;
kapott egy ugyanolyan magasságot, mint a .center-nav, de ezt úgy láttam, hogy nem befolyásol semmit 
display: flex;
align-items: center;
ez azért van, hogy vertikálisan középen legyenek ezek a dolgok és ilyenkor nincs is ott a pont, amit kapnak amugy az li-k és nem 
kell leszedni őket, ez a leszedést az ul-nak kell megadni nem li-nek!!!!!!! 
és list-style-type: none; nem text-decoration: none; azt az aláhúzásokra kell használni!!!!!! 
de az a lényeg, hogyha itt meg van adva az li-nek egy magasság, akkor nem kell flex hanem, csak line-height, ugyanakkora mint a height 
és akkor vertikálisan középre teszi, csak akkor ott megmaradnak valamiért a pontok!!!!!
ul {
  list-style-type: none;
}

nav a 
padding: 15px;
ez fontos, mert így a padding miatt fognak eltávolodni ezek a linkek egymástól, amugy teljesen egymás mellett lennének 
text-decoration: none 
aláhúzás eltüntetése 
color: black 
mivel ez link (a), ezért alapból aláhúzott és van a betűk kékek, ezért kell a text-decoration meg a color!!!!
text-transform: uppercase; !!!!!!!
fontos, mert a az oldalon amit néztünk nagybetűvel van 
**********************************************************
Ahogy fent bemutattam az a tagek mellett van egy ilyen down arrow valami, ezt most fontAwesome-ban megkeressük, letöltjük 
és berakjuk minden a tag mellé!!!

    <nav>
        <div class="center-nav">
            <ul>
                <li>
                    <a href="#">
                        Home
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pages
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Location
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
            </ul>
            <div class="menu-logo">
                <img src="">
            </div>
            <ul>
                <li>
                    <a href="#">
                        Wholesale
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Shop
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Location
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

megcsináljuk ezt a részt, ami még kimaradt innen!!! 

<div class="menu-logo">
    <img src="">
</div>

most, mivel az van egy hattérkép és ez a nav is benne van, tehát ez alatt is van az a kép csak az legfelső upper-line van elkülönülve 
ezért, ezt az egész nav-ot beletesszük egy header-be, annak meg megadunk egy háttérképet!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és akkor a nav alatt is ott lesz ez a háttérkép!!!! 

header {
    background-image: url(".../images/coffe.jpg"); 
    azért van ez így mert nem töltöttem le képet hozzá 
    
    height: 700px; ahhoz, hogy látszodjon a kép kell magasság is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    height: 30vw;
    background-size: 100%; hogy a kép a teljes szélességét felvegye a header-nek
    background-position: center; hogy mindig középen legyen
}


fontos, hogy itt meg lehet adni a height-ot vw-vel és akkor olyan magas lesz mint a szélességnek valahány százaléka 
pl. 50vw azt jelenti, hogy ennek a header a magassága az mindig akkora lesz mint a szélességnek az 50%-a és akkor alapból meg van 
a reszponzívítás!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*******************************************************************
itt a header-ben van egy szövegünk és egy gombunk is!!! 
csinálunk egy inputs.css-t ahol ezt megformázzuk 
input:focus, button:focus{
    outline: 0;
}


The outline is a visual indicator that highlights the element when it is focused, 
usually appearing as a colored border around the element. By setting outline: 0;, you remove this visual indicator.


.brown-bordered-btn {
    padding: 10px 15px;
    border: 2px solid var(--light-brown);
    background-color: transparent; fontos, ha van egy kép alatta, akkor ez kell hogy átlátszó legyen
    height: 40px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
}

Nem muszály megadni a width-et, mert ha beleírunk valamit, akkor a padding miatt olyan nagyságú lesz, mint amit beleírtunk 

.brown-bordered-btn:hover {
    background-color: var(--light-brown);
    color: white;
}
**********************************************
Meg volt a gombnak a formázása meg ezt meg is csináltuk html-ben, most jön az, hogy a szövegeket is megcsináljuk
h valamilyen-be van egy rövidebb szöveg, és p-be tesszünk egy hosszabbat és még van egy szöveg a legbaloldalon, de az 
olyan hogy alulról-felfele van valami odaírva

Hogyan kell, úgy, hogy ne jobbról balra menjen egy szöveg, hanem alulról felfele
text-orientation!!!!
->
writing-mode: vertical-rl; -> itt lehet lr is, ha úgy szeretnénk, hogy máshogy menjen a szöveg
text-orientation: mixed;
*/ 
