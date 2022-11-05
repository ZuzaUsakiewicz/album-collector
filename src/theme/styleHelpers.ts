import { css } from "styled-components";

export const FlexRowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnStart = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexRowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowStart = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxShadow = css`
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
`;

export const BoxShadowHover = css`
  box-shadow: 0px 4px 4px 0px hsla(0, 0%, 0%, 0.14),
    0px 5px 3px 0px hsla(0, 0%, 0%, 0.12), 0px 2px 7px 0px hsla(0, 0%, 0%, 0.2);
`;
