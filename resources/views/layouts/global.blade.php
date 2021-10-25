<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    @yield('head')
    <link type="text/css" rel="stylesheet" href="/css/destyle.css">
    <link type="text/css" rel="stylesheet" href="/css/global.css">
</head>

<body>
    <header class="header">
        <a href="{{ route('index') }}">
            <h1>Title</h1>
        </a>
    </header>
    <main>
        @yield('main')
    </main>
    <footer>
        <div>
            COPYRIGHT ©xxx. All rights Reserved.
        </div>
    </footer>
</body>

</html>
