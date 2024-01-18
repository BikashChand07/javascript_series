// forof loops returns values
// for (let index = 0; index < 10; index++) {
//     const element=index
//     console.log(element)
//     }


// // in case of array
// const myarray=[1,2,332,321,2121]
// for (let index = 0; index < myarray.length; index++) {
//     const element =myarray[index];
//     console.log(`array element at index ${index} is ${element}`)
//     }

    //forloop with break and continue statement

    // with break statement
    for (let index = 0; index < 10; index++) {
        const element = index;
        if(element == 5)
        {
            console.log("at position 5th, now break")
            break;
        }
        console.log(element)
    }

    //forloop with continue statement
    for (let index = 0; index < 10; index++) {
        const element = index;
        if(element == 5)
        {
            console.log("at position 5th, now continue forwards")
            continue;
        }
        console.log(element)
    }

