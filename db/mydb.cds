namespace akshata.db;

entity stocks{
    key code: String(10);
        stockexchange:String(150);
};
entity stockdetails {
    key code: String(10);
        codesubstocks:String(10);
        stockname:String(150);
        price:Decimal(5,2);

}