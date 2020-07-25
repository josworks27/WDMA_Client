import styled from 'styled-components';
import { FormGroup } from '../../lib/extends';

// ForgotMailCheck
export const ForgotMailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

// ForgotMailInput
export const ForgotMailFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  span {
    margin-bottom: 10px;
  }
`;
