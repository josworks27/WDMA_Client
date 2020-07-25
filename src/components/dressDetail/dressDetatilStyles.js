import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../lib/extends';

// AddEventModal
export const AddEventForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
  color: black;
  label {
    margin-right: 10px;
  }
  select,
  input {
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const AddEventFormButton = styled.form`
  display: flex;
  justify-content: center;
`;

// DressDetail
export const DetailMain = styled.main`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled(Container)`
  height: 650px;
`;

export const DetailWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  width: 100%;
  button:nth-child(2) {
    margin: 0 20px;
  }
`;

// DressDetailEvent
export const DetailEventSection = styled.section`
  /* border: 1px solid ${(props) => props.theme.mainColor}; */
  width: 60%;
  height: 450px;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
  }
`;

// DressDetailInfo
export const DetailInfoSection = styled.section`
  /* border: 1px solid ${(props) => props.theme.mainColor}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  padding: 20px;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const Slider = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;
  button {
    border-radius: 30px;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export const Contents = styled.div`
  /* border: 1px solid blue; */
  width: 80%;
  /* padding: 0 30px; */
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
export const Section = styled.section`
  /* border: 1px solid yellow; */
  width: 100%;
  article:first-child {
    margin-bottom: 30px;
  }
`;
export const Article = styled.article`
  /* border: 1px solid red; */
  width: 100%;
  /* margin-bottom: 30px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.subColor};
  }
`;

// DressList
export const DressListMain = styled.main`
  height: 100vh;
  width: 100%;
`;

export const DressListContainer = styled.div`
  width: 100%;
  padding: 20px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-rows: 220px;
    column-gap: 30px;
    row-gap: 10px;
    justify-content: center;
  }
`;

export const DressListLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    img {
      filter: opacity(25%);
    }
    div {
      color: ${(props) => props.theme.subColor};
    }
  }
  img {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 180px;
    margin-bottom: 10px;
  }
  div {
    height: 30px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.2rem;
  }
`;

// EditDressModal
export const EditDressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
  color: black;
  label {
    margin-right: 10px;
  }
  select,
  input {
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const EditDressFormButton = styled.form`
  display: flex;
  justify-content: center;
`;

// ImageSlider
export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 250px;
  margin-bottom: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 0 5px;
  }
`;
