import { useState, useEffect } from 'react';


const AssetFetch = (name) => {
    const [assetData, setAssetData] = useState([]);
    const [error, setError] = useState(null);

    const url = "http://localhost:8085/assets";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Asset name not found");
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                setAssetData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        }
        fetchData();
    }, []);

    return { assetData, error };
};

export default AssetFetch;