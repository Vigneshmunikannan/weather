import React from "react";
import 'material-icons';
import img from "./i.png"
export default function App() {
    return (
        <div>
            <div className="container">
                <div className="container-left">
                    <div className="left-icon">
                        <span class="material-icons-outlined" style={{ color: "white" }}>add_box</span>
                        <span class="material-icons" style={{ color: "white" }}>more_horiz</span>
                        <div class="toggle">
                            <pre ><sup>o</sup>C </pre>
                            <input type="checkbox" id="toggleSwitch" class="toggle-input" />
                            <label for="toggleSwitch" class="toggle-label">
                                <span class="toggle-inner"></span>
                                <span class="toggle-switch"></span>
                            </label>
                            <pre> <sup>o</sup>F</pre>
                        </div>
                    </div>
                    <div className="left-text-container">
                        <div className="left-text">
                            <div className="left-text-1">
                                <span class="material-icons-outlined">
                                    near_me
                                </span>
                                <span>New York,USA</span>

                            </div>
                            <div className="left-text-2">
                                <span class="material-icons-outlined">
                                    fluorescent
                                </span>
                                <pre>  07:19</pre>
                            </div>
                        </div>
                        <div className="left-text">
                            <span>Tuesday 28 sept</span>
                            <div className="left-text-2">
                                <span class="material-icons-outlined">
                                    fluorescent
                                </span>
                                <pre>  19:32</pre>
                            </div>
                        </div>
                    </div>
                    <div className="left-degree">
                        <span class="material-icons-outlined">
                            keyboard_arrow_left
                        </span>
                        <h1>27<sup>o</sup></h1>
                        <span class="material-icons-outlined">
                            keyboard_arrow_right
                        </span>
                    </div>
                    <div className="txt-sunny">
                        <span class="material-icons-outlined" style={{ color: "white", fontSize: "30px" }}>
                            light_mode
                        </span>
                        <h1>Sunny</h1>
                    </div>
                </div>
                {/* Right side */}
                <div className="container-right">

                    <div className="header">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h3>Welcome back Isabella</h3>
                            <p style={{ marginTop: "7px" }}>Check out today's weather information</p>
                        </div>
                        <div>
                            <span class="material-icons">
                                more_horiz
                            </span>
                            <img src={img} alt="img" />
                        </div>
                    </div>



                    <div className="box">
                        <div className="box-1">
                            <p>Upcoming hours</p>
                            <div>
                                <p>Rain Precipitation<span class="material-icons">
                                    expand_more
                                </span></p>
                                <p>Next days <span class="material-icons">
                                    chevron_right
                                </span></p>
                            </div>
                        </div>
                        <div className="box-graph">
                            <div>
                                <p>Now</p>
                                <span class="material-icons">
                                    light_mode
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>11:00</p>
                                <span class="material-icons">
                                    sunny
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>12:00</p>
                                <span class="material-icons">
                                    light_mode
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>13:00</p>
                                <span class="material-icons">
                                    cloudy_snowing
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>14:00</p>
                                <span class="material-icons">
                                    light_mode
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>15:00</p>
                                <span class="material-icons">
                                    light_mode
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>16:00</p>
                                <span class="material-icons">
                                    cloudy_snowing
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                            <div>
                                <p>17:00</p>
                                <span class="material-icons">
                                    sunny_snowing
                                </span>
                                <p>27<sup>o</sup></p>
                                <div className="line"></div>
                                <p>23%</p>
                            </div>
                        </div>

                    </div>
                    <p style={{ paddingLeft: "50px", paddingTop: "10px", fontSize: "25px" }}>More details of today's weather </p>
                    <div className="display-box">
                        <div className="small-box">

                            <p>Humidity</p>
                            <span class="material-icons">
                                water_drop
                            </span>
                        </div>
                        <div className="small-box">

                            <p>Wind</p>
                            <span class="material-icons">
                                air
                            </span>
                        </div>
                        <div className="small-box">

                            <p>Precipitation</p>
                            <span class="material-icons-outlined">
                                thunderstorm
                            </span>
                        </div>
                        <div className="small-box">

                            <p>UV index</p>
                            <span class="material-icons-outlined">
                                flare
                            </span>
                        </div>
                        <div className="small-box">

                            <p>Feel like</p>
                            <span class="material-icons-outlined">
                                thermostat
                            </span>
                        </div>
                        <div className="small-box">

                            <p>Chance of rain</p>
                            <span class="material-icons">
                                water_drop
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}