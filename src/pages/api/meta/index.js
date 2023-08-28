
//https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN


export default  async function meta(req, res){
    const igId = `1015397616154827`
    const igSecret = `dca62b5f70d31efeadea1bf673a5bf27`
    const local = `http://localhost:3000`

    const response = await fetch(`https://api.instagram.com/oauth/authorize
    ?client_id=${igId}
    &redirect_uri=${local}
    &scope=user_profile,user_media
    &response_type=code`)

    const data = await response.json()
    console.log(data)

    //res.status(200).json(data)
}