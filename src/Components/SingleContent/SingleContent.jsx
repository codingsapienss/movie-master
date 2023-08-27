/* eslint-disable react/prop-types */
import './SingleContent.css'
import { img_300, unavailable } from '../../config/config'
import { Badge } from '@mui/material'

const SingleContent = ({ poster, title, date, media_type, vote_avg }) => {
  return (
    <div className='singleContainer' >
      <Badge color={vote_avg > 6 ? 'primary' : 'secondary'} badgeContent={vote_avg}></Badge>
      <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={`${title}'s thumbnail`} />
      <p className='title'>{title}</p>
      <div className="subtitles">
        <span className='subTitle'> {media_type === 'tv' ? "(TV Series)" : "(Movie)"}</span>
        <span className='subTitle'>{date}</span>
      </div>
    </div>
  )
}

export default SingleContent