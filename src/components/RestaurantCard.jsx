import { IMG_CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData || {};

  return (
    <div className="res-card">
      {/* <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} alt="" /> */}
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
