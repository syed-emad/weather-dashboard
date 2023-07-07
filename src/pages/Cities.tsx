import { useDispatch, useSelector } from "react-redux";
import { PageWrapper } from "../components/PageWrapper";
import { CitiesTable } from "../components/cities/CitiesTable";
import { Filter } from "../components/cities/Filter";
import { AppDispatch } from "../states/redux-store/store";
import {
  GetCitiesLocation,
  ListOfCities,
} from "../states/redux-store/slice/GeoLocationSlice";
import { useEffect, useState } from "react";

export const Cities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<string>("");
  const citiesDetails: any = useSelector(ListOfCities);
  const cities = citiesDetails?.data;
  const fetchCities = async () => {
    // await dispatch(GetCitiesLocation({}));
  };
  console.log("ok");
  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <PageWrapper>
      <Filter search={search} setSearch={setSearch} />
      <CitiesTable cities={cities} />
    </PageWrapper>
  );
};
