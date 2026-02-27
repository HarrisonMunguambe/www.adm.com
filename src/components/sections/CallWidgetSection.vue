<template>
        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Call-widget
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
        <div class="call-widget-wrapper">
            <button type="button" class="call-widget-btn"><span class="num"><i class="icon-call-icon"></i> +1 814 929
                    4263</span> <span class="arrow"></span></button>
            <div class="call-widget-form-area">
                <form class="book-form">
                    <div class="row justify-content-center mb-20-none">
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 form-group">
                            <div class="book-select">
                                <label>From</label>
                                <div class="book-form-icon">
                                    <i class="icon-from-airplane"></i>
                                </div>
                                <select class="book-select form--control">
                                    <option value="dhaka" selected>Dhaka</option>
                                    <option value="london">London</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 form-group">
                            <div class="book-select">
                                <label>To</label>
                                <div class="book-form-icon">
                                    <i class="icon-to-airplane"></i>
                                </div>
                                <select class="book-select form--control">
                                    <option value="london" selected>London</option>
                                    <option value="dhaka">Dhaka</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 form-group">
                            <div class="book-select">
                                <label>Date</label>
                                <div class="book-form-icon">
                                    <i class="icon-schedule-icon"></i>
                                </div>
                                <select class="book-select form--control">
                                    <option value="25/12/2021" selected>25/12/2021</option>
                                    <option value="30/12/2021">30/12/2021</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 form-group">
                            <label>Passenger</label>
                            <div class="book-quantity">
                                <div class="book-plus-minus">
                                    <div class="dec qtybutton">-</div>
                                    <input class="book-plus-minus-box qty" type="text" name="qty" value="1" readonly>
                                    <div class="inc qtybutton">+</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 form-group">
                            <button type="submit" class="btn--base w-100 mt-10"><i class="icon-btn-icon"></i> Book
                                Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        End Call-widget
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

