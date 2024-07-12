'use client'
import { useEffect, useState } from "react"
import Image from "next/image"


export default function Facebook() {
    const [data, setData] = useState(null)
    const [apiVersion, setApiVersion] = useState('')
    const appID = `3395605417348156`
    const businessID = `1328780174501449` //Frigolima Supermercados
    const pageID = `848509058638369`

    const TokenADS = process.env.ACCESS_TOKEN
    const urlADS = `https://graph.facebook.com/v20.0/${pageID}?fields=about%2Cbio%2Ccover%2Cis_published%2Cinstagram_business_account%2Cpublished_posts&access_token=${TokenADS}`
    /* 
    const url = `https://graph.facebook.com/v20.0/me?fields=id,name,about,birthday,picture,albums&access_token=${accessToken}`
    const urlNova = `https://graph.facebook.com/v20.0/act_271104023055684?access_token=${token4}/insights`
    const cURL = `https://graph.facebook.com/v20.0/me?fields=name%2Cemail%2Crelationship_status%2Clikes.limit(10)%2Cfeed%7Bactions%7D%2Cadaccounts%2Cpicture&access_token=EAAwQSP6yzDwBOxp4zIdspNhEIeZAyNNFoF8YuSYZBNi1ZA0ZCfZCRs4UEFdLZBW6KDIMBJbqPdTipqj5Sp6xrqYFsZB7ZAr2wNv99IMMeuOCd2oN6beZCRXj6dqt1wHsjvGpGT2iCK6xQgZApPH5wTQHALe4bzpSFRxfL0p96DBJn7lZCe4EUgorx1q89MpmgbZAQrOf6lwocFZAoWMVOzS9TDgZDZD`
 */
    const pageToken = `EAAwQSP6yzDwBO7DrOewEwlUXgDK9MNfZAZB9NTZBk1DkfjsWrZBF4gYJfs4GwwFOHGbWZCvuFA91pUZCDKaZCldJeJuBH0FKUZAQ6DI2tlD89tLZCOp1EIZBvjNDGDekY3ggZCCWQvrsVLRMF1bHg8Qo3f6s6i72bEcUIbH1NIPNWZA3mhRRlRG9aZC7xzfo9HQGMEVZB79iZCBX6gV`

    const pgUrl = `https://graph.facebook.com/v20.0/${pageID}?fields=about%2Cbio%2Ccover%2Cis_published%2Cinstagram_business_account%2Cpublished_posts&access_token=${pageToken}`

//Access Token = EAAwQSP6yzDwBO3PJcfyZA4HnJBl0ltlOBzEJH1tCfYjvj5hpwA8QpAZBoZAjdQb65ZAdBcpchZBzHTfwyXJ5X0KfwQSR6zmwuZB6KVenAj3NOFkvGgmwZBAWNdAZBLDw8EZCxXudLPPyv5qi03osZCort8TVa0TDwdJSRjzEUqtkKaMkazj0NsyVmSZATJlnMmVuyxz4MfaCa02NG3ZCI4DEBmgZD
// Token ADS = EAAwQSP6yzDwBO5BLvVQnGdGoOTHZBP2CPK3c3ZAncyBU492V0dZAzXcZCHBA49tzPZA729UqojqiVoW6MF0fhqr8PQPagiaUVsCIPsja63fuc4CyEw48vxYF59PTP0NenjoZCw0gqWWeDKtafD3mgNrRNHeV9uZAMPbb8FMoH54KrEpGJ8MTCrCMJFlbXegxw8aWIkQ2du9

    useEffect(() => {
        fetchData()
        
    }, [])

    const fetchData = async () => {
        const fetchDatas = await fetch(urlADS)
        const datas = await fetchDatas.json()
        setData(datas)
        /* setApiVersion('v20.0') */
    }

    console.log(data)

    return (
        <>
            Dados:
            <div>
                 { data ? (
                    <div key={data.id}>
                        <p>{data.about}</p>
                        <Image 
                        src={data.cover.source} 
                        width={data.cover.offset_x} 
                        height={data.cover.offset_y}
                        alt={data.cover.cover_id}
                        />
                    </div>
                ) : (
                    <p>Carregando..</p>
                )}
            </div>


            {/* <select name="" id="">
                <option value={apiVersion}>v20.0</option>
            </select>
            <button type="submit" value={`Enviar`} onClick={fetchData}>Enviar</button> */}


        </>
    )
}