import React, {useState} from 'react';
import Categories from '../Components/Categories';
import MenuItem from '../Components/MenuItem';
import Tittle from "../Components/Tittle";
import portfolios from '../Components/allportfolios';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];
console.log(allCategories);

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios);
            return;
        }
        const filtredData =portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filtredData);
    }

    return (
        <div className="PortfoliosPage">
            <div className="title">
                <Tittle tittle={'Portfolios'} span={'Portfolios'} />
            </div>
            <div className="Portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItem menuItem={menuItems} />
            </div>
        </div>
    );
}

export default PortfoliosPage;