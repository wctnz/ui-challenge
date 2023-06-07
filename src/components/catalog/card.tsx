import React from 'react';

const Card = () => {
    return (
        <div className="w-[256px] border border-solid border-day-1000">
        <div className="text-[15px] pt-3 leading-[20px] text-day-1000 flex justify-between">
        <div>Smirc #1071</div>
        <div>0.015<span className="text-day-350">ETH</span></div>
        </div>
        </div>
        
    );
};

export default Card;