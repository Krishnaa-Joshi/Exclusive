function CateoryCard({url,title}) {
  return (
    <>
      <div className=" border-[#B3B3B3] border-2 h-[22vh] rounded-md w-[11vw] flex justify-evenly flex-col ">
        <img src={url} className="h-16" alt="" />
        <p className="text-center text-lg font-medium">{title}</p>
      </div>
    </>
  );
}

export default CateoryCard;
