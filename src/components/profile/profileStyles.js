import styled from 'styled-components';
import { Container, FormGroup } from '../../lib/extends';

// ChangePasswordInput
export const ChangePasswordContainer = styled(Container)`
  height: 650px;
`;

export const ChangePasswordFormGroup = styled(FormGroup)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 30px;
  label {
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
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

// MyAccountInput

export const MyAccountContainer = styled(Container)`
  height: ${(props) => props.height};
`;

export const MyAccountFormGroup = styled(FormGroup)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 30px;
  label {
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
  }
`;
