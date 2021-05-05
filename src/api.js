const request=require('request');
 function getWeather(location,callback)
 {
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiY2hhbmR1MTIzNDUiLCJhIjoiY2tvOXRtYnlmMHk1bTJubXF4ZG5mdXF5dCJ9.KYtxMCX6L7zFeLkLbP_q1Q`;
   request({url,json:true},(err,res)=>
   {
       
       if(err)
       {
        return callback(undefined,e);  
       }
       try{
       var lon=res.body.features[0].center[0];
       var lat=res.body.features[0].center[1];
       }
       catch(err)
       {
           
        return callback(undefined,err);

       }
       const url1=`http://api.weatherapi.com/v1/current.json?key=4181db82a5be4ed294f85309210405&q=${lat},${lon}&aqi=no`;
       request(url1,(err,res)=>
       {
          
        
          if(err)
           {
               return callback(undefined,err);
              
                
           }
           body=JSON.parse(res.body);
        
          const name=body.location.name;
        
           const state=body.location.region;
           const country=body.location.country;
           const temp=body.current.temp_c;
           const windspeed=body.current.wind_kph;
           const winddirection=body.current.wind_dir;
           const humidity=body.current.humidity;
           const text=body.current.condition.text;
           callback({
               name,
               state,
               country,
               temp,
               windspeed,
               winddirection,
               humidity,
               text
           },undefined);

    });
});
 };


 
 module.exports=getWeather;
 