import React from "react";
import daos from "../db/dao.js";
import { motion, AnimatePresence } from "framer-motion";
function NonProfits() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {daos
          .filter((dao) => dao.category === "NonProfits")
          .map((dao) => (
            <motion.div
              layoutId={dao.id}
              onClick={() => setSelectedId(dao.id)}
              className="bg-[#131014] border border-[#1C1917] rounded-lg p-6 grid justify-between "
            >
              <motion.div className="flex justify-between items-center">
                <motion.div className="flex items-center space-x-2">
                  <motion.img className="w-11" src={dao.image} alt={dao.name} />
                  <motion.h3 className="font-Aeonik font-lg ">
                    {dao.name}
                  </motion.h3>
                </motion.div>
                <motion.span className="text-[#FFE6C3] font-Aeonik text-[13px] text-right">
                  {dao.member_count}+ members
                </motion.span>
              </motion.div>
              <motion.p className="text-[#D7D3D0] font-[Manrope] my-3 line-clamp-3 text-sm tracking-wide">
                {dao.short_description}
              </motion.p>
              <motion.span className="bg-[#FFE6C3] px-3 py-1 rounded-full font-Aeonik text-sm text-[#131014] w-fit h-fit">
                {dao.category}
              </motion.span>
            </motion.div>
          ))}
      </div>
      {daos.filter((dao) => dao.category === "Grants").length === 0 && (
        <div className="text-[#D7D3D0]/60 text-center w-full font-Aeonik text-2xl tracking-wide font-normal">
          No DAOs found
        </div>
      )}
    </>
  );
}

export default NonProfits;
