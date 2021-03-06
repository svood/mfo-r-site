import './App.scss';
import Main from "./screens";
import Faq from "./screens/faq";
import Info from "./screens/info";
import Cookies from './screens/cookies';
import Uses from './screens/uses'
import Security from './screens/security'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React, {useEffect} from "react";
import {Button, ButtonGroup, Container, Nav, Navbar} from "react-bootstrap";
import './i18n';
import {useTranslation} from 'react-i18next';
import {LinkContainer} from 'react-router-bootstrap'
function App() {
    const {t, i18n} = useTranslation();
    const changeLang = (lang) => {
        i18n.changeLanguage(lang).then()
    }
    return (
        <div className=" pb-5 h-auto">
            <Router>
                <Navbar bg="light" expand="lg" className='border-bottom' collapseOnSelect={true}>
                    <Container>
                        <Navbar.Brand><img width="200" src={"logo.png"} className="d-inline-block align-top"
                                           alt="Eazy-Credit"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <LinkContainer to="/">
                                    <Nav.Link>{t('Рейтинг МФО')}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/faq">
                                    <Nav.Link>{t('Часто задаваемые вопросы')}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/info">
                                    <Nav.Link>{t('Общие сведения')}</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <form className="d-flex ms-auto">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant={i18n.language === "uk" ? "secondary" : "outline-primary"}
                                            onClick={() => {
                                                changeLang('uk')
                                            }}>укр</Button>
                                    <Button variant={i18n.language === "ru" ? "secondary" : "outline-primary"}
                                            onClick={() => {
                                                changeLang('ru')
                                            }}>рус</Button>
                                </ButtonGroup>
                            </form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/"
                           component={(props) => <Main {...props} />}/>
                    <Route path="/faq"
                           component={(props) => <Faq {...props}/>}/>
                    <Route path="/info"
                           component={(props) => <Info {...props}/>}/>
                    <Route path="/cookies"
                           component={(props) => <Cookies {...props}/>}/>
                    <Route path="/uses"
                           component={(props) => <Uses {...props}/>}/>
                    <Route path="/security"
                           component={(props) => <Security {...props}/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
