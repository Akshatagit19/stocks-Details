using {akshata.db as akshata} from '../db/mydb';


service myservice{
    entity stocks as projection on akshata.stocks;
    entity stocksDetails as projection on akshata.stockdetails;

}