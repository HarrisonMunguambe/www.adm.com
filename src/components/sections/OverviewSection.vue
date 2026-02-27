<template>
        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Overview
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
        <div class="overview-section ptb-120">
            <div class="container-fluid">
                <div class="overview-area">
                    <div class="overview-element" data-aos="fade-up" data-aos-duration="1200">
                        <img src="@/assets/images/element/element-6.png" alt="element">
                    </div>
                    <div class="overview-tab">
                        <nav>
                            <div class="overview-tab-thumb" data-aos="fade-left" data-aos-duration="1200">
                                <img src="@/assets/images/overview/overview-2.png" alt="overview">
                                <div class="nav-tab-area">
                                    <div class="nav-tab-header">
                                        <span class="sub-title"><span>#1</span> Private Jet Charter</span>
                                        <h2 class="title">Find the Best Service For You</h2>
                                    </div>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link" id="private-jet-tab" data-toggle="tab"
                                            data-target="#private-jet" type="button" role="tab"
                                            aria-controls="private-jet" aria-selected="true"><span>01</span> Private Jet
                                            Charter</button>
                                        <button class="nav-link active" id="business-jet-tab" data-toggle="tab"
                                            data-target="#business-jet" type="button" role="tab"
                                            aria-controls="business-jet" aria-selected="false"><span>02</span> Business
                                            Jet Charter</button>
                                        <button class="nav-link" id="private-helicopter-tab" data-toggle="tab"
                                            data-target="#private-helicopter" type="button" role="tab"
                                            aria-controls="private-helicopter" aria-selected="false"><span>03</span>
                                            Private Helicopter</button>
                                        <button class="nav-link" id="air-ambulance-tab" data-toggle="tab"
                                            data-target="#air-ambulance" type="button" role="tab"
                                            aria-controls="air-ambulance" aria-selected="false"><span>04</span> Air
                                            Ambulance</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent" data-aos="fade-right" data-aos-duration="1200">
                            <div class="tab-pane fade" id="private-jet" role="tabpanel"
                                aria-labelledby="private-jet-tab">
                                <div class="overview-item">
                                    <div class="overview-thumb">
                                        <img src="@/assets/images/overview/overview-1.png" alt="overview">
                                        <div class="overview-thumb-content">
                                            <h3 class="title"><router-link to="/service-details">Private Jet Charter</router-link>
                                            </h3>
                                            <p>Trade crowded airports and wasted time for the ease, comfort, and
                                                convenience of travel by private jet.</p>
                                            <div class="overview-btn">
                                                <router-link to="/service-details" class="custom-btn"><i
                                                        class="icon-btn-icon-v2"></i> Book Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="business-jet" role="tabpanel"
                                aria-labelledby="business-jet-tab">
                                <div class="overview-item">
                                    <div class="overview-thumb">
                                        <img src="@/assets/images/overview/overview-1.png" alt="overview">
                                        <div class="overview-thumb-content">
                                            <h3 class="title"><router-link to="/service-details">Business Jet Charter</router-link>
                                            </h3>
                                            <p>Trade crowded airports and wasted time for the ease, comfort, and
                                                convenience of travel by private jet.</p>
                                            <div class="overview-btn">
                                                <router-link to="/service-details" class="custom-btn"><i
                                                        class="icon-btn-icon-v2"></i> Book Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="private-helicopter" role="tabpanel"
                                aria-labelledby="private-helicopter-tab">
                                <div class="overview-item">
                                    <div class="overview-thumb">
                                        <img src="@/assets/images/overview/overview-1.png" alt="overview">
                                        <div class="overview-thumb-content">
                                            <h3 class="title"><router-link to="/service-details">Private Helicopter</router-link></h3>
                                            <p>Trade crowded airports and wasted time for the ease, comfort, and
                                                convenience of travel by private jet.</p>
                                            <div class="overview-btn">
                                                <router-link to="/service-details" class="custom-btn"><i
                                                        class="icon-btn-icon-v2"></i> Book Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="air-ambulance" role="tabpanel"
                                aria-labelledby="air-ambulance-tab">
                                <div class="overview-item">
                                    <div class="overview-thumb">
                                        <img src="@/assets/images/overview/overview-1.png" alt="overview">
                                        <div class="overview-thumb-content">
                                            <h3 class="title"><router-link to="/service-details">Air Ambulance</router-link></h3>
                                            <p>Trade crowded airports and wasted time for the ease, comfort, and
                                                convenience of travel by private jet.</p>
                                            <div class="overview-btn">
                                                <router-link to="/service-details" class="custom-btn"><i
                                                        class="icon-btn-icon-v2"></i> Book Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        End Overview
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

