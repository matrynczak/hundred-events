export const getArrayWithoutDuplicates = (arr) => {
        return arr.filter((value, index) => arr.indexOf(value) === index)
}