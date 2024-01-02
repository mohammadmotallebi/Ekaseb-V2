@extends('app.header')
@section('body')


    @if(\Illuminate\Support\Facades\Auth::check() and mobileApp())
        <body id="page-top"
              class="color-theme-{{ $theme->default_theme ?? 'blue'}} {{ ($theme->darktheme == 1) ? ' theme-dark' : '' }}">
        @else
            <body id="page-top" class="color-theme-blue">
            @endif

            <!-- Page Wrapper -->
            <div id="wrapper">
                @if (mobileApp())
                <div id="app-loading"
                     style="position:absolute;text-align:center;width:100%;height:fit-content;top:0;bottom:0;right:0;left:0;margin:auto;z-index:2000000">
                    <div class="spinner-border m-7" role="status">
                        <span class="sr-only">در حال بارگذاری ...</span>
                    </div>
                </div>
                @endif
                @if (mobileApp())
                    <div dir="rtl" id="app">


                    </div>

                @endif
                @unless(mobileApp())
                    <!-- Sidebar -->
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark" id="accordionSidebar">
                        <button id="sidebarToggleTop"
                                style="position: absolute;left:-55px;top:19px;z-index: 1041;"
                                class="btn btn-link text-primary d-md-none rounded-circle mr-3">
                            <i class="fa fa-times-circle fa-lg"></i>
                        </button>
                        <!-- Sidebar - Brand -->
                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="home">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <i class="fas fa-laugh-wink"></i>
                            </div>
                            <div class="sidebar-brand-text mx-2">@lang('lang.project')</div>
                        </a>

                        <!-- Divider -->
                        <hr class="sidebar-divider my-0">

                        <!-- Nav Item - Dashboard -->
                        <li class="nav-item">
                            <a class="nav-link" href="home" @if(request()->is('home')) aria-current-nav="page" @endif>
                                <i class="fas fa-fw fa-tachometer-alt"></i>
                                <span>@lang('lang.dashboard')</span></a>
                        </li>

                        <!-- Divider -->
                        <hr class="sidebar-divider">

                        <!-- Heading -->
                        <div class="sidebar-heading text-right">
                            Interface
                        </div>

                        <!-- Nav Item - Pages Collapse Menu -->
                        @can('user_view')
                            <li class="nav-item"
                                @if(request()->is(['usersList']) or request()->routeIs('contractUserList')) aria-current-subnav-li="page" @endif>
                                <a class="nav-link  @unless(request()->is(['usersList']) or request()->routeIs('contractUserList')) collapsed @endunless"
                                   @if(request()->is(['usersList']) or request()->routeIs('contractUserList')) aria-current-nav="page"
                                   @endif href="#"
                                   data-toggle="collapse" data-target="#usersNav"
                                   aria-expanded="true" aria-controls="usersNav">
                                    <i class="fa fa-fw fa-users"></i>
                                    <span>@lang('lang.users')</span>
                                </a>
                                <div id="usersNav"
                                     class="collapse @if(request()->is(['usersList']) or request()->routeIs('contractUserList')) show @endif"
                                     aria-labelledby="headingUtilities"
                                     data-parent="#accordionSidebar">
                                    <div class="bg-light py-2 collapse-inner rounded">
                                        <a class="collapse-item" href="/usersList"
                                           @if(request()->is('usersList')) aria-current-subnav="page" @endif><i
                                                    class="fa fa-fw fa-arrow-left"></i> @lang('lang.system_users')
                                        </a>
                                        <a class="collapse-item" href="{{ route('contractUserList') }}"
                                           @if(request()->routeIs('contractUserList')) aria-current-subnav="page" @endif><i
                                                    class="fa fa-fw fa-arrow-left"></i> @lang('lang.contract_users')
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        @can('building_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/buildings" aria-expanded="true"
                                   @if(request()->is('buildings')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-building"></i>
                                    <span>@lang('lang.buildings')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        @can('estate_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/estates" aria-expanded="true"
                                   @if(request()->is('estates')) aria-current-nav="page" @endif >
                                    <i class="fas fa-fw fa-house-user"></i>
                                    <span>@lang('lang.estate')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan

                        @can('payment_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/payments" aria-expanded="true"
                                   @if(request()->is('payments')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-chevron-circle-left"></i>
                                    <span>@lang('lang.input_cash')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        @can('payment_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/costs" aria-expanded="true"
                                   @if(request()->is('costs')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-chevron-circle-right"></i>
                                    <span>@lang('lang.cost')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        @can('payment_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/funds" aria-expanded="true"
                                   @if(request()->is('funds')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-wallet"></i>
                                    <span>@lang('lang.fund')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        <!-- Nav Item - Utilities Collapse Menu -->
                        @can('shop_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/ShopsList" aria-expanded="true"
                                   @if(request()->is('ShopsList')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-shopping-cart"></i>
                                    <span>@lang('lang.shops')</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan

                        @can('shop-item_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/ShopItemsList" aria-expanded="true"
                                   @if(request()->is('ShopItemsList')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-shopping-basket"></i>
                                    <span>{{ __('lang.items') }}</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan
                        <!-- Nav Item - Utilities Collapse Menu -->
                        @can('card_view')
                            <li class="nav-item">
                                <a class="nav-link collapsed" href="/CardsList" aria-expanded="true"
                                   @if(request()->is('CardsList')) aria-current-nav="page" @endif>
                                    <i class="fas fa-fw fa-credit-card"></i>
                                    <span>{{ __('lang.cards') }}</span>
                                </a>
                            </li>

                            <hr class="sidebar-divider my-0">
                        @endcan

                        <!-- Nav Item - Utilities Collapse Menu -->
                        @can('setting_all')
                            <li class="nav-item" @if(request()->is(['RolesList'])) aria-current-subnav-li="page" @endif>
                                <a class="nav-link  @unless(request()->is(['RolesList'])) collapsed @endunless"
                                   @if(request()->is(['RolesList'])) aria-current-nav="page" @endif href="#"
                                   data-toggle="collapse" data-target="#settingsNav"
                                   aria-expanded="true" aria-controls="settingsNav">
                                    <i class="fa fa-fw fa-cog"></i>
                                    <span>@lang('lang.settings')</span>
                                </a>
                                <div id="settingsNav" class="collapse @if(request()->is(['RolesList'])) show @endif"
                                     aria-labelledby="headingUtilities"
                                     data-parent="#accordionSidebar">
                                    <div class="bg-light py-2 collapse-inner rounded">
                                        <a class="collapse-item" href="/RolesList"
                                           @if(request()->is('RolesList')) aria-current-subnav="page" @endif><i
                                                    class="fa fa-fw fa-users"></i> @lang('lang.category') @lang('lang.users')
                                        </a>
                                        <a class="collapse-item" href="#" id="shopItemCategoriesModal"><i
                                                    class="fa fa-fw fa-object-group"></i> @lang('lang.category') @lang('lang.items')
                                        </a>
                                        <a class="collapse-item" href="/Cities"><i
                                                    class="fa fa-fw fa-city"></i> @lang('lang.cities')
                                        </a>
                                        <a class="collapse-item" href="/States"><i
                                                    class="fa fa-fw fa-map-signs"></i> @lang('lang.states')</a>
                                        <a class="collapse-item" href="#" id="gendersModal"><i
                                                    class="fa fa-fw fa-venus-mars"></i> @lang('lang.gender')</a>
                                        <a class="collapse-item" href="#" id="colorsModal"><i
                                                    class="fa fa-fw fa-paint-brush"></i> @lang('lang.color')</a>
                                        <a class="collapse-item" href="#" id="costTypeModal"><i
                                                    class="fa fa-fw fa-funnel-dollar"></i> @lang('lang.cost_type')</a>
                                        <a class="collapse-item" href="#" id="paymentReasonModal"><i
                                                    class="fa fa-fw fa-funnel-dollar"></i> @lang('lang.payment_reason')
                                        </a>
                                    </div>
                                </div>
                            </li>

                        @endcan
                    </ul>

                    <!-- End of Sidebar -->

                    <!-- Content Wrapper -->
                    <div id="content-wrapper" class="d-flex flex-column">

                        <!-- Main Content -->
                        <div id="content">
                            @auth()
                                <!-- Topbar -->
                                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                        <i class="fa fa-bars fa-lg"></i>
                                    </button>
                                    <ul class="navbar-nav ml-auto">
                                        <div class="topbar-divider d-none d-sm-block"></div>

                                        <!-- Nav Item - User Information -->
                                        <li class="nav-item dropdown no-arrow">
                                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span
                                                        class="mr-2 d-none d-lg-inline text-gray-600 small">{{ Auth::user()->name . ' ' . Auth::user()->family }}</span>
                                                <img class="img-profile rounded-circle"
                                                     src="">
                                            </a>
                                            <!-- Dropdown - User Information -->
                                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                 aria-labelledby="userDropdown">
                                                <a class="dropdown-item" href="Profile">
                                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                    پروفایل
                                                </a>
                                                <a class="dropdown-item" href="#">
                                                    <i class="fas fa-mail-bulk fa-sm fa-fw mr-2 text-gray-400"></i>
                                                    پیامها
                                                </a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="logout">
                                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                    خروج
                                                </a>
                                            </div>
                                        </li>

                                    </ul>

                                </nav>
                                <!-- End of Topbar -->
                            @endauth
                            <!-- Begin Page Content -->
                            <div class="container-fluid">

                                <!-- Page Heading -->
                                @yield('content')
                            </div>


                        </div>
                        <!-- End of Main Content -->

                        <!-- Footer -->
                        {{--        <footer class="sticky-footer bg-white">--}}
                        {{--            <div class="container my-auto">--}}
                        {{--                <div class="copyright text-center my-auto">--}}
                        {{--                    <span>Copyright &copy; Your Website 2020</span>--}}
                        {{--                </div>--}}
                        {{--            </div>--}}
                        {{--        </footer>--}}
                        <!-- End of Footer -->

                    </div>
                    <!-- End of Content Wrapper -->
                @endunless
            </div>
            <!-- End of Page Wrapper -->


            <!-- Bootstrap core JavaScript-->

            @include('app.footer')
            </body>

            </html>
        @endsection
