
let getItemName = (){
    let input = $("#input").val()

    $.get(`/priceCheck/${input}`, function(bookData){
        $("body").append(`<div>${bookData.name} - ${bookData.price}`)
        console.log(bookData)
    })

}