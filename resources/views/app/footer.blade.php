@if (mobileApp())
    <script src="{{ asset('finally/js/app.js') }}"></script>
@endif

@unless(mobileApp())
    <script src="{{asset('finally/js/all.js')}}"></script>
    @stack('scripts')
@endunless



