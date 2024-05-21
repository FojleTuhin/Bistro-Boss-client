import { useEffect, useState } from 'react';
import Cover from '../Components/Cover';
import img1 from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from '../Components/ShopCard';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])


    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Shop
                </title>
            </Helmet>
            <div className='mb-32'>
                <Cover heading={"OUR SHOP"} subheading={"Would you like to try a dish?"} img={img1}></Cover>
            </div>
            <div className='px-20 mb-32'>
                <Tabs>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizzas</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6 mt-10'>
                            {
                                menu.filter(item => item.category === "salad")
                                    .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6 mt-10'>
                            {
                                menu.filter(item => item.category === "pizza")
                                    .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6 mt-10'>
                            {
                                menu.filter(item => item.category === "soup")
                                    .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6 mt-10'>
                            {
                                menu.filter(item => item.category === "dessert")
                                    .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6 mt-10'>
                            {
                                menu.filter(item => item.category === "drinks")
                                    .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>

            </div>





        </div>
    );
};

export default Shop;