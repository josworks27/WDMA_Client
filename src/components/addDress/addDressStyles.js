import styled from 'styled-components';
import { Container, InputForm, FormGroup } from '../../lib/extends';

export const AddDressContainer = styled(Container)`
  height: 800px;
`;

export const AddDressInputForm = styled(InputForm)`
  div:nth-child(3) {
    input {
      margin-bottom: 5px;
    }
  }
`;

export const AddDressFormGroup = styled(FormGroup)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 10px;
  label {
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
  }
  input {
    height: 30px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  label {
    margin-bottom: 10px;
  }
  input {
    color: ${(props) => props.theme.thirdColor};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  button {
    margin: 0 10px;
  }
`;
