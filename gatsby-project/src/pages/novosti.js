import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import NovostiStyle from "../styles/novosti.module.css"
import {
  Media,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import img1 from "../images/celine.jpg"
import img11 from "../images/celine.png"
import img2 from "../images/boticeli.jpg"
import img3 from "../images/zorica.jpg"
import img4 from "../images/toni.jpg"
import img5 from "../images/massimo.jpg"
import img6 from "../images/parnivaljak.jpg"

const NovostiPage = props => {
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)

  const toggle = () => setModal(!modal)
  const toggle1 = () => setModal1(!modal1)
  const toggle2 = () => setModal2(!modal2)
  const toggle3 = () => setModal3(!modal3)
  const toggle4 = () => setModal4(!modal4)
  const toggle5 = () => setModal5(!modal5)
  return (
    <Layout>
      <div className={NovostiStyle.page}>
        <div className={NovostiStyle.pageDiv}>
          <h3 className={NovostiStyle.pageTitle}>Novosti</h3>
          <div className={NovostiStyle.media}>
            <div className={NovostiStyle.left}>
              <Media left>
                <Media
                  className={NovostiStyle.slika1}
                  object
                  src={img11}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading style={{ marginTop: 20 }}>
                  CELINE DION DOLAZI U ZAGREB{" "}
                </Media>
                Jedna od najpoznatijih i najcjenjenijih zvijezda u povijesti pop
                glazbe, Celine Dion, 05. lipnja 2020. godine dolazi u Arenu
                ZAGREB! ZAGREBAČKI KONCERT, U ORGANIZACIJI STAR PRODUKCIJE, DIO
                je velike svjetske turneje na kojoj će promovirati svoje
                najnovije studijsko izdanje (“Courage”), a koja je započela 18.
                rujna u Quebecu. COURAGE WORLD TOUR uključivati će više od 100
                gradova diljem svijeta, a za produkciju na najvećem svjetskom
                nivou, uz Star produkciju, zadužen će biti i Concerts West...
                <a
                  href="#celineModal"
                  data-target="#celineModal"
                  onClick={toggle}
                  data-modal="#celineModal"
                >
                  Pročitaj više
                </a>
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  id={NovostiStyle.celineModal}
                >
                  <ModalHeader toggle={toggle}>
                    CELINE DION DOLAZI ZAGREB{" "}
                  </ModalHeader>
                  <ModalBody>
                    <img
                      src={img1}
                      className={NovostiStyle.modalMainImage}
                    ></img>
                    <p style={{ marginTop: 15 }}>
                      Jedna od najpoznatijih i najcjenjenijih zvijezda u
                      povijesti pop glazbe, Celine Dion, 05. lipnja 2020. godine
                      DOLAZI U ARENU ZAGREB! ZAGREBAČKI KONCERT, U ORGANIZACIJI
                      Star produkcije, dio je velike svjetske turneje na kojoj
                      će promovirati svoje najnovije studijsko izdanje
                      (“Courage”), a koja je započela 18. rujna u Quebecu.
                    </p>
                    <p>
                      COURAGE WORLD TOUR uključivati će više od 100 gradova
                      diljem svijeta, a za produkciju na najvećem svjetskom
                      nivou, uz Star produkciju, zadužen će biti i Concerts West
                      / AEG Presents. Europski dio turneje započeti će započet
                      će 21. svibnja 2020. godine u Pragu u Češkoj, a osim
                      brojnih gradova u Velikoj Britaniji i Njemačkoj, ova
                      velika glazbena diva posjetiti će i razveseliti svoje
                      obožavatelje u Belgiji, Švicarskoj, Nizozemskoj, Austriji,
                      Francuskoj, Italiji, Finskoj, Švedskoj, Finskoj, Danskoj,
                      ali i po prvi puta one u Hrvatskoj te na Malti i Cipru.
                    </p>
                    <p>
                      Prošli tjedan Celine Dion objavila je tri nove pjesme sa
                      svog dugoočekivanog albuma pod nazivom Courage, koji će
                      diljem svijeta biti dostupan od 15. studenog 2019.
                      “Imperfections,” “Lying Down,” and “Courage” predstavljaju
                      nov i uzbudljiv pravac za Celine, a upravo danas
                      premijerno je objavljen video za singl " “Imperfections,”
                      -{" "}
                      <a
                        href="https://www.youtube.com/watch?v=_8EokLztgMo"
                        target="_blank"
                      >
                        OVDJE
                      </a>
                      . Do sada objavljeni singlovi s novog albuma mogu se
                      poslušati{" "}
                      <a
                        href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsmarturl.it%2FCelineDionCourage&amp;data=02%7C01%7Cerica.silver%40sonymusic.com%7C13b28830f3fe417981e608d73adf0ee3%7Cf0aff3b791a54aaeaf71c63e1dda2049%7C0%7C0%7C637042602003445808&amp;sdata=a3u72PaYqzJeDBN4DIsOuvIScf8IceXnT1pcylVSDYY%3D&amp;reserved=0"
                        target="_blank"
                      >
                        {" "}
                        OVDJE.
                      </a>
                    </p>
                    <p>
                      Celine Dion jedna je od najpriznatijih, najcjenjenijih i
                      najuspješnijih izvođača u povijesti pop glazbe. Do 18.
                      godine osvojila je brojne nagrade, dominirala je na top
                      ljestvicama 1990-ih, a prodala je gotovo 250 milijuna
                      albuma tijekom 35-godišnje karijere. Dobitnica je pet
                      Grammya, dvije nagrade Akademije, sedam Američkih
                      glazbenih nagrada, 20 Juno nagrada (Kanada) i
                      nevjerojatnih 40 nagrada Félix (Quebec). Osvajanjem
                      nagrade “Diamond Award” 2004. godine potvrđen joj je
                      status najprodavanije umjetnice svih vremena, a 2016.
                      godine Billboard Music Awards dodijelio joj je nagradu za
                      životno djelo. Bila je i na vrhu US Dance Club ljestvica u
                      srpnju 2018. s remiksom singla “Ashes” iz filma Deadpool
                      2. U lipnju 2018. Celine je uzela dvomjesečnu stanku od
                      nastupa u Ceasers Palaceu u Las Vegasu, kako bi se uputila
                      na svoju rasprodanu turneju CELINE DION LIVE 2018, na
                      kojoj je održala ukupno 22 koncerta u 12 gradova u Aziji,
                      Australiji i Novom Zelandu. Poslije dugih 16 godina, 08.
                      lipnja 2019., Celine Dion završila je s nastupima u Las
                      Vegasu.
                    </p>
                    <p>
                      GLAZBENI SPEKTAKL OVE VELIKE GLAZBENE DIVE KONCERT JE KOJI
                      se mora doživjeti!
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      Podijeli
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Zatvori
                    </Button>
                  </ModalFooter>
                </Modal>
              </Media>
            </div>
            <div className={NovostiStyle.right}>
              <Media className={NovostiStyle.secondMedia}>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img2}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>
                    <h6 style={{ paddingLeft: 10 }}>
                      ANDREA BOCELLI PONOVNO U SLOVENIJI, NASTUP U SLAVNOJ
                      DVORANI STOŽICE{" "}
                      <a href="#boticeliModal" onClick={toggle1}>
                        {" "}
                        <h7>Pročitaj više </h7>
                      </a>
                    </h6>

                    <Modal
                      isOpen={modal1}
                      toggle={toggle1}
                      id={NovostiStyle.boticeliModal}
                    >
                      <ModalHeader toggle={toggle1}>
                        ANDREA BOCELLI PONOVNO U SLOVENIJI, NASTUP U SLAVNOJ
                        DVORANI STOŽICE{" "}
                      </ModalHeader>
                      <ModalBody>
                        <img
                          src={img2}
                          className={NovostiStyle.modalMainImage}
                        ></img>
                        <p style={{ marginTop: 15 }}>
                          Nakon četiri godine slavni talijanski tenor ponovno će
                          nastupiti pred slovenskom publikom, koja će u njegovoj
                          veličanstvenoj izvedbi moći uživati 7. ožujka 2020.
                          godine
                        </p>
                        <p>
                          Kad bi Bog pjevao, zvučao bi gotovo kao Andrea
                          Bocelli, tako je Celine Dion opisala talijanskog
                          umjetnika, koji će po drugi put nastupiti u Sloveniji
                          i to uoči Dana žena, 07. ožujka 2020. godine.
                          Najavljen program predviđa dva dijela – u klasičnom
                          dijelu tenor će izvoditi najpoznatije operne arije u
                          pratnji orkestra i zbora, dok će drugi dio posvetiti
                          vlastitim najvećim hitovima i novim pjesmama s nedavno
                          objavljenog albuma „SI“ „. Na pozornici će mu se
                          pridružiti i sopran, gost pjevač i gostujući
                          glazbenik. Svoj novi album, kako ističe, doživio je
                          kao intimnu zbirku pjesama koje slave ljubav, vjeru i
                          obitelj. Snimljen je u njegovu domu u Italiji, a
                          producirao ga je legendarni Bob Ezrin, koji je
                          surađivao s Pink Floydom, Lou Reedom… Bocelli je u
                          Sloveniji prvi put nastupio 2016. godine, a publika je
                          u tada rasprodanoj dvorani Stožice uživala u vrhunskim
                          izvedbama ovog velikog umjetnika.
                        </p>
                        <p>
                          Slavni talijanski tenor do sada je snimio 15 albuma,
                          koje je prodao u više od 90 milijuna primjeraka, te
                          devet opera. Karijeru je započeo 1992. godine, a
                          ispočetka mu je puno pomogao Zucchero, koji je tražio
                          nekog tko bi s Lucianom Pavarottijem snimio demo
                          snimku za jedan duet. Bili su očarani Bocellijem I
                          njegovom izvedbom, a on se potom predstavio na Sanremo
                          festivalu. Ubrzo je slijedila i prva velika uloga u
                          Verdijevoj operi Macbeth, nakon čega su se uspjesi
                          nezaustavljivo počeli nizati. Ipak, najvećom
                          prekretnicom smatra se pjesma ''Con te partirò'', čija
                          je inačica u duetu sa sopranisticom Sarom Brightman
                          1996. godine zasjela na vrh glazbenih ljestvica i s
                          vremenom postala jedna od najpopularnijih pjesama svih
                          vremena. Kroz brojne nastupe i objavljene albume
                          Bocelli je stekao naklonost najšire publike,
                          glazbenika i glazbenih kritičara. Jedan je od rijetkih
                          koji je nastupao pred trojicom Papa, četiri američka
                          predsjednika, britanskom kraljevskom obitelji, a
                          koncerte je imao i u njujorškom Central parku,
                          londonskom Royal Albert Hallu, ispred egipatskih
                          piramida i ispod Eiffelova tornja u Parizu.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          Podijeli
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle1}>
                          Zatvori
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Media>
                </Media>
              </Media>
              <Media className={NovostiStyle.secondMedia}>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img3}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>
                    <h6 style={{ paddingLeft: 10 }}>
                      ZORICA KONDŽA I KLAPA CAMBI PREZENTIRAJU SVOJU MAGIJU U
                      ARSENALU{" "}
                      <a onClick={toggle2} href="#zoricaModal">
                        {" "}
                        <h7>Pročitaj više </h7>
                      </a>
                    </h6>

                    <Modal
                      isOpen={modal2}
                      toggle={toggle2}
                      id={NovostiStyle.zoricaModal}
                    >
                      <ModalHeader toggle={toggle2}>
                        ZORICA KONDŽA I KLAPA CAMBI PREZENTIRAJU SVOJU MAGIJU U
                        ARSENALU{" "}
                      </ModalHeader>
                      <ModalBody>
                        <img
                          src={img3}
                          className={NovostiStyle.modalMainImage}
                        ></img>
                        <p style={{ marginTop: 15 }}>
                          Ovogodišnju koncertnu sezonu otvorit će jedinstvena
                          glazbena diva Zorica Kondža u pratnji klape Cambi.
                          Koncert će se održati u petak 24. siječnja 2020.
                          godine s početkom u 21 sat.
                        </p>
                        <p>
                          <span>
                            Zorica, kao što većina vas zna, je jedna od legendi
                            hrvatske glazbene scene, splitska diva jedinstvenog
                            glasa, zbog kojeg je dobila nadimak “The Voice”.{" "}
                          </span>
                          <br />
                          <span>
                            Više od 3 desetljeća glazbene karijere, brojni
                            albumi, nagrade i priznanja među kojima je i nagrada
                            “Status Hrvatske glazbene unije za izniman doprinos
                            hrvatskoj glazbi”, hitovi pjesama kao što su “Zar je
                            voljeti grijeh”, “Ima jedan svijet”, “Najljepše je
                            kad si tu”, “Tako lako”, “Ti si moj san”, “Molitva
                            za tebe”, “Zauvijek”, “Sve je noćas protiv” i mnogi
                            drugi, zasigurno su garancija da ova glazbena
                            poslastica nikoga neće ostaviti ravnodušnim.
                          </span>
                        </p>
                        <p>
                          <span>
                            Klapa Cambi iz Splita jedno je od najpoznatijih
                            imena u svijetu klapske glazbe. Njihov dugogodišnji
                            kvalitetni rad, nebrojeni nastupi u Hrvatskoj i
                            inozemstvu, brojne osvojene nagrade te nedavni
                            rasprodani koncerti diljem Hrvatske najbolje govore
                            o zavidnoj razini klapske izvedbe i odličnom prijemu
                            kod publike.
                          </span>
                        </p>
                        <p>
                          <span>
                            Ovaj spoj jedinstvenih moćnih glasova i vječitih
                            hitova pun je pogodak za sve ljubitelje zabavne i
                            klapske glazbe!
                          </span>
                        </p>
                        <p>
                          <span>
                            Ne sumnjamo kako će u Arsenalu svojom kvalitetnom
                            izvedbom i šarmom Zorica Kondža i klapa Cambi
                            PRIUŠTITI KONCERT KOJI ĆE SE PAMTITI.
                          </span>
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          Podijeli
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle2}>
                          Zatvori
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Media>
                </Media>
              </Media>
              <Media className={NovostiStyle.secondMedia}>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img4}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>
                    <h6 style={{ paddingLeft: 10 }}>
                      EKSKLUZIVNO – TONY CETINSKI I #SAMOLJUBAV, 30.05.2020,
                      ZAGREB!{" "}
                      <a onClick={toggle3} href="#toniModal">
                        {" "}
                        <h7>Pročitaj više </h7>
                      </a>
                    </h6>

                    <Modal
                      isOpen={modal3}
                      toggle={toggle3}
                      id={NovostiStyle.toniModal}
                    >
                      <ModalHeader toggle={toggle3}>
                        EKSKLUZIVNO – TONY CETINSKI I #SAMOLJUBAV, 30.05.2020,
                        ZAGREB!{" "}
                      </ModalHeader>
                      <ModalBody>
                        <img
                          src={img4}
                          className={NovostiStyle.modalMainImage}
                        ></img>
                        <p style={{ marginTop: 15 }}>
                          Izuzetno uspješna turneja #samoljubav{" "}
                          <a
                            href="https://www.facebook.com/tonycetinskiofficial/?epa=SEARCH_BOX"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/tonycetinskiofficial/?epa%3DSEARCH_BOX&amp;source=gmail&amp;ust=1576666730321000&amp;usg=AFQjCNElLjF5Z8vSFW1XvR1290duV7io-w"
                          >
                            Tonyja Cetinskog
                          </a>{" "}
                          doživljava svoj vrhunac.
                        </p>
                        <p align="center">
                          Nakon što je u sklopu spomenute turneje, obišao gotovo
                          cijelu regiju, ali i svijet, na red je došlo nešto
                          zaista posebno.{" "}
                        </p>
                        <p align="center">
                          <strong>
                            I zato, vam ekskluzivno otkrivamo, glazbeni događaj,
                            koji se ne propušta - #samoljubav i Tony Cetinski,
                            30.05.2020., u Areni Zagreb!
                          </strong>
                        </p>
                        <p align="center">
                          Tridesetogodišnja karijera, brojne nagrade i
                          priznanja, rasprodane dvorane, Arene, bezvremenski
                          hitovi, ali i ono najvrijednije, ljubav svoje publike,
                          samo je mali dio Tonyjevog glazbenog opusa.
                          <strong> </strong>
                        </p>
                        <p align="center">
                          Sve ovo još je jedna potvrda Tonyjeve vrijednosti, kao
                          i najveće{" "}
                          <strong>
                            regionalne koncertne turneje #samoljubav
                          </strong>
                          , te svega što radi zajedno sa svojom cijelom ekipom.
                        </p>
                        <p align="center">
                          Sudeći po dosadašnjim održanim koncertima u sklopu
                          turneje, Tony je publici iznio savršeni glazbeni
                          program, koji apsolutno nikoga nije ostavio
                          ravnodušnim.
                        </p>
                        <p align="center">
                          Fantastično balansirajući pjesmama, i odličnim
                          HUMOROM, IZ KONCERTA U KONCERT, ZADOVOLJAVA SVE
                          glazbene apetite publike, koja sa sobom ponese samo
                          najljepše uspomene.
                        </p>
                        <p align="center">
                          {" "}
                          <em>
                            ' #samoljubav tour, dosada je vidjelo preko pola
                            milijuna ljudi u regiji, ali i svijetu! Na red
                            dolazi i Zagreb, 30.05.2020.!
                          </em>
                        </p>
                        <p align="center">
                          <em>
                            {" "}
                            Svoju ulaznicu, možete kupiti putem sustava
                            Eventim.hr, već danas
                            <br />
                            i, nemojte kasnije reći, da vas nismo na vrijeme
                            upozorili
                          </em>
                          <em>', poručio je Tony Cetinski</em>
                          <em> </em>
                        </p>
                        <p align="center">
                          <strong>
                            I zato, već sada, datum 30.05.2020., upišite u svoje
                            kalendare, jer toga dana, #samoljubav događa se u
                            Areni Zagreb, na koncertu Tonyja Cetinskog!
                          </strong>{" "}
                        </p>{" "}
                        <p>
                          Tony Cetinski jedan je od najnagrađivanijih i
                          zasigurno jedno od najvećih regionalnih imena pop
                          scene.{" "}
                        </p>
                        <p>
                          Tijekom tridesetogodišnje karijere, Tony Cetinski
                          ostvario je niz fantastičnih uspjeha, a broj domaćih i
                          stranih višestrukih nagrada i priznanja struke i
                          publike, teško je i pobrojati.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          Podijeli
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle3}>
                          Zatvori
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Media>
                </Media>
              </Media>
              <Media className={NovostiStyle.secondMedia}>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img5}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>
                    <h6 style={{ paddingLeft: 10 }}>
                      MASSIMO - GLAS KOJI POPUT KUPIDOVE STRIJELE SPAJA,
                      SPECIJALNO ZA VAS{" "}
                      <a onClick={toggle4} href="#massimoModal">
                        {" "}
                        <h7>Pročitaj više </h7>
                      </a>
                    </h6>

                    <Modal
                      isOpen={modal4}
                      toggle={toggle4}
                      id={NovostiStyle.massimoModal}
                    >
                      <ModalHeader toggle={toggle4}>
                        MASSIMO - GLAS KOJI POPUT KUPIDOVE STRIJELE SPAJA,
                        SPECIJALNO ZA VAS{" "}
                      </ModalHeader>
                      <ModalBody>
                        <img
                          src={img5}
                          className={NovostiStyle.modalMainImage}
                        ></img>
                        <p style={{ marginTop: 15 }}>
                          „U tvom poljupcu je za mene spas“, „Oba nam srca spaja
                          isti osjećaj“, „Mogu čuti srcem“, „Ljubit ću dok usne
                          mi ne izgore“, samo su neki od stihova kojima je dušu
                          udahnuo Massimo. Glas koji poput Kupidove strijele
                          spaja parove, još će jednom Valentinovo učiniti
                          posebnim danom.
                        </p>
                        <p>
                          Iako njegova slavna pjesma govori o samo jednom danu
                          ljubavi, Massimo će uvijek naglasiti da ljubav treba
                          pokazivati svaki dan. Ali, nekada ju treba i posebno
                          obilježiti. To ćemo i učiniti 14. veljače u Centru
                          Zamet u Rijeci gdje će jedan od najljepših muških
                          glasova u Hrvatskoj predvoditi najveću proslavu
                          ljubavi. Nebrojeni ljubavni hitovi nizat će se pred
                          riječkom publikom kojoj se Massimo iznimno veseli.
                        </p>
                        <p>
                          „ Ljubav se pokazuje svaki dan. Svi znaju da ja nikada
                          ne napustim dom, a da nisam poljubio suprugu. To su
                          mali znakovi pažnje koji su iznimno važni. Isto tako,
                          važno je ljubavi dati poseban prostor, posebno
                          značenje. To ćemo zajedno učiniti u Centru Zamet.
                          Učinit ćemo taj dan, tu večer – nezaboravnom" –
                          najavljuje Massimo.
                        </p>{" "}
                        <p>
                          Massimo Savić hrvatski je glazbenik i pjevač.
                          <br />
                          <br />
                          Glazbenu karijeru započinje 1983. godine kao član new
                          wave/synth-pop grupe „Dorian Gray“. Grupa je postala
                          poznata zahvaljujući albumima „Sjaj u tami“ i „Za
                          tvoje oči“, obradi pjesme „The Sun Ain't Gonna Shine
                          Anymore“ te prepoznatljivom glasu Massima Savića.
                          <br />
                          <br />
                          Nakon što se grupa razišla, Massimo je nastavio
                          uspješnu samostalnu karijeru i objavljuje nekoliko
                          albuma od kojih je jedan, „Elements“, na engleskom
                          jeziku.
                          <br />
                          <br />
                          Nakon stanke od pet godina, objavljuje novi album pod
                          imenom „Massimo“, a uskoro i izvrsno prihvaćene albume
                          „Vještina“, „Vještina 2“ i „Dodirni me slučajno“.
                          <br />
                          <br />
                          Tokom cijele karijere, Massimo održava uspješne
                          koncerte u Hrvatskoj i u regiji. Jedni od
                          najuspješnijih koncerata sigurno su „Massimo sings
                          Sinatra“.
                        </p>
                        <p>
                          Cijelu 2013. godinu Massimo posvećuje obilježavanju 30
                          godina karijere koja je otpočela prvim Massimovim
                          solističkim koncertom u pulskoj Areni 17.8.2013.
                          Koncert za pamćenje i najveći izazov u Massimovoj
                          karijeri, kako koncertno tako i produkcijski, prošao
                          je besprijekorno pred prepunim Amfiteatrom. Ovaj
                          raskošni spektakl zabilježen je na posebnom DVD
                          izdanju“Massimo live: Arena Pula“, a HTV je sam
                          KONCERT PRENOSIO IZRAVNO ŠTO SVJEDOČI O GRANDIOZNOSTI
                          i značaju projekta.
                        </p>
                        <p>
                          Svoju energiju i strast prema live nastupima Massimo
                          prenosi i u 2014. godinu; na Valentinovo 14. veljače
                          Massimo rasprodaje zagrebački Dom sportova i pokazuje
                          kako neprikosnoveno vlada velikim pozornicama. Massimo
                          se čak dva puta vraćao na bis jer je publika naprosto
                          odbijala napustiti dvoranu.
                        </p>
                        <p> </p>
                        <p>
                          U novu 2015. godinu Massimo ulazi svečano! Krajem
                          siječnja objavljuje dugoočekivani album “1 dan
                          ljubavi” s kojeg su singlovi “Suze nam stale na put” i
                          “Ispod nekog drugog neba” poharali radijski eter. Na
                          albumu je surađivala provjerena ekipa producenata –
                          Nikša Bratoš, Predrag Martinjak i Ivan Popeskić, a od
                          autora na novom uvrštene su pjesme Arsena Dedića,
                          Predraga Martinjaka, Eni Kondić, Amila Loje, Zorana
                          Predina, Dalibora Prochazke i Dade Pastuovića –
                          Newere.
                        </p>
                        <p> </p>
                        <p>
                          SAD VEĆ TRADICIONALNI MASSIMOV KONCERT U DOMU SPORTOVA
                          na Valentinovo 2015. pretvara se u vrhunski
                          audio-vizualni spektakl, rijetko viđen među domaćim
                          produkcijama. Massimo predstavlja album “1 dan
                          ljubavi” te brojne hitove svoje bogate karijere. Na
                          velebnu, vlastitim kreacijama osmišljenu, pozornicu
                          Doma sportova kao specijalni gost pridružuje mu se i
                          svjetski poznati gitarist David Rhodes, dugogodišnji
                          suradnik Petera Gabriela. Koncert koji je trajao preko
                          dva i pol sata oduševio je publiku te pokazao da se
                          Massimo nikada ne ponavlja.
                        </p>
                        <p> </p>
                        <p>
                          SVAKI KONCERT POSEBAN JE, SVJEŽ I INOVATIVAN DOGAĐAJ
                          koji pomiče granice, kako kreativne tako i
                          produkcijske. Turneja “1 dan ljubavi” nastavlja se
                          koncertima u Hrvatskoj, ali i u regiji. 20.02.2015.
                          Massimo rasprodaje beogradski Sava centar čime još
                          jednom potvrđuje svoj zvjezdani status i popularnost i
                          izvan granica Hrvatske. Nedugo potom Massimo u
                          splitskoj Spaladium Areni biva ovjenčan još jednim
                          Porinom za najbolju mušku vokalnu izvedbu, čime
                          potvrđuje status najnagrađivanijeg u toj kategoriji s
                          ukupno 9 osvojenih statua.
                        </p>
                        <p> </p>
                        <p>
                          Nekoliko koncerata u Bosni i Hercegovini, te
                          Ljubljani, nastavljaju se na viziju da se pjesme s
                          albuma “1 dan ljubavi” predstave diljem regije. Plan
                          je to koji se još ostvaruje, jer je Massio odlučiti
                          proširiti svoje horizonte i okušati se u ulozi
                          glazbenog mentora. Zajedno sa Tončijem Huljićem,
                          Željkom Joksimovićem i Aleksandrom Kovač početkom
                          2015. kreće u svoju televizijsku avanturu i prihvaća
                          ulogu člana žirija u svjetski poznatom glazbenom TV
                          projektu “X Factor”, kod nas nazvanom “X Factor
                          Adria”.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          Podijeli
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle4}>
                          Zatvori
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Media>
                </Media>
              </Media>
              <Media
                className={NovostiStyle.secondMedia}
                id={NovostiStyle.last}
              >
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img6}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>
                    <h6 style={{ paddingLeft: 10 }}>
                      PARNI VALJAK STIŽE U ARENU ZAGREB 18.4.2020.
                      #TURNEJARUNDA44{" "}
                      <a onClick={toggle5} href="#parniValjakModal">
                        {" "}
                        <h7>Pročitaj više </h7>
                      </a>
                    </h6>

                    <Modal
                      isOpen={modal5}
                      toggle={toggle5}
                      id={NovostiStyle.parniValjakModal}
                    >
                      <ModalHeader toggle={toggle5}>
                        PARNI VALJAK STIŽE U ARENU ZAGREB 18.4.2020.
                        #TURNEJARUNDA44{" "}
                      </ModalHeader>
                      <ModalBody>
                        <img
                          src={img6}
                          className={NovostiStyle.modalMainImage}
                        ></img>
                        <p style={{ marginTop: 15 }}>
                          Parni valjak hrvatska je rock grupa. Sastav čine
                          Husein Hasanefendić – Hus, Aki Rahimovski, Marijan
                          Brkić – Brk, Zorislav Preksavec – Prexi, Dalibor
                          Marinković – Dado, Berislav Blažević – Bero, no
                          tijekom postojanja kroz sastav su prošlo različiti i
                          mnogobrojni glazbenici (npr. Jurica Pađen, Bajaga,
                          Johnny Štulić...).
                        </p>
                        <p>
                          <br />
                          Parni valjak je jedan od najvećih, odnosno
                          najpopularnijih zagrebačkih pop-rock sastava. Osnovan
                          je 1975., a na sceni je do danas, s malom pauzom 1988.
                          godine te četverogodišnjom pauzom od 2005. do 2009.
                          godine. Ova je grupa jedna od "pokretača" čitavog vala
                          rock i pop-rock grupa na ovim prostorima, a izbacila
                          je mnogo hitova, poput: "Lutka za bal", "Stranica
                          dnevnika", "Neda", "Moje dnevne paranoje", "Uhvati
                          ritam", "Jesen u meni", "Ugasi me", "Sve još miriše na
                          nju", "Zastave", "Sunčanom stranom" i drugih.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          Podijeli
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle5}>
                          Zatvori
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Media>
                </Media>
              </Media>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NovostiPage

export const query = graphql`
  query {
    glazba: file(relativePath: { eq: "slika1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    kazaliste: file(relativePath: { eq: "naslovnica_kazaliste.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sport: file(relativePath: { eq: "naslovnica_sport.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ostalo: file(relativePath: { eq: "naslovnica_ostalo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    koncert: file(relativePath: { eq: "naslovna_konc.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    cultureIcon: file(relativePath: { eq: "celine.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sportIcon: file(relativePath: { eq: "sport.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    filmIcon: file(relativePath: { eq: "film.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
