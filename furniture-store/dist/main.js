
let getItemName = () => {
    let input = $("#input").val()
    $("#input").val("")
    $.get(`/priceCheck/${input}`, function(itemData){
        console.log(itemData)
        $("#prices").append(`<div>${itemData.name} is cost ${itemData.price}`)
        console.log(itemData)
    })

}

let sellItem = () => {
    const input= $("#input2").val()
    $("#input2").val("")
    $.get(`/buy/${input}`, (item)=>{
        $("#sells").append(`<div>Congratulations, you've just bought ${item.name} for ${item.price}.
         There are ${item.inventory} left now in the store.</div>`)
    })
}
















