import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  padding: 40px;
`
export const BannerHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  margin: 5px;
`

export const BannerDetails = styled(BannerHeading)`
  font-weight: 400;
  font-size: 25px;
`

export const PlayListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px;
  background-color: #152850;
  height: 60vh;
`
export const TitleSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
export const Title = styled(BannerHeading)`
  font-size: 25px;
`
export const SearchContainer = styled.div`
  width: 220px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;
`

export const InputElement = styled.input`
  height: 33px;
  border: 0px;
  background-color: transparent;
  outline: none;
  padding: 2px 4px;
  color: #fff;
  font-family: 'Roboto';
  width: 190px;
`
export const SongsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  overflow-y: scroll;
  list-style-type: none;
  padding: 0px;
`
