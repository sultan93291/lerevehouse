import WishListCard from "@/components/Cards/WishListCard";
import MainLayout from "@/Layout/MainLayout";
import ActivitiesDetails from "@/Pages/ActivitiesDetails/ActivitiesDetails";
import ActivitiesSubcategory from "@/Pages/ActivitiesSubcategory/ActivitiesSubcategory";
import AllTouristGuide from "@/Pages/AllTouristGuide/AllTouristGuide";
import AllTouristGuideDetails from "@/Pages/AllTouristGuideDetails/AllTouristGuideDetails";
import AtlanticProvinces from "@/Pages/AtlanticProvinces/AtlanticProvinces";
import CanadaHoliday from "@/Pages/CanadaHoliday/CanadaHoliday";
import CanadaMap from "@/Pages/CanadaMap/CanadaMap";
import Contact from "@/Pages/Contact/Contact";
import CustomizeTripCanada from "@/Pages/CustomizeTripCanada/CustomizeTripCanada";
import Destination from "@/Pages/Destination/Destination";
import DestinationDetails from "@/Pages/DestinationDetails/DestinationDetails";
import EatAndDrink from "@/Pages/EatAndDrink/EatAndDrink";
import Homepage from "@/Pages/Homepage/Homepage";
import Modal from "@/Pages/Modal/ModalTest";
import OntarionQuebec from "@/Pages/OntarioQuebec/OntarionQuebec";
import Prairies from "@/Pages/Praises/Prairies";
import SingleCanadaTour from "@/Pages/SingleCanadaTour/SingleCanadaTour";
import TestMap from "@/Pages/TestMap/TestMap";
import TourAutoCanada from "@/Pages/TourAutoCanada/TourAutoCanada";
import TourCanada from "@/Pages/TourCanda/TourCanada";
import TourGuide from "@/Pages/TourGuide/TourGuide";
import TourGuide22 from "@/Pages/TourGuide22";
import TouristGuide from "@/Pages/TouristGuide/TouristGuide";
import TouristListDetails from "@/Pages/TouristListDetails/TouristListDetails";
import TourList from "@/Pages/TourList/TourList";
import TourWithCar from "@/Pages/TourWithCar/TourWithCar";
import TravelActivitiesPage from "@/Pages/TravelActivites/TravelActivitiesPage";
import TravelStylePage from "@/Pages/TravelStyle/TravelStylePage";
import TravelStyleDetailsPage from "@/Pages/TravelStyleDetails/TravelStyleDetailsPage";
import WildSide from "@/Pages/WildSide/WildSide";
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
      {
        path: "/tour-guide-22",
        element: <TourGuide22 />,
      },
      {
        path: "/tour-canda",
        element: <TourCanada />,
      },
      {
        path: "/customize/tour-canda",
        element: <CustomizeTripCanada />,
      },
      {
        path: "/boundless-north",
        element: <SingleCanadaTour />,
      },
      {
        path: "/atlantics-provinces",
        element: <AtlanticProvinces />,
      },
      {
        path: "/ontario-quebec",
        element: <OntarionQuebec />,
      },
      {
        path: "/Prairies",
        element: <Prairies />,
      },
      {
        path: "/tour-auto",
        element: <TourAutoCanada />,
      },
      {
        path: "/tour-with-car",
        element: <TourWithCar />,
      },
      {
        path: "/canada-holiday",
        element: <CanadaHoliday />,
      },
      {
        path: "/canada-map",
        element: <CanadaMap />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
    ],
  },
]);
export default router;
