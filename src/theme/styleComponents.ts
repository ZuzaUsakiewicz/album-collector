import styled from "styled-components";
import { FlexColumnCenter, FlexColumnStart } from "./styleHelpers";
import { mediaQueries } from "./mediaQueries";

export const Container = styled.div`
  ${FlexColumnCenter};
  margin: 0 auto;
`;

export const AlbumArtist = styled.h3`
  span {
    font-size: ${({ theme }) => theme.typography.size.xsFont};
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const AlbumTitle = styled.h2`
  font-style: italic;
`;

export const Form = styled.form`
  ${FlexColumnStart};
  gap: 0.875rem;
  label {
    color: ${({ theme }) => theme.colors.accentColor};
    font-size: ${({ theme }) => theme.typography.size.smFont};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #2b2b2b;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.cardColor};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.accentColor};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.textColor};
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.textColor};
    }
    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.textColor};
    }
    @media ${mediaQueries.tablet} {
      width: 15rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.accentColor};
    font-size: ${({ theme }) => theme.typography.size.smFont};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    width: 100%;
  }
`;
