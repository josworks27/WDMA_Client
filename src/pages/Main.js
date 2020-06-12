import React from 'react';
import Cookies from 'js-cookie';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: url('https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
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
              ウェディングドレスは結婚式のための「ドレスというだけではなく一生の思い出に残る人生最高の一着として
              花嫁らしさがあふれるデザインと最上の手仕事で彩りたいその想いをかたちにしたのがアンジェリのウェディングドレスです。
            </p>
            <p>
              デザイナー森田圭伊子が全デザインを手がけるサロンには、毎年新作発表するレンタルドレスからオーダードレスまでを幅広く品ぞろえ。
              デザイナーの美意識が細部にまでいかされたドレスは来ているほうが心地いいといわれるほどの着ごこちを約束します。
            </p>
            <p>
              ヘア＆メイクからビューティー、アクセサリーまですべて特別なアンジェリメイドでトータルコーディネート。
              ここにしかないスタイルが、花嫁を誰よりもまばゆく輝かせます。
            </p>
          </Fade>
        </Section>
        <MainLink>
          {token ? (
            <Button color="white" start as="a" href="/dress">
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
