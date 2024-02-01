import { useQuery } from "@tanstack/react-query";

const regionData = () => {
  const {
    data: areas = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["areas"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/area");
      // console.log(res);
      return res.json();
    },
  });

  return [areas, loading, refetch];
};

export default regionData;
