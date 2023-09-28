import styled from 'styled-components'

export const Song = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0px;
`
export const TractDetails = styled.div`
  display: flex;
  flex-direction: row;
`

export const SongThumbnail = styled.img`
  width: 170px;
  height: 100px;
  padding-right: 15px;
`
export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SongName = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 5px;
`

export const Genre = styled(SongName)`
  font-size: 16px;
  color: #3b82f6;
`
export const TimeDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`
export const Duration = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  margin-right: 40px;
`
export const DeleteButton = styled.button`
  border: 0px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
