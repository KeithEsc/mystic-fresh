import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import "../styles/global.css";

function Reviews() {
  // Create a free Featurable account at https://featurable.com
  // Then create a new Featurable widget and copy the widget ID
  const featurableWidgetId = "9822ae96-09d9-4197-8c04-27de913fca02"; // You can use "example" for testing

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} showDots={false} />
  );
}

export default Reviews;