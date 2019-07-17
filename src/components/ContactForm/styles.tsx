import styled from "styled-components";

export const ContactBlock = styled.div`
  & + & {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #b8afa4;
  }

  label {
    font-weight: 400;
    margin-top: 10px;
  }
`
