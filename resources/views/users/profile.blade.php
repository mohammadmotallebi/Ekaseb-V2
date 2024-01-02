@extends('app.main')
<style>
    .modal-fade {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1099;
        display: none;
    }
</style>
<div class="modal-fade"></div>
@section('content')
    <style>
        input[type="file"] {
            display: none;
        }

    </style>
    {{--    <link rel="stylesheet" type="text/css" href="{{asset('select2/css/select2-user.css')}}">--}}


    <div class="row-cols-1 mb-2" align="center">
        <div class="row text-center" style="width: 150px;height: 150px;">
            <img width="150" height="150" id="img" class="shadow-sm rounded-circle card-hover"
                 src="{{ $user->user_pic }}"></div>
        <div class="row text-center" style="width: 150px;">
            <input type="file" name="profile-image" id="profile-image" accept="image/*"/>

        </div>


        <script>
            $('#img').click(function () {
                $('#profile-image').trigger('click');
            })

        </script>
    </div>
    <form class="user was-validated" role="form" id="profileForm" method="POST">
        {!! csrf_field() !!}
        <input type="hidden" name="data-image" id="data-image"/>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user"
                       value="{{ $card->card_number ?? '' }}"
                       @if(!$card->card_number)
                       placeholder="{{ trans('lang.card') }}"
                       minlength="16" maxlength="16"
                       oninvalid="this.setCustomValidity('{{ trans('lang.enter_card') }}')"
                       oninput="setCustomValidity('')"
                       name="card"
                       id="card"
                       required
                       @else
                       readonly
                    @endif
                >
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user" id="name" name="name"
                       value="{{ $user->name }}" placeholder="@lang('lang.name')"
                       oninvalid="this.setCustomValidity('@lang('lang.name_enter')')" oninput="setCustomValidity('')"
                       required>
            </div>
            <div class="col-sm-6">
                <input type="text" class="form-control form-control-user" id="family" name="family"
                       value="{{ $user->family }}" placeholder="@lang('lang.family')"
                       oninvalid="this.setCustomValidity('@lang('lang.family_enter')')" oninput="setCustomValidity('')"
                       required>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user"
                       value="{{ $user->identity_code }}"
                       disabled
                >
            </div>
            <div class="col-sm-6">
                <input type="text" class="form-control form-control-user"
                       value="{{ $user->mobile }}"
                       disabled
                >
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input id="birthday" name="birthday" type="text" data-mddatetimepicker="true" data-placement="right"
                       class="form-control form-control-user" value="{{ $user->birthday }}" autocomplete="off">
            </div>
            <div class="col-sm-6">
                <select id="gender" name="gender" class="custom-select" sth-select
                        sth-select-title="Select a person:"
                        sth-select-placeholder="No person select"
                        sth-select-autosize="true">
                    <option></option>
                    @forelse($gender as $x)
                        <option value="{{$x->id}}"
                                @if($x->id == $user->gender) selected @endif>{{$x->gender_name}}</option>
                        @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input id="tel" name="tel" type="text" class="form-control form-control-user"
                       value="{{ $user->tel }}" autocomplete="off">
            </div>
            <div class="col-sm-6">
                <input id="email" name="email" type="text" class="form-control form-control-user"
                       value="{{ $user->email }}" autocomplete="off">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <select id="city" name="city" class="custom-select">
                    <option></option>
                    @forelse($city as $x)
                        <option value="{{$x->id}}"
                                @if($x->id == $user->city) selected @endif>{{$x->city_name}}</option>
                        @endforeach
                </select></div>
            <div class="col-sm-6">
                <select id="state" name="state" class="custom-select">
                    <option></option>
                    @forelse($state as $x)
                        <option value="{{$x->id}}" @if($x->id == $user->state) selected @endif>{{$x->name}}</option>
                        @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input id="father_name" name="father_name" type="text" class="form-control form-control-user"
                       value="{{ $user->father_name }}" autocomplete="off">
            </div>
            <div class="col-sm-6">
                <input id="wedding_date" name="wedding_date" data-mddatetimepicker="true" data-placement="right"
                       type="text" class="form-control form-control-user"
                       value="{{ $user->wedding_date }}" autocomplete="off">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input id="weight" name="weight" type="text" class="form-control form-control-user"
                       value="{{ $user->weight }}" autocomplete="off">
            </div>
            <div class="col-sm-6">
                <input id="height" name="height" type="text" class="form-control form-control-user"
                       value="{{ $user->height }}" autocomplete="off">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <select id="job" name="job" class="custom-select">
                    <option></option>
                    @forelse($job as $x)
                        <option value="{{$x->id}}"
                                @if($x->id == $user->job) selected @endif>{{$x->job_name}}</option>
                        @endforeach
                </select></div>
            <div class="col-sm-6">
                <select id="int_color" name="int_color" class="custom-select">
                    <option></option>
                    @forelse($color as $x)
                        <option value="{{$x->id}}"
                                @if($x->id == $user->int_color) selected @endif>{{$x->color_name}}</option>
                        @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
                <textarea id="address" name="address" cols="40" rows="5" class="form-control form-control-user"
                          autocomplete="off">{{ $user->address }}</textarea>

            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0 text-center">
                <button type="button" id="saveProfile"
                        class="btn btn-success col-12 form-control-user">@lang('lang.save')</button>
            </div>
        </div>
    </form>
    @push('scripts')
        <script>

            // $("#gender").select2({
            //     width: "100%",
            //     language: "fa",
            //     dir: "rtl",
            //     theme: "user",
            //     placeholder: "انتخاب کنید...",
            //     minimumResultsForSearch: 10,
            //     searchInputPlaceholder: 'جستجو...'
            // });
            {{--$('#city').on('change', function (e) {--}}
            {{--    $('#state').html('');--}}
            {{--    $.ajax({--}}
            {{--        url: 'state/' + $(this).val(),--}}
            {{--        tayp: 'post',--}}
            {{--        beforesend: function () {--}}

            {{--            $('#state').html('<option class="text-success">@lang('lang.loading')</option>');--}}
            {{--        },--}}
            {{--        success: function (res) {--}}
            {{--            $('#state').html('');--}}
            {{--            $("#state").select2({--}}
            {{--                width: "100%",--}}
            {{--                language: "fa",--}}
            {{--                dir: "rtl",--}}
            {{--                theme: "bootstrap4",--}}
            {{--                placeholder: "{{ __('lang.select') }}",--}}
            {{--                minimumresultsforsearch: 10,--}}
            {{--                data: res--}}
            {{--            });--}}

            {{--        }--}}
            {{--    })--}}


            {{--});--}}
            $(document).on('click', 'button#saveProfile', function (clickEvent) {
                var imgData = $('#img').attr('src');
                $('#data-image').val(imgData);
                var i = 0;
                $('form#profileForm').find('input:required').each(function () {
                    if ($(this).val() == '') {
                        $(this).focus();
                        new Noty({
                            theme: 'relax',
                            timeout: 3000,
                            type: 'error',
                            layout: 'topRight',
                            text: 'وارد کردن ' + $(this).attr('placeholder') + ' الزامیست'
                        }).show();
                        i = i + 1;
                    }
                });
                if (i == 0) {
                    var formData = $('#profileForm').serialize();
                    $.ajax({
                        url: 'Update',
                        type: 'post',
                        data: formData,
                        dataType: 'json',
                        beforeSend: function () {
                            $(".modal-fade").show();
                        },
                        success: function (res) {
                            $(".modal-fade").hide();
                            new Noty({
                                theme: 'relax',
                                timeout: 3000,
                                type: 'success',
                                layout: 'topRight',
                                text: 'تغییرات شما با موفقیت ذخیره شد!'
                            }).show();
                        },
                        error: function () {
                            $(".modal-fade").hide();
                            new Noty({
                                theme: 'relax',
                                timeout: 3000,
                                type: 'success',
                                layout: 'topRight',
                                text: 'تغییرات شما با موفقیت ذخیره شد!'
                            }).show();
                        }

                    })
                }

            });

            $('#card').keypress(function () {
                if ($(this).val().length == 16) {
                    $.ajax({
                        url: 'validation-card',
                        type: 'GET',
                        data: {str: $(this).val()},
                        success: function (res) {
                            if (res == 1) {
                                $('#success').show();
                                $('#danger').hide();
                            } else {
                                $('#success').hide();
                                $('#danger').show();
                            }
                        }
                    })
                }
            })
        </script>

    @endpush
@endsection

