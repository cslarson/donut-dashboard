import CoinGecko from 'coingecko-api';

async function getDonutStats() {

    try {
        const CoinGeckoClient = new CoinGecko();

        let donutResponse = await CoinGeckoClient.simple.price({
            ids: ['donut'],
            vs_currencies: ['usd','eth'],
            include_market_cap:true,
            include_24hr_vol:true,
            include_24hr_change:true,
            include_last_updated_at:true            
        });

        let data = {
            donutUSD: donutResponse.data.donut.usd,
            donutETH: donutResponse.data.donut.eth,
            usdDonut: 1 / (donutResponse.data.donut.usd),
            ethDonut: 1 / (donutResponse.data.donut.eth)
        };

        console.log(donutResponse);
        return data;
    } catch (error) {
    console.error(error);
    }
}


export default getDonutStats;