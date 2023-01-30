import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  width: 950px;
  display: flex;
  gap: 10px;
  background-color: #31313c;
  padding: 20px;
  border-radius: 10px;

  @media ${(props) => props.theme.mobile} {
    padding: 12px;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 4px solid #ddd;

  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 80px;
  }
`;

export const Thumbnail = styled.img``;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${(props) => props.theme.mobile} {
    gap: 6px;
  }
`;

export const DivisionContainer = styled.div`
  display: flex;
  gap: 8px;

  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
  }
`;

export const Level = styled.span`
  font-size: 1.25rem;
  color: white;

  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

export const Nickname = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;
  color: white;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.25rem;
  }
`;
