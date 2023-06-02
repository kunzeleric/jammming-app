import ScaleLoader from "react-spinners/ScaleLoader";

export const Loading = () => {
  return (
    <ScaleLoader
    color={"#9b79ea"}
    height={40}
    width={20}
    radius={4}
    speedMultiplier={0.5}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}
