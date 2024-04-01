export const fetchData = async (setDataList) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        
        // Extracting necessary data from the response and updating the dataList state
        const updatedDataList = jsonData.map((item) => ({
            id: item.id,
            name: item.title,
            description: item.description,
            category: item.category,
            image: item.image,
            price: item.price,
        }));

        setDataList(updatedDataList);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const getProductById = (dataList, productId) => {
    return dataList.find(product => product.id === parseInt(productId));
  };