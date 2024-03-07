import React from "react";

const ChartBar = ({ tasks }) => {
    let doneFill = "0%";
    let progressFill = "0%";

    const maxValue = tasks.length;
    const doneTask = tasks.filter(task => task.status === "2").length;
    const progressTask = tasks.filter(task => task.status === "1").length;

    if (maxValue > 0) {
        doneFill = Math.round((doneTask/maxValue) * 100) + "%";
        progressFill = Math.round(((progressTask + doneTask)/maxValue) * 100) + "%";
    }

    return (
        <div className="w-[20vw]">
            <div className="flex justify-between">
                <span className="text-xs text-indigo-800/80">Progress</span>
                <span className="text-xs text-indigo-800/80">{doneFill}</span>
            </div>

            <div className="w-[20vw] bg-stone-50/95 rounded-full h-3 mt-1 drop-shadow-md">
                <div className="bg-blue-200/90 h-3 rounded-full" style={{width: progressFill}} />
                <div className="bg-gradient-to-br from-[rgb(97,73,164)]/80 from-0% via-[rgba(49,74,170,1)]/80 via-35% to-[rgba(79,173,201,1)]/80 to-90% 
                h-3 rounded-full -mt-3" style={{width: doneFill}} />
            </div>
        </div>
    );
};

export default ChartBar;
