//  https://github.com/abidhossen/assignment3
function kilometerToMeter(distance) {
    if (distance < 0) {
        return 'Distance can not be negative!';
    }
    else {
        var result = distance * 1000;
    }
    return result;
}
// var output = kilometerToMeter(5);
// console.log(output);



function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return 'Quantity can not be negative!'
    }
    else {
        // Individual prices: (per watch 50, per phone 100, per laptop 500)
        var watchPrice = watchQuantity * 50;
        var phonePrice = phoneQuantity * 100;
        var laptopPrice = laptopQuantity * 500;
        // Total Price:
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
// var output = budgetCalculator(3, 4, 5);
// console.log(output);



function hotelCost(stay) {
    if (stay < 0) {
        return 'Negative days in the hotel not possible!'
    }
    else if (stay <= 10) {
        var totalCost = stay * 100;
    }
    else if (stay <= 20) {
        var stayCost1 = 10 * 100;
        var remainStay = stay - 10;
        var stayCost2 = remainStay * 80;
        var totalCost = stayCost1 + stayCost2;
    }
    else if (stay > 20) {
        var stayCost1 = 10 * 100;
        var stayCost2 = 10 * 80;
        var remainStay = stay - 20;
        var stayCost3 = remainStay * 50;
        var totalCost = stayCost1 + stayCost2 + stayCost3;
    }
    return totalCost;
}
// var totalVara = hotelCost(100);
// console.log(totalVara);



function megaFriend(arrayWithNames) {
    // empty array terminator
    if (arrayWithNames.length == 0) {
        return 'No name has been inputed in the array!'
    }
    var largestName = arrayWithNames[0];
    for (var i = 0; i < arrayWithNames.length; i++) {
        var names = arrayWithNames[i];
        // array with one name terminator
        if (arrayWithNames == arrayWithNames[0]) {
            return 'Only one name, nothing to compare with!'
        }
        // largest name finder 
        else if (names.length > largestName.length) {
            largestName = names;
        }
    }
    return largestName;
}
// var friendList = ['Tamim Iqbal', 'Mushfiqur Rahim', 'Masrafe bin Mortoza', 'Mahmadullah Riad'];
// var output = megaFriend(friendList);
// console.log(output);
