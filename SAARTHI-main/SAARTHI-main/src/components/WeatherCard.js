import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Input, Button, Card, CardBody } from "reactstrap"
import "./weather.css";
import { IoIosWater } from "react-icons/io"
import { BsWind, BsThermometerHalf } from "react-icons/bs"
import { BiMap } from "react-icons/bi"
import { FaSun } from "react-icons/fa"

const Weather = () => {

    const [fcity, setFcity] = useState("");
    const [tcity, setTcity] = useState("");
    const [fcountry, setFcountry] = useState("");
    const [tcountry, setTcountry] = useState("");
    const [fdata, setFdata] = useState({});
    const [tdata, setTdata] = useState({});
    const [ftemp, setFtemp] = useState(0);
    const [fhumidity, setFhumidity] = useState(0)
    const [fdescription, setFdescription] = useState(0)
    const [fname, setFname] = useState(0)
    const [fwindspeed, setFwindspeed] = useState(0)
    const [ttemp, setTtemp] = useState(0);
    const [thumidity, setThumidity] = useState(0)
    const [tdescription, setTdescription] = useState(0)
    const [tname, setTname] = useState(0)
    const [twindspeed, setTwindspeed] = useState(0)

    const fetchDataf = async () => {
        // console.log("to");
        // console.log("city = ", fcity, "country = ", fcountry);
        const { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${fcity},${fcountry}&appid=a9553eeffc4cfe23a2011d3fb64edc72`);
        // console.log("data = ", data);
        setFdata(data);
    }
    const fetchDatat = async () => {
        // console.log("from");
        const { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${tcity},${tcountry}&appid=a9553eeffc4cfe23a2011d3fb64edc72`);
        setTdata(data);
        // console.log("data", data);
    }
    useEffect(() => {
        // console.log("length = ", Object.keys(fdata).length);
        // console.log("fdata = ", fdata);
        if (Object.keys(fdata).length > 0) {
            setFtemp(Math.ceil((fdata.main?.temp) - 273));
            setFhumidity(fdata.main?.humidity);
            setFname(fdata.name);
            setFdescription(fdata.weather[0].description);
            setFwindspeed(fdata.wind?.speed);
        }
    }, [fdata])


    useEffect(() => {
        // console.log("length = ", Object.keys(tdata).length);
        // console.log("tdata = ", tdata);
        if (Object.keys(tdata).length > 0) {
            setTtemp(Math.ceil((tdata.main?.temp) - 273));
            setThumidity(tdata.main?.humidity);
            setTname(tdata.name);
            setTdescription(tdata.weather[0].description);
            setTwindspeed(tdata.wind?.speed);
        }
    }, [tdata])

    return (
        <div>
            <h1 className="check">Check Weather</h1>
        <div className="wcard">
            <div className="fromWeather">
                <h2 className="from">From</h2>
                <Input type="text" placeholder="Enter City Name" value={fcity} className="city"
                    onChange={e => { setFcity(e.target.value) }} />
                <Input type="text" placeholder="Enter Country Name" value={fcountry} className="country"
                    onChange={e => { setFcountry(e.target.value) }} /><br></br>
                <Button color="success" onClick={fetchDataf} className="button">Get Tru Weather</Button>
                <Card className="cards">
                    <CardBody className="text-center mt-5">
                        <div><BsThermometerHalf size={20} /> {ftemp} °C</div>
                        <div><IoIosWater size={20} /> {fhumidity} %</div>
                        <div><FaSun /> {fdescription}</div>
                        <div><BiMap /> {fname}</div>
                        <div><BsWind /> {fwindspeed}Km/h</div>
                    </CardBody>
                </Card>
            </div>
            <div className="toWeather">
                <h2 className="from">TO</h2>
                <Input type="text" placeholder="Enter City Name" value={tcity} className="city"
                    onChange={e => { setTcity(e.target.value) }} />
                <Input type="text" placeholder="Enter Country Name" value={tcountry} className="country"
                    onChange={e => { setTcountry(e.target.value) }} /><br></br>
                <Button color="success" onClick={fetchDatat} className="button">Get Tru Weather</Button>
                <Card className="cards">
                    <CardBody className="text-center mt-5">
                        <div><BsThermometerHalf size={20} /> {ttemp} °C</div>
                        <div><IoIosWater size={20} /> {thumidity} %</div>
                        <div><FaSun /> {tdescription}</div>
                        <div><BiMap /> {tname}</div>
                        <div><BsWind /> {twindspeed}Km/h</div>
                    </CardBody>
                </Card>
            </div>
        </div>
        </div>
    )
}


export default Weather;
