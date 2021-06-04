/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import axios from "axios";
import styled from "styled-components";
import adban from "./assets/adban.png";
import soluni from "./assets/soluni.png";
import Header from "./components/Header";
import Input from "./components/Input";
import ImgCard from "./components/ImgCard";
import Card from "./components/Card";
import Link from "./components/Link";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

const Center = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:50px;
`

const ImgCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 220px 220px 220px 220px;
    grid-template-rows: 180px 180px 180px;
`

const CardWrapper = styled.div`
  display: grid;
  margin-left: 20px;
  grid-template-columns: 200px 200px;
	grid-template-rows: 95px 95px 95px 95px 95px 95px;
`

const Navigation = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 250px;
`

const Menu = styled.a`
  background-color: #e0e0e0;
  border-radius: 30px;
  height:40px;
  width: 160px;
  outline: none;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  color: #55585c;
  text-decoration: none;
  margin-bottom: 10px;
  :active{
    background-color: #4E81C0;
    color: white;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCards: [{on_img:"https://static.ebs.co.kr/images/public/2020/12/30/10/55/0/a12830b1-2348-4fa2-873b-13a722b00335.png", off_img:"https://static.ebs.co.kr/images/public/2020/12/30/10/55/0/32d5e153-e3e3-483d-9220-1b9db4e4d0ca.png", description:"EBS 명품 다큐멘터리"}],
      cards: [{name:"초등", link:"http://ebs.co.kr"}],
      notice_1: [{article:"1-1번 글"}, {article:"1-2번 글"}, {article:"1-3번 글"}, {article:"1-4번 글"}, {article:"1-5번 글"}],
      notice_2: [{article:"2-1번 글"}, {article:"2-2번 글"}, {article:"2-3번 글"}, {article:"2-4번 글"}, {article:"2-5번 글"}],
      notice_3: [{article:"3-1번 글"}, {article:"3-2번 글"}, {article:"3-3번 글"}, {article:"3-4번 글"}, {article:"3-5번 글"}],
      menu: 0
    }
  }
  
  menuChange = (change) => {
    this.setState({menu: change})
  }

  // getCategory = async () => {
  //   try{
  //     const { cards } = await axios.get("https://localhost:8082/category");
  //     this.setState({ cards });
  //   }
  //   catch(e){
  //     console.log("getCategroy error");
  //   }
  // }

  // componentDidMount() {
  //   this.getCategory();
  // }

  render() {
    const {imgCards, cards, menu} = this.state;
    const contents = {
      0: this.state.notice_1,
      1: this.state.notice_2,
      2: this.state.notice_3,
    }
    return(
      <Wrapper>
        <Header/>
        <Center>
          <Input/>
          <Container>
            <ImgCardWrapper>
              {imgCards.map(card => (
                <ImgCard
                  off_img={card.off_img}
                  on_img={card.on_img}
                  description={card.description}
                />
              ))}
            </ImgCardWrapper>
            <CardWrapper>
              {cards.map(card => (
                <Card
                  link={card.link}
                  name={card.name}
                />
              ))}
            </CardWrapper>
          </Container>
          <img src={adban} width='1000px' height='100px' alt='adban' style={{marginTop:"40px", marginBottom:"25px"}}></img>
        </Center>
        <Navigation>
          <div id="notice" style={{display: "flex"}}>
            <Wrapper>
              <Menu id='target0' onClick={()=>this.menuChange(0)}>서비스 공지</Menu>
              <Menu id='target1' onClick={()=>this.menuChange(1)}>편성 공지</Menu>
              <Menu id='target2' onClick={()=>this.menuChange(2)}>EBS 공고</Menu>
            </Wrapper>
            <Wrapper style={{width: "330px"}}>
              <ul>
                {contents[menu].map(content => (
                  <li>{content.article}</li>
                ))}
              </ul>
            </Wrapper>
          </div>
          <Link/>
          <Wrapper><img src={soluni} width="300px" height="205px" alt="soluni" style={{marginLeft: "50px"}}/></Wrapper>
        </Navigation>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
