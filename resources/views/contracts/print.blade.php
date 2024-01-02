<style>
    @font-face {
        font-family: 'Samim-FD';
        src: url('/fonts/Samim-FD.eot?#') format('eot'),
        url('/fonts/Samim-FD.woff') format('woff'),
        url('/fonts/Samim-FD.ttf') format('truetype');
    }

    body {
        background: rgb(204, 204, 204);
    }

    div[size="A4"] {
        background-image: url('/img/back.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        display: block;
        margin: 0 auto;
        margin-bottom: 0.5cm;
        box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
        width: 21cm;
        height: 29.7cm;
    }

    .content {
        padding: 6cm 25px 5cm 25px;
        max-height: 20cm;
        display: block;
        font: 13px "Samim-FD", serif;
        direction: rtl;
        text-align: justify;

    }

    u {
        border-bottom: 1px dotted #999;
        text-decoration: none;
        font-weight: bold;
    }

    t {
        font-size: 16px;
        font-weight: bold;
    }

    @media print {
        body, div[size="A4"] {
            margin: 0;
            box-shadow: 0 0 0 0;
        }
    }
</style>
<div size="A4">
    <div class="content">
        <t>{{ __('lang.print_contract.p_1') }}</t>
        <p>
        {{ __('lang.print_contract.owners') }}
        <ol class="mt-0">
            @foreach($res->owners as $owner)
                <li>{!! '<u>'.$owner->name. ' ' . $owner->family. '</u>,' !!} {{ __('lang.print_contract.address') }} {!! '<u>'.$owner->address.'</u>,' !!}
                    ,{{ __('lang.print_contract.telephone') }} {!! '<u>'.$owner->tel. '</u>' !!}
                    ,{{ __('lang.print_contract.mobile') }} {!! '<u>'.$owner->mobile. '</u>' !!}</li>
            @endforeach
        </ol>
        </p>
        <p>
            {{ __('lang.print_contract.renter') }} {!! '<u>'.$res->renter->name. ' ' . $res->renter->family. '</u>,' !!}
            &nbsp;
            {{ __('lang.print_contract.father') }} {!! '<u>'.$res->renter->father_name. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.shenasnameh') }} {!! '<u>'.$res->renter->shenasnameh. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.sadereh') }} {!! '<u>'.$res->renter->sadereh. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.identity') }} {!! '<u>'.$res->renter->identity_code. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.birthday') }} {!! '<u>'.$res->renter->birthday. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.address') }} {!! '<u>'.$res->renter->address. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.telephone') }} {!! '<u>'.$res->renter->telephone. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.mobile') }} {!! '<u>'.$res->renter->mobile. '</u>,' !!}&nbsp;
        </p>
        <p>
            {{ __('lang.print_contract.note_1') }}
        </p>
        <t>{{ __('lang.print_contract.p_2') }}</t>
        <p>
            {{ __('lang.print_contract.placement') }} {!! '<u>'.$res->estate->floor. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.vahed') }} {!! '<u>'.$res->estate->id. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.dimension') }} {!! '<u>'.$res->estate->dimension. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.powerid') }} {!! '<u>'.$res->estate->powerid. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.postal') }} {!! '<u>'.$res->estate->postal. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.active_tel') }} {!! '<u>'.$res->estate->telephone. '</u>,' !!}&nbsp;
            {{ __('lang.print_contract.end_p_2') }}
        </p>
        <t>{{ __('lang.print_contract.p_3') }}</t>
        <p>
            {{ __('lang.print_contract.contract_year') }} {!! '<u>'.$res->y. ' سال </u>' !!}&nbsp;
            {{ __('lang.print_contract.end_contract_year') }} {!! '<u>'.$res->start_date. '</u>' !!}&nbsp;
            {{ __('lang.print_contract.to') }} {!! '<u>'.$res->end_date. '</u>' !!}&nbsp;
            {{ __('lang.print_contract.is') }}
        </p>
        <t>{{ __('lang.print_contract.p_4') }}</t>
        <p>
            {{ __('lang.print_contract.4-1') }} {{ __('lang.print_contract.price') }} {!! '<u>'.number_format($res->deposit). '</u>' !!} {{ __('lang.print_contract.rial') }}
            ,
        {{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format($res->deposit / 10). '</u>' !!} {{ __('lang.print_contract.toman') }} {{ __('lang.print_contract.4-1_payment_methods') }}
        <ol class="mt-0">
            @foreach($res->payments as $payment)
                @if($payment->payment_reason_id == 2)
                    <li>@if($payment->payment_method == 'cash') {!! '<u>'. __('lang.cash') .'</u>' !!}
                        {{ __('lang.print_contract.4-1_price') }} {!! '<u>'.number_format($payment->fee). '</u>' !!}
                        {{ __('lang.print_contract.rial') }}
                        ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format($payment->fee / 10). '</u>' !!} {{ __('lang.print_contract.toman') }}
                        ،
                        @elseif($payment->payment_method == 'cheque') {!! '<u>'. __('lang.cheque') .'</u>' !!} {{ __('lang.print_contract.4-1_price') }} {!! '<u>'.number_format($payment->fee). '</u>' !!}
                            {{ __('lang.print_contract.rial') }}
                            ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format($payment->fee / 10). '</u>' !!} {{ __('lang.print_contract.toman') }}
                            {{ __('lang.print_contract.4-1_cheque_number') }} {!! '<u>'.$payment->cheque_number. '</u>' !!} {{ __('lang.print_contract.bank') }} {!! '<u>'.bankName($payment->bank). '</u>' !!}
                            {{ __('lang.print_contract.bank_branch') }} {!! '<u>'.$payment->bank_branch. '</u>' !!} {{ __('lang.print_contract.4-1_cheque_date') }} {!! '<u>'.$payment->cheque_date. '</u>' !!}
                            ،
                        @endif</li>
                @endif
            @endforeach
        </ol>
        {{ __('lang.print_contract.end_4-1') }}
        </p>
        <p>
            {{ __('lang.print_contract.4-2.a') }} {!! '<u>'.number_format(($res->rent - $res->rent_discount)*12). '</u>' !!} {{ __('lang.print_contract.rial') }}
            ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format((($res->rent - $res->rent_discount) / 10)*12). '</u>' !!} {{ __('lang.print_contract.toman') }}
            ،
            {{ __('lang.print_contract.for') }} {!! '<u>'.$res->y. ' سال </u>' !!}
            &nbsp; {{ __('lang.print_contract.and') }} {{ __('lang.print_contract.4-2.b') }}
            {!! '<u>'.number_format($res->rent - $res->rent_discount). '</u>' !!} {{ __('lang.print_contract.rial') }}
            ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format(($res->rent - $res->rent_discount) / 10). '</u>' !!} {{ __('lang.print_contract.toman') }}  {{ __('lang.print_contract.is') }}
        </p>
    </div>

</div>
<div size="A4">
    <div class="content">
        <p>
        <ol class="mt-0">
            @foreach($res->payments as $payment)
                @if($payment->payment_reason_id <> 2)
                    <li>{!! '<u>'.paymentReason($payment->payment_reason_id). '</u>' !!}
                        : @if($payment->payment_method == 'cash') {!! '<u>'. __('lang.cash') .'</u>' !!} ،
                        {{ __('lang.print_contract.4-1_price') }} {!! '<u>'.number_format($payment->fee). '</u>' !!}
                        {{ __('lang.print_contract.rial') }}
                        ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format($payment->fee / 10). '</u>' !!} {{ __('lang.print_contract.toman') }} @if($payment->payment_reason_id == 3)  {{ __('lang.print_contract.charge') }} @endif
                        .
                        @elseif($payment->payment_method == 'cheque') {!! '<u>'. __('lang.cheque') .'</u>' !!} @if($payment->cheque_date == '') {{ __('lang.print_contract.without_date') }} @endif
                            ، {{ __('lang.print_contract.4-1_price') }} {!! '<u>'.number_format($payment->fee). '</u>' !!}
                            {{ __('lang.print_contract.rial') }}
                            ,{{ __('lang.print_contract.equivalent') }} {!! '<u>'.number_format($payment->fee / 10). '</u>' !!} {{ __('lang.print_contract.toman') }}
                            {{ __('lang.print_contract.4-1_cheque_number') }} {!! '<u>'.$payment->cheque_number. '</u>' !!} {{ __('lang.print_contract.bank') }} {!! '<u>'.bankName($payment->bank). '</u>' !!}
                            {{ __('lang.print_contract.bank_branch') }} {!! '<u>'.$payment->bank_branch. '</u>' !!}@if($payment->cheque_date <> '') {{ __('lang.print_contract.4-1_cheque_date') }} {!! '<u>'.$payment->cheque_date. '</u>' !!}@endif @if($payment->payment_reason_id == 3)  {{ __('lang.print_contract.charge') }} @endif
                            .
                        @endif</li>
                @endif
            @endforeach
        </ol>
        </p>
        <t>{{ __('lang.print_contract.p_5.p') }}</t>
        <p>
            {{ __('lang.print_contract.p_5.a') }} {{ __('lang.print_contract.p_5.b') }}
        </p>
        <t>{{ __('lang.print_contract.p_6') }}</t>
        <ol>
            @foreach(getLang('lang.print_contract.p_6_1') as $key => $lang)
                <li>{{ $lang }}</li>
            @endforeach
        </ol>

    </div>
</div>
<div size="A4">
    <div class="content">
        <ol start="10">
            @foreach(getLang('lang.print_contract.p_6_2') as $key => $lang)
                <li>{{ $lang }}</li>
            @endforeach
        </ol>
    </div>
</div>
<div size="A4">
    <div class="content">
        <ol start="22">
            @foreach(getLang('lang.print_contract.p_6_3') as $key => $lang)
                <li>{{ $lang }}</li>
            @endforeach
        </ol>
    </div>
</div>
<div size="A4">
    <div class="content">
        <ol start="34">
            @foreach(getLang('lang.print_contract.p_6_4') as $key => $lang)
                <li>{{ $lang }}</li>
            @endforeach
        </ol>
        <b>
            {{ __('lang.print_contract.end.a') }} {!! '<u>'.$res->renter->name. ' ' . $res->renter->family. '</u>' !!}
            &nbsp;&nbsp;
            {{ __('lang.print_contract.end.b') }} {!! '<u>'.$res->renter->father_name. '</u>' !!}&nbsp;&nbsp;
            {{ __('lang.print_contract.end.c') }} {!! '<u>'.$res->renter->identity_code. '</u>,' !!}&nbsp;&nbsp;
            {{ __('lang.print_contract.end.d') }} {!! '<u>'.$res->estate->id. '</u>' !!}&nbsp;&nbsp;
            {{ __('lang.print_contract.end.e') }} {!! '<u>'.$res->estate->floor. '</u>' !!}&nbsp;&nbsp;
            {{ __('lang.print_contract.end.f') }}</b>
    </div>
</div>
