import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ marginInline: "auto", width: 100 }}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="rgb(103, 212, 240)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
