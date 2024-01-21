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
                <span className="text-xs text-stone-400">Progress</span>
                <span className="text-xs text-stone-400">{doneFill}</span>
            </div>

            <div className="w-[20vw] bg-stone-200 rounded-full h-3 mt-1">
                <div className="bg-amber-500/50 h-3 rounded-full" style={{width: progressFill}} />
                <div className="bg-stone-700 h-3 rounded-full -mt-3" style={{width: doneFill}} />
            </div>
        </div>
    );
};

export default ChartBar;
