import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  return <div>Property Detail: {propertyId}</div>;
};

export default PropertyDetail;
