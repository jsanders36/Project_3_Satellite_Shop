import React, { createContext, useContext, useState, useEffect } from "react";

export const AssetContext = React.createContext();



export const AssetProvider = ({ children }) => {

    const [addAsset, setAddAsset] = useState(() => {
        const savedAsset = localStorage.getItem("addAsset");
        return savedAsset ? JSON.parse(savedAsset) : [];
    });


    const [previousPath, setPreviousPath] = useState("/");
    const contextValue = { addAsset, setAddAsset, previousPath, setPreviousPath };

    useEffect(() => {
        localStorage.setItem("addAsset", JSON.stringify(addAsset));
    }, [addAsset]);

    return (
        <AssetContext.Provider
            value={contextValue}
        >
            {children}
        </AssetContext.Provider>
    );
};

export const useAssetContext = () => {
    return useContext(AssetContext);
};