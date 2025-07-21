import {
  useGetPrivacyPageDataQuery,
  useGetTermsAndConditionDataQuery,
} from "@/Redux/features/api/apiSlice";
import React from "react";
import toast from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";


const DynamicPage = () => {
  const location = useLocation();

  const isTermsPage = location.pathname === "/pages/terms-and-conditions";

  const {
    data: privacyData,
    error: privacyError,
    isLoading: isPrivacyLoading,
  } = useGetPrivacyPageDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: termsData,
    error: termsError,
    isLoading: isTermsLoading,
  } = useGetTermsAndConditionDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const isLoading = isPrivacyLoading || isTermsLoading;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  const error = isTermsPage ? termsError : privacyError;
  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  const contentData = isTermsPage ? termsData?.data : privacyData?.data;

  return (
    <div className="flex flex-col gap-y-6 py-[128px] mt-[60px] container">
      <h4 className="title--xxl">{contentData?.page_title}</h4>
      <div
        className=" mx-auto  py-8 text-gray-900 text-lg leading-relaxed tracking-wide space-y-6"
        dangerouslySetInnerHTML={{ __html: contentData?.page_content }}
      ></div>
    </div>
  );
};

export default DynamicPage;
