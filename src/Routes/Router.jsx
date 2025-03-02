import MainLayout from "@/Layout/MainLayout";
import ActivitiesDetails from "@/Pages/ActivitiesDetails/ActivitiesDetails";
import ActivitiesSubcategory from "@/Pages/ActivitiesSubcategory/ActivitiesSubcategory";
import AllTouristGuide from "@/Pages/AllTouristGuide/AllTouristGuide";
import AllTouristGuideDetails from "@/Pages/AllTouristGuideDetails/AllTouristGuideDetails";
import Contact from "@/Pages/Contact/Contact";
import Destination from "@/Pages/Destination/Destination";
import DestinationDetails from "@/Pages/DestinationDetails/DestinationDetails";
import EatAndDrink from "@/Pages/EatAndDrink/EatAndDrink";
import Homepage from "@/Pages/Homepage/Homepage";
import TestMap from "@/Pages/TestMap/TestMap";
import TourGuide from "@/Pages/TourGuide/TourGuide";
import TouristGuide from "@/Pages/TouristGuide/TouristGuide";
import TouristListDetails from "@/Pages/TouristListDetails/TouristListDetails";
import TourList from "@/Pages/TourList/TourList";
import TravelActivitiesPage from "@/Pages/TravelActivites/TravelActivitiesPage";
import TravelStylePage from "@/Pages/TravelStyle/TravelStylePage";
import TravelStyleDetailsPage from "@/Pages/TravelStyleDetails/TravelStyleDetailsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/destination-details/:title",
        element: <DestinationDetails />,
      },
      {
        path: "/travel-styles",
        element: <TravelStylePage />,
      },
      {
        path: "/tourist-guide",
        element: <TouristGuide />,
      },
      {
        path: "/all-tourist-guide/:title",
        element: <AllTouristGuide />,
      },
      {
        path: "/all-tourist-guide-details/:title",
        element: <AllTouristGuideDetails />,
      },
      {
        path: "/activities/subcategory/:id",
        element: <ActivitiesSubcategory />,
      },
      {
        path: "/activities-details/:id",
        element: <ActivitiesDetails />,
      },
      {
        path: "/activities",
        element: <TravelActivitiesPage />,
      },
      {
        path: "/tours",
        element: <Destination />,
      },
      {
        path: "/luxury-travel",
        element: <Destination />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tour-lists/:title",
        element: <TourList />,
      },
      {
        path: "/tour-list-details/:id",
        element: <TouristListDetails />,
      },

      {
        path: "/travel-styles-details/:slug",
        element: <TravelStyleDetailsPage />,
      },

      {
        path: "/travel-activities",
        element: <TravelActivitiesPage />,
      },
      {
        path: "/map",
        element: <TestMap />,
      },
      {
        path: "/tour-guide",
        element: <TourGuide />,
      },
      {
        path: "/eat&-drink",
        element: <EatAndDrink />,
      },
    ],
  },
]);
export default router;
