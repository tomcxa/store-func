import React from 'react';
import ItemInfo from './ItemInfo';
import PurchaseInfo from './PurchaseInfo';

const ShopItemFunc = ({ item }) => (
    <div className="main-content">
        <ItemInfo item={item}/>
        {/* <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div class="description">
            {item.descriptionFull}
        </div> */}
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <PurchaseInfo item={item}/>
    </div>
);


export default ShopItemFunc;
