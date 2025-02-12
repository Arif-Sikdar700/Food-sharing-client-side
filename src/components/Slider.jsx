const Slide = ({ image }) => {
	return (
		<div
			className="w-full  bg-center bg-cover h-[30rem]"
			style={{
				backgroundImage: `url(${image})`,
			}}
		></div>
	);
};

export default Slide;
