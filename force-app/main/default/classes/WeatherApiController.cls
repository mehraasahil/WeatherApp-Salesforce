public class WeatherApiController {
    @AuraEnabled
    public static String getWeatherData(String city){
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:WeatherApiCredNamedCred/current.json?q='+EncodingUtil.urlEncode(city,'UTF-8'));
        req.setMethod('GET');
        HttpResponse res = new  HttpResponse();
        Http ht = new Http();
        res = ht.send(req);
        system.debug('Weathet detail '+res.getBody());
        return res.getBody();
    }
}