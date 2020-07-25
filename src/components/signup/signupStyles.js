import styled from 'styled-components';
import { Container, InputForm, FormGroup } from '../../lib/extends';

// SignupInput
export const SignupContainer = styled(Container)`
  height: 800px;
`;

export const SignupInputForm = styled(InputForm)`
  div:nth-child(3) {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    input {
      height: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const SignupFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  span {
    margin-bottom: 10px;
  }
`;
