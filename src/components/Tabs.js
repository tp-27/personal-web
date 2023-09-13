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
                <p>{tabInfo[activeTabIndex].content}</p>
                
                {tabInfo[activeTabIndex].imgURL != '' && <Image src={tabInfo[activeTabIndex].imgURL}/>}
                
                {/* {project === 'aed' && tabInfo[activeTabIndex] === 3 && <VideoPlayer videoURL={aed}/>} */}
      
                {/* {tabInfo[activeTabIndex].videoURL != '' && <VideoPlayer videoURL={require(tabInfo[activeTabIndex].videoURL)}/>} */}
                    
                
            </div>
        </div>


    )

}
