import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Profile = styled.div`
  width: 950px;
  display: flex;
  gap: 10px;
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
`;

export const Thumbnail = styled.img`
  font-size: 5rem;
  color: black;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DivisionContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Level = styled.span`
  font-size: 1.25rem;
  color: white;
`;

export const Nickname = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;
