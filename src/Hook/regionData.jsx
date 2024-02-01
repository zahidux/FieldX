import { useQuery } from "@tanstack/react-query";

const regionData = () => {
  const {
    data: regions = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/region");
      // console.log(res);
      return res.json();
    },
  });

  return [regions, loading, refetch];
};

export default regionData;
