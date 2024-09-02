// script.js

document.addEventListener('DOMContentLoaded', () => {
    const watchlist = document.getElementById('watchlist');
    const stockInfo = document.getElementById('stock-info');
    const searchInput = document.getElementById('search');
    const stockTableBody = document.querySelector('#stock-table tbody');

    let watchlistStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', 
        price: 150.54, change: 0.5 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.',
         price: 2800.66, change: -1.2 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', 
        price: 3401.46, change: 2.1 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', 
        price: 299.35, change: -0.3 }
    ];

    const allStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', 
        price: 150.54, change: 0.5 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.',
         price: 2800.66, change: -1.2 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.',
         price: 3401.46, change: 2.1 },
        { symbol: 'MSFT', name: 'Microsoft Corporation',
         price: 299.35, change: -0.3 },
        { symbol: 'FB', name: 'Meta Platforms Inc.', 
        price: 355.23, change: 1.4 },
        { symbol: 'TSLA', name: 'Tesla Inc.',
         price: 720.25, change: 0.8 },
        { symbol: 'NFLX', name: 'Netflix Inc.',
         price: 510.89, change: -0.6 },
        { symbol: 'NVDA', name: 'NVIDIA Corporation',
         price: 198.67, change: 1.2 },
        { symbol: 'PYPL', name: 'PayPal Holdings Inc.', 
        price: 245.12, change: -0.4 },
        { symbol: 'INTC', name: 'Intel Corporation',
         price: 54.22, change: 0.3 },
        { symbol: 'CSCO', name: 'Cisco Systems Inc.',
         price: 53.45, change: -0.2 },
        { symbol: 'PEP', name: 'PepsiCo Inc.',
         price: 148.87, change: 0.7 },
        { symbol: 'KO', name: 'The Coca-Cola Company',
         price: 54.95, change: 0.6 },
        { symbol: 'PFE', name: 'Pfizer Inc.',
         price: 41.21, change: -0.1 },
        { symbol: 'JNJ', name: 'Johnson & Johnson',
         price: 163.45, change: 0.2 },
        { symbol: 'V', name: 'Visa Inc.', 
        price: 222.34, change: -0.5 },
        { symbol: 'MA', name: 'Mastercard Incorporated',
         price: 349.56, change: 0.4 },
        { symbol: 'DIS', name: 'The Walt Disney Company',
         price: 179.32, change: -0.8 },
        { symbol: 'ADBE', name: 'Adobe Inc.', 
        price: 590.67, change: 1.1 },
        { symbol: 'CRM', name: 'Salesforce.com Inc.',
         price: 252.44, change: -0.7 },
        { symbol: 'ORCL', name: 'Oracle Corporation',
         price: 87.32, change: 0.3 },
        { symbol: 'IBM', name: 'International Business Machines Corporation',
         price: 142.31, change: 0.2 },
        { symbol: 'UBER', name: 'Uber Technologies Inc.',
         price: 51.23, change: 1.0 },
        { symbol: 'LYFT', name: 'Lyft Inc.',
         price: 47.56, change: -1.1 },
        { symbol: 'TWTR', name: 'Twitter Inc.',
         price: 64.98, change: 0.9 },
        { symbol: 'SNAP', name: 'Snap Inc.', 
        price: 70.55, change: -0.5 },
        { symbol: 'SQ', name: 'Block Inc.', 
        price: 245.67, change: 1.3 },
        { symbol: 'SPOT', name: 'Spotify Technology S.A.', 
        price: 265.78, change: -0.4 },
        { symbol: 'ZM', name: 'Zoom Video Communications Inc.',
         price: 355.67, change: -1.0 },
        { symbol: 'DOCU', name: 'DocuSign Inc.',
         price: 285.34, change: 0.6 },
        { symbol: 'BABA', name: 'Alibaba Group Holding Limited',
         price: 230.45, change: -0.8 },
        { symbol: 'JD', name: 'JD.com Inc.',
         price: 81.23, change: 0.7 },
        { symbol: 'SHOP', name: 'Shopify Inc.',
         price: 1220.78, change: 1.4 },
        { symbol: 'WMT', name: 'Walmart Inc.',
         price: 139.54, change: -0.2 },
        { symbol: 'TGT', name: 'Target Corporation',
         price: 230.56, change: 0.5 },
        { symbol: 'MCD', name: 'McDonald\'s Corporation',
         price: 232.67, change: -0.3 },
        { symbol: 'SBUX', name: 'Starbucks Corporation', 
        price: 114.23, change: 0.2 },
        { symbol: 'NKE', name: 'NIKE Inc.',
         price: 147.56, change: 0.8 },
        { symbol: 'LULU', name: 'Lululemon Athletica Inc.', 
        price: 372.45, change: -0.5 },
        { symbol: 'BA', name: 'The Boeing Company', 
        price: 241.78, change: 1.0 },
        { symbol: 'GE', name: 'General Electric Company', 
        price: 106.23, change: -0.1 },
        { symbol: 'F', name: 'Ford Motor Company',
         price: 14.56, change: 0.4 },
        { symbol: 'GM', name: 'General Motors Company', 
        price: 56.78, change: -0.7 },
        { symbol: 'TM', name: 'Toyota Motor Corporation',
         price: 151.23, change: 0.3 },
        { symbol: 'HMC', name: 'Honda Motor Co. Ltd.',
         price: 31.45, change: -0.2 },
        { symbol: 'UBS', name: 'UBS Group AG',
         price: 16.23, change: 0.6 },
        { symbol: 'DB', name: 'Deutsche Bank AG'
        , price: 12.45, change: -0.1 },
        { symbol: 'HSBC', name: 'HSBC Holdings plc',
         price: 30.67, change: 0.5 }
    ];

    function fetchStockData(symbol) {
        // Mock data for all stocks
        const mockData = {
            AAPL: { price: 150.54, change: 0.5 },
            GOOGL: { price: 2800.66, change: -1.2 },
            AMZN: { price: 3401.46, change: 2.1 },
            MSFT: { price: 299.35, change: -0.3 },
            FB: { price: 355.23, change: 1.4 },
            TSLA: { price: 720.25, change: 0.8 },
            NFLX: { price: 510.89, change: -0.6 },
            NVDA: { price: 198.67, change: 1.2 },
            PYPL: { price: 245.12, change: -0.4 },
            INTC: { price: 54.22, change: 0.3 },
            CSCO: { price: 53.45, change: -0.2 },
            PEP: { price: 148.87, change: 0.7 },
            KO: { price: 54.95, change: 0.6 },
            PFE: { price: 41.21, change: -0.1 },
            JNJ: { price: 163.45, change: 0.2 },
            V: { price: 222.34, change: -0.5 },
            MA: { price: 349.56, change: 0.4 },
            DIS: { price: 179.32, change: -0.8 },
            ADBE: { price: 590.67, change: 1.1 },
            CRM: { price: 252.44, change: -0.7 },
            ORCL: { price: 87.32, change: 0.3 },
            IBM: { price: 142.31, change: 0.2 },
            UBER: { price: 51.23, change: 1.0 },
            LYFT: { price: 47.56, change: -1.1 },
            TWTR: { price: 64.98, change: 0.9 },
            SNAP: { price: 70.55, change: -0.5 },
            SQ: { price: 245.67, change: 1.3 },
            SPOT: { price: 265.78, change: -0.4 },
            ZM: { price: 355.67, change: -1.0 },
            DOCU: { price: 285.34, change: 0.6 },
            BABA: { price: 230.45, change: -0.8 },
            JD: { price: 81.23, change: 0.7 },
            SHOP: { price: 1220.78, change: 1.4 },
            WMT: { price: 139.54, change: -0.2 },
            TGT: { price: 230.56, change: 0.5 },
            MCD: { price: 232.67, change: -0.3 },
            SBUX: { price: 114.23, change: 0.2 },
            NKE: { price: 147.56, change: 0.8 },
            LULU: { price: 372.45, change: -0.5 },
            BA: { price: 241.78, change: 1.0 },
            GE: { price: 106.23, change: -0.1 },
            F: { price: 14.56, change: 0.4 },
            GM: { price: 56.78, change: -0.7 },
            TM: { price: 151.23, change: 0.3 },
            HMC: { price: 31.45, change: -0.2 },
            UBS: { price: 16.23, change: 0.6 },
            DB: { price: 12.45, change: -0.1 },
            HSBC: { price: 30.67, change: 0.5 }
        };
    
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData[symbol]), 50);
        });
    }
    

    function displayStockInfo(stock) {
        fetchStockData(stock.symbol)
        .then((data) => {
            const changeClass = data
            .change >= 0 ? 'positive' : 'negative';
            stockInfo.innerHTML = `
                <h3>${stock.name} (${stock.symbol})</h3>
                <p>Price: $${data.price.toFixed(2)}</p>
                <p class="${changeClass}">Change: ${data.change}%</p>
            `;
        });
    }
    

    function updateWatchlist()
    {
        watchlist
        .innerHTML = '';
         // Clear previous items
        watchlistStocks
        .forEach((stock) => {
            const li = document
            .createElement('li');
            li
            .textContent = `${stock.name} (${stock.symbol}) `;
            const removeButton = document
            .createElement('button');
            removeButton
            .textContent = 'Remove';
            removeButton
            .classList.add('remove');
            removeButton
            .addEventListener('click', () => 
            {
                watchlistStocks = watchlistStocks
                .filter(item => item
                    .symbol !== stock
                    .symbol);
                updateWatchlist();
                displayStockTable(allStocks); 
                // Refresh the table to update 
                // the "Add/Remove" buttons
            });
            li.appendChild(removeButton);
    
            // Add event listener to display 
            // stock details when clicked
            li.addEventListener('click', () => 
            {
                displayStockInfo(stock);
            });
    
            watchlist.appendChild(li);
        });
    }
    

    function displayStockTable(stocks) 
    {
    stockTableBody.innerHTML = '';
     // Clear previous data
    stocks
    .forEach((stock) => 
    {
        const changeClass = stock
        .change >= 0 ? 'positive' : 'negative';
        const tr = document
        .createElement('tr');
        tr.innerHTML = `
            <td>${stock
                .name}</td>
            <td>$${stock
                .price
                .toFixed(1)}</td>
            <td class="${changeClass}">${stock
                .change}%</td>
            <td class="actions"></td>
        `;
        const actionsTd = tr
        .querySelector('.actions');

        if (!watchlistStocks
            .some(item => item
                .symbol === stock
                .symbol))
        {
            const addButton = document
            .createElement('button');
            addButton
            .textContent = 'Add';
            addButton
            .classList
            .add('add');
            addButton
            .addEventListener('click', () =>
            {
                watchlistStocks
                .push(stock);
                updateWatchlist();
                displayStockTable(allStocks);
                // Refresh the table to
                //  update the "Add/Remove" buttons
            });
            actionsTd.appendChild(addButton);
        } else
         {
            const removeButton = document
            .createElement('button');
            removeButton
            .textContent = 'Remove';
            removeButton
            .classList
            .add('remove');
            removeButton
            .addEventListener('click', () =>
            {
                watchlistStocks = watchlistStocks
                .filter(item => item
                    .symbol !== stock
                    .symbol
                );
                updateWatchlist();
                displayStockTable(allStocks); 
                // Refresh the table 
                // to reflect the removal
            });
            actionsTd.appendChild(removeButton);
        }

        // Add event listener to display
        //  stock details when clicked
        tr
        .addEventListener('click', () => 
        {
            displayStockInfo(stock);
        });

        stockTableBody
        .appendChild(tr);
    });
}


    searchInput
    .addEventListener('input', (event) => {
        const searchTerm = event
        .target
        .value
        .toLowerCase();
        const filteredStocks = allStocks
        .filter(stock => 
            stock
            .name
            .toLowerCase()
            .includes(searchTerm) || 
            stock
            .symbol
            .toLowerCase()
            .includes(searchTerm)
        );
        displayStockTable(filteredStocks);
    });

    // Initial display of all stocks
    displayStockTable(allStocks);
    updateWatchlist();
});
