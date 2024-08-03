$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://apicopy.vercel.app/api/news?api_key=1234567890abcdef1234567890abccxz`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data)
            }
            myweather()
        }
    })
})
