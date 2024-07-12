'use client'
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Facebook() {
    const [data, setData] = useState(null)
    const [apiVersion, setApiVersion] = useState('')
    const appID = `3395605417348156`
    const businessID = `1328780174501449` //Frigolima Supermercados
    const accessToken = `EAAwQSP6yzDwBO946eRPPzRFn8tta4dJlk8jrAq1IWaWkLzRoZAh9L8ngLI9QGmbZAqbuxevv8odlcVZCyy55dF999ad0V9AvXg0hPkCzOYis31a8Y93NEcltxGmIwwXFoESiREkYzDjX0zZCl6u7NpdwQQa9jN05I96aAVBBIVJt2vZBlKRPsPxqnw3c58a8CxyEwoF0X`
    const tokenComPermissoes = `EAAwQSP6yzDwBOwt92Oc3O7a31XPFvyBjO8jx6f0dYZAVlYDkfli4KuPKyF3UsLteHbqOSMyegkk33OoAZBQZCTPfUVLG3rVg6zncPBDBUuD9T1UeW0mAit0W87FcvPofShSeGComFbwtc023MkjH90PDhkArBxHIaTpZAi8HUQX8ik5LsMtELMdcplc6HCRE`
    const token3 = `EAAwQSP6yzDwBO4hZCbeHZCVFPSBMP2M8FR3GyrQZC1ZBlF9z5M7rmoli8qHoR3SxGZBoMgm24kqF0kSzQvyNmOiIjmPYv2XofUKM8ZBGLRj7SijrxuG8RL9Em2F8gTbj0pOe2ZAD55RAcZAu1OE5ihHcmIrfKIYTI8xRz6ZCq1RsrPaZAvrPMADSIUQgeZCCHWsxSZB7`
    const token4 = `EAAwQSP6yzDwBOzOOT2EADTpQzMWVA5Ew7MSwNuiZCgq4fb41A22RqEUt95VnW5egv4k9ZAu1cXjnVQ5wXiivZAMBY83iFjZCahMh0JizTp5sn0Oa7fH94oP5T5EbOj9VBlL1onYtWDwTvDMZAoXpN7kH5CEPe3CiSqlKaX9ZAv0C4oRhqqvJ5lMJMSWEaRZAlHIYYRUHN6B`
    const url = `https://graph.facebook.com/v20.0/me?fields=id,name,about,birthday,picture,albums&access_token=${accessToken}`
    const urlNova = `https://graph.facebook.com/v20.0/act_271104023055684?access_token=${token4}/insights`
    const cURL = `https://graph.facebook.com/v20.0/me?fields=name%2Cemail%2Crelationship_status%2Clikes.limit(10)%2Cfeed%7Bactions%7D%2Cadaccounts%2Cpicture&access_token=EAAwQSP6yzDwBOxp4zIdspNhEIeZAyNNFoF8YuSYZBNi1ZA0ZCfZCRs4UEFdLZBW6KDIMBJbqPdTipqj5Sp6xrqYFsZB7ZAr2wNv99IMMeuOCd2oN6beZCRXj6dqt1wHsjvGpGT2iCK6xQgZApPH5wTQHALe4bzpSFRxfL0p96DBJn7lZCe4EUgorx1q89MpmgbZAQrOf6lwocFZAoWMVOzS9TDgZDZD`

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const fetchDatas = await fetch(urlNova)
        const datas = await fetchDatas.json()
        setData(datas)
        /* setApiVersion('v20.0') */
    }

    console.log(data)

    return (
        <>
            Dados:
            <div>
                {/* { data ? (
                    <div key={data.id}>
                        <p>{data.name}</p>
                        <Image 
                        src={data.picture.data.url} 
                        width={data.picture.data.width} 
                        height={data.picture.data.height}
                        alt={data.name}
                        />
                    </div>
                ) : (
                    <p>Carregando..</p>
                )} */}
            </div>


            {/* <select name="" id="">
                <option value={apiVersion}>v20.0</option>
            </select>
            <button type="submit" value={`Enviar`} onClick={fetchData}>Enviar</button> */}


        </>
    )
}