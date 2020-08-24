import Model from '../../src/views/Home_TS/Model'
let model = new Model()

it('calls fetch with correct url', () => {
    const fakeFetch = (url:any) => {
        expect(url).toBe("https://api.openweathermap.org/data/2.5/search?code=84102,us&appid=YOURAPICODE")
        return new Promise(function(resolve){});
    }
    model.fetchResponse(fakeFetch, "84102");
})

const fakeData = {
    "coord": {
    "lon": -111.89,
    "lat": 40.77
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 271.34,
    "pressure": 1025,
    "humidity": 84,
    "temp_min": 270.45,
    "temp_max": 272.15
    },
    "visibility": 11265,
    "wind": {
    "speed": 3.1,
    "deg": 250
    },
    "clouds": {
    "all": 90
    },
    "dt": 1547345700,
    "sys": {
    "type": 1,
    "id": 5859,
    "message": 0.0042,
    "country": "US",
    "sunrise": 1547391022,
    "sunset": 1547425350
    },
    "id": 420037357,
    "name": "Salt Lake City",
    "cod": 200
}

it('Check city name from the response', (done:any) => {
    const fakeFetch = (url:any) => {
        return Promise.resolve({
            json: () => Promise.resolve(fakeData)
        })
    }
    model.fetchResponse(fakeFetch, "84102").then((result:any) => {
        expect(result.name).toBe("Salt Lake City")
    })
    done();
})
