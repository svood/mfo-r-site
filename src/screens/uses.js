import React, {useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import {useTranslation} from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import ReactGA from "react-ga";

const ruText = "<div class=\"col-12\">\n" +
    "\t\t\t\t\t<p style=\"text-align: justify;\">\n" +
    "\tВласником і адміністратором он-лайн сайту easy-credit.com.ua (далі в тексті - Сайт) є \"easy-credit.com.ua\" (далі в тексті - Власник). Власник залишає за собою право доповнювати, змінювати або іншим чином змінювати інформацію і правила на Сайті, як візуально, так і за змістом. Так само, Власник має право в будь-який час обмежити вільний доступ до Сайту.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВідвідувач - фізична особа, яка в Інтернеті відвідує Сайт (easy-credit.com.ua).</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВідвідавши Сайт, його Відвідувач погоджується з умовами Cookies, захисту даних, Користування і Е-пошти. Вважається, що Відвідувач ознайомився з даними умовами і приймає їх.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tПрипиніть використання Сайту, якщо у Вас є претензії до правил і не прийнятний їх зміст, посилання на авторські права. Спори, що виникають у Відвідувачів, при використанні Сайту, будуть розглянуті в порядку, передбаченому в нормативних актах Латвійської Республіки.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tЗміст Сайту носить інформативний характер. Інформація на Сайті не містить і не може бути розглянута як конкретна пропозиція, конкретний продукт або послуга і т.п.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tНа Сайті находиться узагальнена інформація про послуги, що пропонуються та надаються іншими юридичними особами. Конкретні, деталізовані і такі, що пояснюють, відповіді на питання, що цікавлять Відвідувача (наприклад, вказівки про прострочені платежі, вказівки на незавершені платежі, кодекс діяльності і політика про відповідальне кредитування, розкриття ынформації про оплату, в тому числі, про річні процентні ставки, політика відновлення, контактна інформація та ін.), які виникли при відвідуванні Сайту, доступні на домашній сторінці певного постачальника послуг.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tІнформацію, розміщену на сайті, і здійснювані функції не гарантуємо, а так само не беремо відповідальність за можливі помилки Відвідувача, також, не несемо відповідальність за придатність інформації, розміщеної на Сайті, кожному Відвідувачу.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tРозкрита інформація, носить інформативний характер, і Власник не несе відповідальність за прийняті рішення або за вжиті заходи щодо Відвідувачів Сайту, які здійснені після відвідування Сайту, і з посиланням на розміщений на Сайті обсяг інформації і рекомендації.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tНадана на Сайті інформація окремо не перевіряється, вона розміщується на підставі надійних інформаційних джерел.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tЗазначені на Сайті витрати, розміщені для інформаційних цілей, якщо тільки на Сайті не зазначена інша інформація.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВитрати рекомендуємо перевірити до здійснення конкретної угоди на домашній сторінці конкретного постачальника послуг.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВласник має право на Сайті розмістити посилання на інші домашні сторінки, що належать або знаходяться під контролем інших фізичних і / або юридичних осіб, на підставі цього Сайт може містити такі види зовнішніх сайтів, в т.ч. доступ до домашніх сторінок третіх осіб, а так само може пропонувати або інформувати про пропоновані продукти, послуги тощо третіми особами. За зміст домашніх сторінок, що пропонуються третіми особами, в т.ч. за зміст запропонованих ними продуктів і послуг Власник не бере на себе відповідальність і не виконує їх перевірку.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tСайт не несе відповідальності за безпеку інших домашніх сторінок. Ви повинні усвідомлювати, що безпека таких сайтів може відрізнятися від Сайту.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВласник Сайту не бере на себе відповідальність за збитки (прямі, непрямі або випадкові), які виникли від використання Сайту, а так само не бере на себе відповідальність за доступність інформації Сайту в мережі.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tІнформація, яка заведена на Сайті, розміщується в бланк Заявки і не розголошується третім особам.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tШнформацію, що знаходиться на Сайті, можна подивитися і роздрукувати тільки для особистих, некомерційних потреб.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tЛого, розміщені на Сайті, торгові знаки та інші авторські роботи є авторським матеріалом, який захищається діючими нормативними актами Латвійської Республіки. Даний авторський матеріал є особистим майном Власника або іншої фізичної / юридичної особи.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\t<strong>Ніхто інший, за винятком \"easy-credit.com.ua\", не має права переробляти, змінювати інформацію, що знаходиться на даному Сайті. Будь-яка публікація інформації з сайту або інше її використання заборонено без попереднього дозволу \"easy-credit.com.ua\". Якщо порушені авторські права, в разі не дотримання умов і в залежності від характеру порушення і наслідків порушник притягується до встановленої в нормативних актах Латвійської Республіки цивільної, адміністративної або кримінальної відповідальності.</strong></p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tЗаборонено здійснювати будь-які дії, спрямовані на безпеку, стабільність і швидкість системного функціонування Сайту.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВласник має право в будь-який час ввести інші умови використання Сайту, які набирають чинності в момент, коли нові умови будуть опубліковані на Сайті. Використання Сайту, в т.ч. всієї розміщеної інформації після змін, означає, що користувач погодився з усіма умовами Сайту.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tУмови Сайту не відносяться до домашніх сторінок інших фізичних / юридичних осіб.</p>\n" +
    "<p style=\"text-align: justify;\">\n" + "\t\t\t\t\t</div>";
const uaText = "<div className=\"col-12\">\n" +
    "    <p\n" +
    "    style=\"text-align: justify;\">\n" +
    "    Власником і адміністратором он-лайн сайту easy-credit.com.ua (далі в тексті - Сайт) є \"easy-credit.com.ua\" (далі в\n" +
    "    тексті - Власник). Власник залишає за собою право доповнювати, змінювати або іншим чином змінювати інформацію і\n" +
    "    правила на Сайті, як візуально, так і за змістом. Так само, Власник має право в будь-який час обмежити вільний\n" +
    "    доступ до Сайту.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Відвідувач - фізична особа, яка в Інтернеті відвідує Сайт (easy-credit.com.ua).</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Відвідавши Сайт, його Відвідувач погоджується з умовами Cookies, захисту даних, Користування і Е-пошти.\n" +
    "        Вважається, що Відвідувач ознайомився з даними умовами і приймає їх.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Припиніть використання Сайту, якщо у Вас є претензії до правил і не прийнятний їх зміст, посилання на авторські\n" +
    "        права. Спори, що виникають у Відвідувачів, при використанні Сайту, будуть розглянуті в порядку, передбаченому в\n" +
    "        нормативних актах Латвійської Республіки.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Зміст Сайту носить інформативний характер. Інформація на Сайті не містить і не може бути розглянута як конкретна\n" +
    "        пропозиція, конкретний продукт або послуга і т.п.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        На Сайті находиться узагальнена інформація про послуги, що пропонуються та надаються іншими юридичними особами.\n" +
    "        Конкретні, деталізовані і такі, що пояснюють, відповіді на питання, що цікавлять Відвідувача (наприклад,\n" +
    "        вказівки про прострочені платежі, вказівки на незавершені платежі, кодекс діяльності і політика про\n" +
    "        відповідальне кредитування, розкриття ынформації про оплату, в тому числі, про річні процентні ставки, політика\n" +
    "        відновлення, контактна інформація та ін.), які виникли при відвідуванні Сайту, доступні на домашній сторінці\n" +
    "        певного постачальника послуг.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Інформацію, розміщену на сайті, і здійснювані функції не гарантуємо, а так само не беремо відповідальність за\n" +
    "        можливі помилки Відвідувача, також, не несемо відповідальність за придатність інформації, розміщеної на Сайті,\n" +
    "        кожному Відвідувачу.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Розкрита інформація, носить інформативний характер, і Власник не несе відповідальність за прийняті рішення або\n" +
    "        за вжиті заходи щодо Відвідувачів Сайту, які здійснені після відвідування Сайту, і з посиланням на розміщений на\n" +
    "        Сайті обсяг інформації і рекомендації.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Надана на Сайті інформація окремо не перевіряється, вона розміщується на підставі надійних інформаційних\n" +
    "        джерел.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Зазначені на Сайті витрати, розміщені для інформаційних цілей, якщо тільки на Сайті не зазначена інша\n" +
    "        інформація.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Витрати рекомендуємо перевірити до здійснення конкретної угоди на домашній сторінці конкретного постачальника\n" +
    "        послуг.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Власник має право на Сайті розмістити посилання на інші домашні сторінки, що належать або знаходяться під\n" +
    "        контролем інших фізичних і / або юридичних осіб, на підставі цього Сайт може містити такі види зовнішніх сайтів,\n" +
    "        в т.ч. доступ до домашніх сторінок третіх осіб, а так само може пропонувати або інформувати про пропоновані\n" +
    "        продукти, послуги тощо третіми особами. За зміст домашніх сторінок, що пропонуються третіми особами, в т.ч. за\n" +
    "        зміст запропонованих ними продуктів і послуг Власник не бере на себе відповідальність і не виконує їх\n" +
    "        перевірку.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Сайт не несе відповідальності за безпеку інших домашніх сторінок. Ви повинні усвідомлювати, що безпека таких\n" +
    "        сайтів може відрізнятися від Сайту.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Власник Сайту не бере на себе відповідальність за збитки (прямі, непрямі або випадкові), які виникли від\n" +
    "        використання Сайту, а так само не бере на себе відповідальність за доступність інформації Сайту в мережі.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Інформація, яка заведена на Сайті, розміщується в бланк Заявки і не розголошується третім особам.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Шнформацію, що знаходиться на Сайті, можна подивитися і роздрукувати тільки для особистих, некомерційних\n" +
    "        потреб.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Лого, розміщені на Сайті, торгові знаки та інші авторські роботи є авторським матеріалом, який захищається\n" +
    "        діючими нормативними актами Латвійської Республіки. Даний авторський матеріал є особистим майном Власника або\n" +
    "        іншої фізичної / юридичної особи.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        <strong>Ніхто інший, за винятком \"easy-credit.com.ua\", не має права переробляти, змінювати інформацію, що\n" +
    "            знаходиться на даному Сайті. Будь-яка публікація інформації з сайту або інше її використання заборонено без\n" +
    "            попереднього дозволу \"easy-credit.com.ua\". Якщо порушені авторські права, в разі не дотримання умов і в\n" +
    "            залежності від характеру порушення і наслідків порушник притягується до встановленої в нормативних актах\n" +
    "            Латвійської Республіки цивільної, адміністративної або кримінальної відповідальності.</strong></p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Заборонено здійснювати будь-які дії, спрямовані на безпеку, стабільність і швидкість системного функціонування\n" +
    "        Сайту.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Власник має право в будь-який час ввести інші умови використання Сайту, які набирають чинності в момент, коли\n" +
    "        нові умови будуть опубліковані на Сайті. Використання Сайту, в т.ч. всієї розміщеної інформації після змін,\n" +
    "        означає, що користувач погодився з усіма умовами Сайту.</p>\n" +
    "    <p style=\"text-align: justify;\">\n" +
    "        Умови Сайту не відносяться до домашніх сторінок інших фізичних / юридичних осіб.</p>\n" +
    "</div>"

const Uses = props => {
    const {i18n} = useTranslation();

    return (
        <>
            <Container>
                <p className='fs-3 mt-3 text-center fw-light'>Використання</p>
            </Container>
            <Container className='bg-light p-4'>
                <Row>
                    {ReactHtmlParser(i18n.language === "ru" ? ruText : uaText)}
                </Row>
            </Container>
            <Footer/>
        </>
    );
};


export default Uses;
