// You should implement your task here.

module.exports = function towelSort(matrix) {
    let output = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 != 0) {
                output.push(...matrix[i].reverse());
            } else {
                output.push(...matrix[i]);
            }

        }
    }
    return output;


}
