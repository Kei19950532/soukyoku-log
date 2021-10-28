<!DOCTYPE html>
<html lang="ja">

<head>
    <link href="{{ asset('/favicon.ico') }}" type="image/x-icon" rel="icon" />
    @if (config('app.env') === 'production')
    <meta name="robots" content="follow,index">
    @else
    <meta name="robots" content="noindex,nofollow,noarchive,noodp">
    @endif
    <link rel="preload" href="{{ mix('/css/'.config('app.version').'.css')}}" as="style">
    <link rel="stylesheet" href="{{ mix('/css/'.config('app.version').'.css')}}" media="print"
        onload="this.media='all'">
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{ config('app.description') }}" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="Pragma" content="no-cache">
    <title>{{ config('app.name') }}</title>
</head>

<body>
    <div id='root'></div>
    <script src="{{ mix('/js/'.config('app.version').'.js')}}"></script>
</body>

</html>
