import { useGetAllAcademicSemesterQuery } from "../../../redux/feature/academic/academic.api";

export const AcademicSemester = () => {
  const { data, isLoading } = useGetAllAcademicSemesterQuery(undefined);
  

  return (
    <>
      {isLoading ? <h1>Loading</h1> : <div> This is a AcademicSemester </div>}
    </>
  );
};
