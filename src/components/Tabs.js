import { useState } from "react";
import Image from 'next/image';

export function TabsDefault(data) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabInfo = data.tabData;
    console.log(tabInfo[0])
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
                
            
                {tabInfo[activeTabIndex].imgURL != ''
                    ? <Image src={tabInfo[activeTabIndex].imgURL}/>
                    :  null
                }
            </div>
        </div>


    )

}
