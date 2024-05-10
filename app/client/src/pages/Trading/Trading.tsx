import {
    Title,
    Section,
    Loading,
    // Text,
    // Select,
    // SwitchOptions,
} from "../../components/commons";
import { assetsItems } from "../../utils/constants";
import Layout from "../../components/layout";
import MainContent from "../../components/layout/MainContent";
import TokenSelect from "../../components/dashboard/select/TokenSelect";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import TradingAside from "./TradingAside";

const tabs = ['Bids', 'Asks']

const Trading = () => {
    const { fetchTradingInfoPage, tradingPageLoading, orders } = useAuth();

    const [activeTab, setActiveTab] = useState<string>('Bids');

    const options = assetsItems.map((item) => ({
        label: item.icon,
        value: item.name,
    }));
    // const dateOptions = [
    //     "04 Dec 23",
    //     "05 Dec 23",
    //     "08 Dec 23",
    //     "29 Dec 23",
    //     "26 Jan 24",
    //     "26 Mar 24",
    // ];

    useEffect(() => {
        async function init() {
            const orders = await fetchTradingInfoPage();
            console.log(orders, 'fffffffff')
        }
        init();
    }, [])

    return (
        <>
            <Layout>
                <MainContent>
                    <Title
                        text="Trading"
                        iconUrl="/assets/images/sidebar/trading.svg"
                    />

                    <div className="space-y-2">
                        <TokenSelect
                            options={options}
                            showSelectDescription
                            hideTokenValue
                        />

                        <div className="grid grid-cols-[70%_30%] gap-2">
                            <div className="flex flex-col gap-2">
                                {/* <Section>
                                    <div>
                                        <div className="flex flex-col gap-2">
                                            <SwitchOptions
                                                options={[
                                                    "Options Chain",
                                                    "Trade History",
                                                ]}
                                                defaultOption={0}
                                            />
                                            <SwitchOptions
                                                options={dateOptions}
                                                defaultOption={2}
                                                switchStyle="rounded"
                                            />
                                        </div>

                                        <img src="/assets/images/dashboard/chat.svg" />
                                    </div>
                                </Section> */}

                                <Section>
                                    <div className="flex justify-start gap-5 w-full h-7">
                                        {
                                            tabs.map((item: string) => {
                                                return <span className={`font-Inter text-xs text-white rounded-lg px-9 py-1.5 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in duration-100 cursor-pointer ${item == activeTab ? 'bg-blue-500' : 'bg-[#192b3b] hover:bg-blue-500'}`} onClick={() => setActiveTab(item)}>
                                                    {item}
                                                </span>
                                            })
                                        }

                                        {/* <div className="flex items-center">
                                            <Text
                                                font="inter"
                                                weight="medium"
                                                size="xs"
                                                className="text-inactive"
                                            >
                                                Show selected market only
                                            </Text>

                                            <Select
                                                options={marketOptions}
                                                font="sm"
                                            />
                                        </div> */}
                                    </div>
                                    {tradingPageLoading && orders === undefined ?
                                        <Loading /> :
                                        <div className="flex flex-col">
                                            <div className="-m-1.5 overflow-x-auto">
                                                <div className="p-1.5 min-w-full inline-block align-middle">
                                                    <div className="overflow-hidden">
                                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                                            <thead>
                                                                {activeTab == 'Bids' &&
                                                                    <tr>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">No</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Buyer</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Quantity</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Price</th>
                                                                        {/* <th scope="col" className="px-1 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th> */}
                                                                    </tr>
                                                                }
                                                                {activeTab == 'Asks' &&
                                                                    <tr>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">No</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Seller</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Quantity</th>
                                                                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Price</th>
                                                                        {/* <th scope="col" className="px-1 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th> */}
                                                                    </tr>
                                                                }
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 font-Montserrat">
                                                                {orders &&
                                                                    orders[activeTab.toLowerCase() as 'bids' | 'asks'].map((bid, idx) => {
                                                                        return <tr key={idx}>
                                                                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{idx + 1}</td>
                                                                            <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 font-mono">{bid[0]}</td>
                                                                            <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{bid[1]}</td>
                                                                            <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{bid[2]}</td>
                                                                            {/* <td className="px-1 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-400 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:text-blue-400">Select</button>
                                                                            </td> */}
                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </Section>
                            </div>
                            <TradingAside />
                        </div>
                    </div>
                </MainContent>
            </Layout>
        </>
    );
};

export default Trading;
