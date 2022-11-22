import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {HiLocationMarker, HiMail} from 'react-icons/hi'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props

  const {
    title,
    companyLogoUrl,
    rating,
    employmentType,
    location,
    packagePerAnnum,
    jobDescription,
    id,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-list-items">
        <div className="company-container">
          <div>
            <img src={companyLogoUrl} alt="company logo" className="logo-url" />
          </div>
          <div>
            <h1 className="company-title">{title}</h1>
            <div className="star-icon-container">
              <AiFillStar className="star-icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-container-flex-content">
          <div className="location-desc">
            <div className="location-icon-container">
              <HiLocationMarker className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="location-icon-container">
              <HiMail className="location-icon" />
              <p className="designation">{employmentType}</p>
            </div>
          </div>
          <div className="package-container">
            <p className="package">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1 className="description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
