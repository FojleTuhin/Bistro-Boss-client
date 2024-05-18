
const Title = ({heading, subheading}) => {
    return (
        <div className="mt-20">
            <p className="text-[#D99904] text-xl text-center mb-4">---{heading}---</p>
            <hr className="w-[40%] mx-auto border-2"/>
            <p className="mt-5 text-[#151515] text-4xl text-center">{subheading}</p>
            <hr className="w-[40%] mx-auto border-2 mb-12 mt-6"/>

            
        </div>
    );
};

export default Title;