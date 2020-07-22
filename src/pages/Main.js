import React from 'react';
import Cookies from 'js-cookie';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: url('/images/bg.jpeg');
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgb(20, 20, 20, 0.9);
  width: 70%;
  height: 80%;
  margin-bottom: 100px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  h1 {
    color: ${(props) => props.theme.mainColor};
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const MainLink = styled.div`
  width: 50%;
  // height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  width: 60%;
  height: 60px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  background-color: Transparent;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.3s;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.start ? props.theme.subColor : props.theme.thirdColor};
    color: ${(props) =>
      props.start ? props.theme.subColor : props.theme.thirdColor};
  }
`;

const Main = () => {
  let token = Cookies.get('token');

  return (
    <StyledMain>
      <Container>
        <Section>
          <Fade bottom>
            <h1>About ANJERI</h1>
            <p>
              僕は今無口な空に 吐き出した ＂孤獨＂ という名の雲
              その雲が雨を降らせて虹が出る どうせつかめないのに 初めてのキスを
              繰り返して欲しくて 愛が僕に?みついて 離さないというけれど
              寂しさの形は變わらないみたいだ 舞い上がってゆけ いつか夜の向こう側
              うんざりするほど 光れ君の歌 優しさが濁った日?の
              憂鬱は滿員電車みたいだ 冷めた溫もりを 無闇にほうりなげた
            </p>
            <p>
              僕が愛を信じても きっといなくなるんだろ
              それならいらない悲しすぎるから さようならさえも
              うまく言えなそうだから 手を降る變わりに 抱き締めてみたよ
            </p>
            <p>
              流れ星を見た 流れ星を見た 願う僕の歌 側にいるだけでほんと
              幸せだったな 側にいるだけで ただそれだけでさ 愛が僕に?みついて
              離さないというけれど 寂しさの形は 變わらないみたいだ
              舞い上がってゆけ いつか夜の向こう側 うんざりするほど 光れ君の歌
              もう傷つかない もう傷つけない 光れ君の歌
            </p>
          </Fade>
        </Section>
        <MainLink>
          {token ? (
            <Button color="white" start="true" as="a" href="/dress">
              START
            </Button>
          ) : (
            <Button color="white" as="a" href="/signin">
              SIGNIN
            </Button>
          )}
        </MainLink>
      </Container>
    </StyledMain>
  );
};

export default Main;
