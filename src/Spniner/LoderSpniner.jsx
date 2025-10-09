import { Circles } from "react-loader-spinner";

const LoderSpniner = () => {
  return (
    <div className="container mx-auto flex items-center justify-center mt-50">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoderSpniner;
