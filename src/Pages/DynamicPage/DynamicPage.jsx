import { useGetPrivacyPageDataQuery } from "@/Redux/features/api/apiSlice";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const DynamicPage = () => {
  const { data, error, isLoading } = useGetPrivacyPageDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

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

  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  console.log(data);

  return (
    <div className="flex flex-col gap-y-6 py-[128px] mt-[60px] container ">
      <h4 className="title--xxl">{data?.data.page_title}</h4>
      <p
        className=" text-sm xl:text-lg font-inter font-medium leading-[160%] "
        dangerouslySetInnerHTML={{ __html: data?.data?.page_content }}
      ></p>
    </div>
  );
};

export default DynamicPage;
