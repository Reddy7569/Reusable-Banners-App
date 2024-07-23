import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner_card-item`}>
      <div>
        <h1 className="main_heading">{headerText}</h1>
        <p className="banner_discription">{description}</p>
        <button className="show_more_btn" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
