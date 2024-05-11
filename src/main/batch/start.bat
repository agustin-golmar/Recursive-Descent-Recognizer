@SETLOCAL

@set BASE_PATH=%~dp0
@set BASE_PATH=%BASE_PATH:~0,-1%
@set BASE_PATH=%BASE_PATH%\..\..\..
@set BUILD_PATH=%BASE_PATH%\.build

@node %BUILD_PATH%\src\main\typescript\EntryPoint.js

@ENDLOCAL
