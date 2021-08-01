import React from 'react';
import {Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import {useTranslation} from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import {Link} from "react-router-dom";

const ruText = "<div class=\"col-12\">\n" +
    "\t\t\t\t\t<p>\n" +
    "\tСайт easy-credit.com.ua (далее в тексте — Сайт).</p>\n" +
    "<p>\n" +
    "\tПосетитель — физическое лицо, которое в Интернете посещает Сайт (easy-credit.com.ua).</p>\n" +
    "<p>\n" +
    "\tВаша конфиденциальность, безопасность очень важна для нас. Любая информация, полученная от Посетителя, не будет раскрыта и оценивается как конфиденциальная, она не будет продана или использована иным образом, причинив вред Посетителям.</p>\n" +
    "<p>\n" +
    "\tПосетители Сайта имеют право без ограничений, и введя данные, посещать разделы Сайта и ознакомляться с информационными материалами</p>\n" +
    "<p>\n" +
    "\tПри посещении Сайта, информация об IP адресе&nbsp; Посетителя, дате и времени будет использована, для анализа тенденции Посетителей для внутреннего пользования</p>\n" +
    "<p>\n" +
    "\tПосещая Сайт, его Посетитель соглашается&nbsp; с условиями&nbsp; Cookies, Защиты данных, Пользования и э-почты. Принимается, что посетитель с данными условиями ознакомился и принял их.</p>\n" +
    "<p>\n" +
    "\tПрекратите использование Сайта, если у Вас есть претензии к правилам и&nbsp; не приемлемо их содержание, ссылка(и) на авторские права.</p>\n" +
    "<p>\n" +
    "\tЛюбая информация, полученная от Посетителя, не будет раскрыта и оценивается как конфиденциальная, она не будет продаваться или использоваться иным образом, причинив вред Посетителям.</p>\n" +
    "\n" +
    "\t\t\t\t\t</div>";
const uaText = "<div class=\"col-12\">\n" +
    "\t\t\t\t\t<p style=\"text-align: justify;\">\n" +
    "\tСайт easy-credit.com.ua (далі в тексті - Сайт).</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВідвідувач - фізична особа, яка в Інтернеті відвідує Сайт (easy-credit.com.ua).</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВаша конфіденційність, безпека дуже важлива для нас. Будь-яка інформація, отримана від Відвідувача, не буде розкрита і оцінюється як конфіденційна, вона не буде продана або використана іншим чином, заподіявши шкоду Відвідувачам.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВідвідувачі сайту мають право без обмежень, і ввівши дані, відвідувати розділи Сайту і ознайомлюватися з інформаційними матеріалами.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tПри відвідуванні Сайту, інформація про IP адресу Відвідувача, дату і час буде використана для аналізу тенденції Відвідувачів для внутрішнього користування.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tВідвідуючи Сайт, його Відвідувач погоджується з умовами Cookies, Захисту даних, Користування і е-пошти. Вважаеться, що відвідувач з даними умовами ознайомився і прийняв їх.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tПрипиніть використання Сайту, якщо у Вас є претензії до правил і не прийнятний їх зміст, посилання на авторські права.</p>\n" +
    "<p style=\"text-align: justify;\">\n" +
    "\tБудь-яка інформація, отримана від Відвідувача, не буде розкрита і оцінюється як конфіденційна, вона не буде продаватися або використовуватися іншим чином, заподіявши шкоду Відвідувачам.</p>\n" +
    "\n" +
    "\t\t\t\t\t</div>"

const Security = props => {
    const {i18n} = useTranslation();
    return (
        <>
            <Container>
                <p className='fs-3 mt-3 text-center fw-light'>Защита данных</p>
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


export default Security;