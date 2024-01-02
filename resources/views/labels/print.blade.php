<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            box-sizing: border-box;
        }

        /* Create three equal columns that floats next to each other */
        .column {
            float: left;
            width: 31mm;
            padding: 10px;
            height: 21mm; /* Should be removed. Only for demonstration */
            margin-right: 2mm;
            margin-bottom: 2mm;
            border: 1px solid #ddd;
        }

        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
        }
    </style>
</head>
<body>
@foreach ($items as $key => $item)
    @if ($key % 3 == 0)
        <div class="row text-align-center">
            @endif
            <div class="column">
                <img src="data:image/png;base64,{{ qrcodePng($item->item_code, 2.5) }}"/>
                <span style="font-size:11px;font-family:'MODERN TYPEWRITER',cursive" >{{ $item->item_code }}</span>
            </div>
            @if ($key % 3 == 2)
        </div>
    @endif
@endforeach
</body>
</html>
