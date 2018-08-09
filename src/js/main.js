nw.Window.get().maximize()
if (process.env.APP_ENV.trim() == "development") {
    window.location.href = "http://127.0.0.1:3000"
} else {
    window.location.href = "http://10.130.96.220"
}
