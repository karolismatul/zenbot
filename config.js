var c = module.exports = require('./config_defaults')()

// mongo stuff
c.mongo_url = "mongodb://" + (process.env.MONGODB_PORT_27017_TCP_ADDR || "localhost") + ":27017/zenbrain" // change if your mongo server isn't local

c.mongo_username = null // normally not needed
c.mongo_password = null

c.poloniex_key = '8DYC7CT1-IVQD9GN0-DI8HYIA7-S80P2W90' // TO ENABLE BOT TRADING: set this to Poloniex API key,
c.poloniex_secret = '19715cd8b8f32289c9dd3f4181a83d3a3cfc1eeb70febbf4bba46af0f5b8256e402a422ee363d65969da17ecca82aa02066429f3fc76a58dbbe3b6d2708c4a9f' // set this to Poloniex API secret,

c.trade_log = true // log new trades as they come in.

// watch these exchanges
c.watch_exchanges = [
  //"bitfinex",
  //"gdax",
  //"kraken",
  "poloniex"
]

// selector for indicators, trading, etc
c.default_selector = "poloniex.BTC-USDT"

// add selectors in the format "{exchange-slug}.{asset}-{currency}" to graph them
c.graph_selectors = [
  c.default_selector,
  "poloniex.ETH-BTC",
  "poloniex.ETH-USDT"
]

// trade logic is linked in the custom pair config files, see config_poloniex_BTC_USDT.js
//c.logic = require('./default_logic')
