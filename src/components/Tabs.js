import { useState } from "react";
import Image from 'next/image';

export function TabsDefault(data, projectName) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabInfo = data.tabData;


    return (
        <div className="h-5/6 w-5/6">
            <div className="flex justify-evenly align-top space-x-3 border-b">
                {tabInfo.map((tab, index) => {
                    return (
                        <button
                            key={index}
                            className={`py-2 border-b-4 transition-colors duration-300 ${
                                index === activeTabIndex
                                    ? "border-teal-500"
                                    : "border-transparent hover:border-gray-200"
                            }`}

                            onClick={() => setActiveTabIndex(index)}>
                            {tab.label}
                            </button>
                    );
                })}
            </div>
            <div className="py-4">
                <div className="flex flex-col justify-items-center items-center">
                    <h1 className="text-center text-lg p-5">{tabInfo[activeTabIndex].content}</h1>
                </div>
                <div className="flex flex-col items-center justify-items-center">
                    {tabInfo[activeTabIndex].imgURL != '' && <Image src={tabInfo[activeTabIndex].imgURL}/>}
                    
                    {tabInfo[activeTabIndex].link ? (
                          <a className="text-center text-lg p-5" href={tabInfo[activeTabIndex].link}>View site</a>
                    ) : (null)}
    
                </div>
                
            </div>
        </div>


    )

}
