import {AiOutlineDelete} from 'react-icons/ai'

import {
  Song,
  SongThumbnail,
  NameGenreContainer,
  SongName,
  Genre,
  TractDetails,
  TimeDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const SongDetails = props => {
  const {songDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    deleteTrack(id)
  }

  return (
    <Song>
      <TractDetails>
        <SongThumbnail src={imageUrl} alt="track" />
        <NameGenreContainer>
          <SongName>{name}</SongName>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TractDetails>
      <TimeDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          onClick={onClickDelete}
          data-testid="delete"
          type="button"
        >
          <AiOutlineDelete size={20} color="white" />
        </DeleteButton>
      </TimeDeleteContainer>
    </Song>
  )
}

export default SongDetails
