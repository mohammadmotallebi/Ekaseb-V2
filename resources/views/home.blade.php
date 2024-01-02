@extends('app.new')
@section('title', trans('lang.home'))
@section('content')

    <div class="row mt-1">
        <!-- Earnings (Annual) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div id="accordionCard">
                <div class="card border-left-primary h-100 py-2 card-hover" data-toggle="collapse" data-target="#aCard"
                     aria-expanded="true" aria-controls="aCard">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div
                                    class="text-xs font-weight-bold text-primary text-uppercase mb-1">{{ __('lang.card') }}</div>
                                @if ($data and $data['card'])

                                    @foreach($data['card'] as $c)
                                        @if($c->status == 1)
                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                                                 id="card">{{ $c->card_number }}</div>
                                        @endif
                                    @endforeach
                                @endif

                            </div>
                            <div class="col-auto">
                                <i class="fas fa-credit-card fa-2x text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="aCard" class="collapse" aria-labelledby="headingOne" data-parent="#accordionCard">
                    @if ($data and $data['card'])
                        <div class="list-group mt-1 border-top-primary overflow-auto" style="max-height: 200px">

                            @foreach($data['card'] as $c)
                                <div href="#"
                                     class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5>{{ $c->card_number }}</h5>
                                        @if($c->status == 1)
                                            <small class="mt-1"><i class="fa fa-check-circle fa-lg text-success"></i>
                                            </small>
                                        @else
                                            <small class="mt-1"><i class="fa fa-times-circle fa-lg text-danger"></i>
                                            </small>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif

                </div>
            </div>
        </div>

        <!-- Earnings (Annual) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div id="accordionTotBuy">
                <div class="card border-left-success h-100 py-2 card-hover" data-toggle="collapse" data-target="#totBuy"
                     aria-expanded="false" aria-controls="totBuy">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div
                                    class="text-xs font-weight-bold text-success text-uppercase mb-1">{{ __('lang.total_buy') }}</div>
                                @if ($data and $data['total'])
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                                         id="totalBuy">{{ $data['total'] ?? '---'}}</div>
                                @endif
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="totBuy" class="collapse" aria-labelledby="headingOne" data-parent="#accordionTotBuy">
                    <div class="list-group mt-1 border-top-success overflow-auto" style="max-height: 200px">
                        @if ($data)
                            @foreach($data['report'] as $c)
                                <div href="#"
                                     class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <b class="text-primary"><i class="fas fa-store-alt"></i> {{ $c->shop_name }}</b>
                                        <small class="text-danger">{{ number_format($c->price) }} <i
                                                class="fas fa-dollar-sign"></i> </small>
                                    </div>

                                    <p class="mt-1"><i class="fa fa-chevron-left fa-xs"></i> {{ $c->item_name }}</p>
                                    <small class="float-left text-success">{{ $c->buy_date }}</small>
                                    @if($c->totalscore > 0)
                                        <small class="float-right text-success"><i
                                                class="fa fa-gift"></i> {{ $c->totalscore}}</small>
                                    @elseif ($c->totalcredit > 0)
                                        <small class="float-right text-success"><i
                                                class="fa fa-gift"></i> {{ number_format($c->totalcredit)}}</small>
                                    @else
                                        <small class="float-right text-success">---</small>
                                    @endif
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        </div>

        <!-- Tasks Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div id="accordionCredit">
                <div class="card border-left-info h-100 py-2 card-hover" data-toggle="collapse" data-target="#Credit"
                     aria-expanded="false" aria-controls="totalCredit">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div
                                    class="text-xs font-weight-bold text-info text-uppercase mb-1">{{ __('lang.credit') }}</div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                                             id="totalCredit">{{ $data['credit'] ?? ''}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-money-bill fa-2x text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Credit" class="collapse" aria-labelledby="headingOne" data-parent="#accordionCredit">
                    <div class="list-group mt-1 border-top-success overflow-auto" style="max-height: 200px">
                        @if ($data)
                            @foreach($data['report'] as $c)
                                <div href="#"
                                     class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <b class="text-primary"><i class="fas fa-store-alt"></i> {{ $c->shop_name }}</b>
                                        <small class="text-danger">{{ number_format($c->price) }} <i
                                                class="fas fa-dollar-sign"></i> </small>
                                    </div>
                                    @if($c->totalscore > 0)
                                        <p class="text-success"><i class="fa fa-gift"></i> {{ $c->totalscore}}</p>
                                    @elseif ($c->totalcredit > 0)
                                        <p class="text-success"><i
                                                class="fa fa-gift"></i> {{ number_format($c->totalcredit)}}</p>
                                    @else
                                        <p class="text-success">---</p>
                                    @endif

                                    <small class="float-left text-success">{{ $c->buy_date }}</small>
                                    <small class="float-right text-success"><i
                                            class="fa fa-chevron-left fa-xs"></i> {{ $c->item_name }}</small>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div id="accordionLast">
                <div class="card border-left-warning h-100 py-2 card-hover" data-toggle="collapse"
                     data-target="#LastBuy" aria-expanded="false" aria-controls="LastBuy">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div
                                    class="text-xs font-weight-bold text-warning text-uppercase mb-1">{{ __('lang.last_buy') }}</div>
                                @if ($data)
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                                         id="lastDay">{{ $data['latest'] ?? '---'}}</div>
                                @endif
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-shopping-basket fa-2x text-gray-400"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="LastBuy" class="collapse" aria-labelledby="headingOne" data-parent="#accordionLast">
                    <div class="list-group mt-1 border-top-success overflow-auto" style="max-height: 200px">
                        @if ($data)
                            @foreach($data['reportLast'] as $c)
                                <div href="#"
                                     class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <b class="text-primary"><i class="fas fa-store-alt"></i> {{ $c->shop_name }}</b>
                                        <small class="text-danger">{{ number_format($c->price) }} <i
                                                class="fas fa-dollar-sign"></i> </small>
                                    </div>

                                    <p class="mt-1"><i class="fa fa-chevron-left fa-xs"></i> {{ $c->item_name }}</p>
                                    <small class="float-left text-success">{{ $c->buy_date }}</small>
                                    @if($c->totalscore > 0)
                                        <small class="float-right text-success"><i
                                                class="fa fa-gift"></i> {{ $c->totalscore}}</small>
                                    @elseif ($c->totalcredit > 0)
                                        <small class="float-right text-success"><i
                                                class="fa fa-gift"></i> {{ number_format($c->totalcredit)}}</small>
                                    @else
                                        <small class="float-right text-success">---</small>
                                    @endif
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>

            </div>
        </div>
    </div>





    <div class="row">
        <div class="col-xl-6">
            <canvas id="userChart" width="400" height="200"></canvas>
        </div>
        <div class="col-xl-6">
            <canvas id="user1Chart" width="400" height="200"></canvas>
        </div>
    </div>
    <div id="app">
        <h1 v-text="alert"></h1>
    </div>
    @push('scripts')
        @unless(mobileApp())

            <script>
                Chart.defaults.global.defaultFontFamily = 'Samim-FD';
                Chart.defaults.global.defaultFontColor = '#727272';
                let ctx = document.getElementById("userChart");
                var myLineChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                        datasets: [{
                            label: "{{ jdate('Y') }} خرید",
                            lineTension: 0.3,
                            backgroundColor: "rgba(41,50,75,0.18)",
                            borderColor: "rgb(78,115,223)",
                            pointRadius: 3,
                            pointBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointBorderColor: "rgba(78, 115, 223, 1)",
                            pointHoverRadius: 3,
                            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: [{{ $total }}],
                        }
                        ],
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                stacked: true
                            }]
                        },
                        scaleLabel: function (label) {
                            return '$' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontSize: '8px'
                        }
                    }
                });

                let ctx1 = document.getElementById("user1Chart");
                myLineChart = new Chart(ctx1, {
                    type: 'line',
                    data: {
                        labels: [{{ $year }}],
                        datasets: [{
                            label: "خرید کلی",
                            lineTension: 0.3,
                            backgroundColor: "rgba(255,101,0,0.24)",
                            borderColor: "rgb(223,100,78)",
                            pointRadius: 3,
                            pointBackgroundColor: "rgba(223,100,78)",
                            pointBorderColor: "rgba(223,100,78)",
                            pointHoverRadius: 3,
                            pointHoverBackgroundColor: "rgba(223,100,78)",
                            pointHoverBorderColor: "rgba(223,100,78)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: [{{ $tot }}],

                        }
                        ],
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                stacked: true
                            }]
                        },

                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontSize: '8px'
                        }
                    }
                });

            </script>
        @endunless
    @endpush
@endsection
