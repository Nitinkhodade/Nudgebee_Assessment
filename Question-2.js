function calculateTotalPrice(prices) {
    const result = prices.slice();
    for(let i=0; i<prices.length; i++){
        for(let j=i+1; j<prices.length; j++){
            if(prices[j] <= prices[i]){
                result[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    
    return result;
};