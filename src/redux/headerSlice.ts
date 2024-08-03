import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { wait } from '@testing-library/user-event/dist/utils';
import { setInterval, setTimeout } from 'timers/promises';
import axios from 'axios';

interface HeaderInitialState {
    city: string;
    dayWeather: WeatherData | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: HeaderInitialState = {
    city: '',
    dayWeather: null,
    status: 'idle',
    error: null
};

interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
        tz_id: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
            code: number;

        };
    };
    forecast: {
        forecastday: {
            date: string;
            date_epoch: number;
            day: {
                avgtemp_c: number;
                condition: {
                    text: string;
                    icon: string;
                    code: number;
                };
            };
        }[];
    };
}

export const fetchDay = createAsyncThunk('city/fetchDay', async (cityName: string) => {

    const apiKey: string = "90d88e3c0b7c412abfa132512240108";
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&lang=it&aqi=no&alerts=no&days=3`;

    const response = await axios.get(url);
    console.log(url);
    const data: WeatherData = response.data;
    // console.log(data);
    const simplifiedData: WeatherData = {
        location: {
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            tz_id: data.location.tz_id,

        },
        current: {
            temp_c: data.current.temp_c,
            condition: {
                text: data.current.condition.text,
                icon: data.current.condition.icon,
                code: data.current.condition.code
            }
        },
        forecast: {
            forecastday: data.forecast.forecastday.map(forecastDay => ({
                date: forecastDay.date,
                date_epoch: forecastDay.date_epoch,
                day: {
                    avgtemp_c: forecastDay.day.avgtemp_c,
                    condition: {
                        text: forecastDay.day.condition.text,
                        icon: forecastDay.day.condition.icon,
                        code: forecastDay.day.condition.code
                    }
                }
            }))
        }
    };

    console.log(simplifiedData);
    console.log(simplifiedData.forecast.forecastday[0].day.condition.text);


    return simplifiedData;



});

const citySlice = createSlice({
    name: 'citySlice',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setWeather(state, action: PayloadAction<WeatherData>) {
            state.dayWeather = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDay.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDay.fulfilled, (state, action: PayloadAction<WeatherData>) => {
                state.status = 'succeeded';
                state.dayWeather = action.payload;
            })
            .addCase(fetchDay.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong';
            });
    }
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;