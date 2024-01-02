
@php($i = 0)
@php($j = 0)
<style>
    table td:hover{
        background-color:rgba(0,0,0,0.07);
    }
    .custom-checkbox:hover{
        font-weight: bold;

    }
    .custom-control-label:hover{
        cursor: pointer !important;

    }
    .custom-control-input:hover{
        cursor: pointer !important;
    }
</style>
<form id="permission_form">
@foreach($data as $d)
    <table  class="table table-bordered width-auto overflow-auto">
<tr>
    <th style="width:150px" class="bg-gray-200 font-weight-bold">{{$d[0]->label}}</th>
        @foreach($d[1] as $s)
            <td>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" @if(in_array($s->name, \App\Models\User::find($id)->permissions()->pluck('name')->toArray())) checked @endif name="{{ $id }}" class="custom-control-input checkbox success" id="{{$s->name}}" value="{{$s->id}}">
                    <label class="custom-control-label"  for="{{$s->name}}"><span @if(in_array($s->name, \App\Models\User::find(19)->permissions()->pluck('name')->toArray())) class="color-green" @endif>{{$s->label}}</span></label>
                </div>
            </td>

            @endforeach
</tr>
</table>
@endforeach
</form>

